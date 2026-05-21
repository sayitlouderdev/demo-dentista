import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import fs from 'fs'
import path from 'path'

const schema = z.object({
  nombre: z.string().min(2),
  email: z.string().email(),
  telefono: z.string().min(10).max(15),
  servicio: z.string().min(1),
  modalidad: z.enum(['presencial', 'videoconsulta']),
  mensaje: z.string().min(10),
  privacidad: z.literal(true),
  _hp: z.string().max(0).optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = schema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { message: 'Datos inválidos', errors: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const { _hp, ...data } = parsed.data

    // Honeypot check
    if (_hp) {
      return NextResponse.json({ message: 'OK' })
    }

    const submission = {
      ...data,
      timestamp: new Date().toISOString(),
      ip: req.headers.get('x-forwarded-for') ?? 'unknown',
    }

    // Try SMTP if configured
    const smtpHost = process.env.SMTP_HOST
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS

    if (smtpHost && smtpUser && smtpPass) {
      const nodemailer = await import('nodemailer')
      const transporter = nodemailer.default.createTransport({
        host: smtpHost,
        port: parseInt(process.env.SMTP_PORT ?? '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: { user: smtpUser, pass: smtpPass },
      })

      await transporter.sendMail({
        from: `"Clínica Dental Élite Mérida" <${smtpUser}>`,
        to: process.env.CONTACT_EMAIL ?? 'sayitlouder.dev@gmail.com',
        replyTo: data.email,
        subject: `Nueva consulta de ${data.nombre} — ${data.servicio}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #FAFAF7; border-radius: 12px;">
            <h2 style="color: #0D1F2D; font-size: 24px; margin-bottom: 8px;">Nueva solicitud de consulta</h2>
            <p style="color: #C9A84C; font-size: 12px; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 24px;">Clínica Dental Élite Mérida</p>
            <table style="width: 100%; border-collapse: collapse;">
              ${Object.entries({
                Nombre: data.nombre,
                Email: data.email,
                Teléfono: data.telefono,
                Servicio: data.servicio,
                Modalidad: data.modalidad,
                Mensaje: data.mensaje,
                'Fecha y hora': submission.timestamp,
              }).map(([k, v]) => `
                <tr>
                  <td style="padding: 8px 12px; background: #f0f0ec; font-weight: 600; color: #2C2C2C; font-size: 13px; border-radius: 6px; white-space: nowrap;">${k}</td>
                  <td style="padding: 8px 12px; color: #555; font-size: 13px;">${v}</td>
                </tr>
              `).join('')}
            </table>
          </div>
        `,
        text: Object.entries(submission)
          .map(([k, v]) => `${k}: ${v}`)
          .join('\n'),
      })
    } else {
      // Fallback: save to JSON file
      const dataDir = path.join(process.cwd(), 'data')
      if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })

      const filePath = path.join(dataDir, 'contact-submissions.json')
      let submissions: unknown[] = []

      if (fs.existsSync(filePath)) {
        try {
          submissions = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        } catch {
          submissions = []
        }
      }

      submissions.push(submission)
      fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2), 'utf-8')
    }

    return NextResponse.json({ message: 'Mensaje enviado correctamente' }, { status: 200 })
  } catch (err) {
    console.error('[/api/contact]', err)
    return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 })
  }
}
