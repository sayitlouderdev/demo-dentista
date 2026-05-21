'use client'

import { useState } from 'react'
import { useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle, AlertCircle, Loader2, Send } from 'lucide-react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

const schema = z.object({
  nombre: z.string().min(2, 'Ingresa tu nombre completo'),
  email: z.string().email('Email inválido'),
  telefono: z.string().min(10, 'Teléfono de al menos 10 dígitos').max(15),
  servicio: z.string().min(1, 'Selecciona un servicio'),
  modalidad: z.enum(['presencial', 'videoconsulta'], 'Selecciona una modalidad'),
  mensaje: z.string().min(10, 'Cuéntanos un poco más (mínimo 10 caracteres)'),
  privacidad: z.literal(true, 'Debes aceptar el aviso de privacidad'),
  _hp: z.string().max(0).optional(), // honeypot
})

type FormData = z.infer<typeof schema>

const SERVICES = [
  'Endodoncia',
  'Rehabilitación Oral',
  'Ortodoncia Invisible',
  'Blanqueamiento Láser',
  'Coronas de Porcelana',
  'Cirugía Bucal',
  'Diagnóstico / Primera consulta',
  'Otro',
]

export default function ContactForm() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    if (data._hp) return // honeypot triggered
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.message || 'Error al enviar')
      }
      setStatus('success')
      reset()
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Error al enviar el formulario')
      setStatus('error')
    }
  }

  return (
    <section
      ref={ref}
      id="contacto"
      className="bg-ivory py-28 md:py-40 relative"
      aria-labelledby="contact-title"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="lg:sticky lg:top-36"
          >
            <span className="inline-flex items-center gap-2 font-montserrat text-[10px] uppercase tracking-[0.3em] text-gold bg-gold/10 px-3 py-1.5 rounded-full mb-7">
              Solicitar cita
            </span>
            <h2
              id="contact-title"
              className="font-cormorant font-light text-night leading-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
            >
              Tu sonrisa perfecta
              <br />
              empieza con un mensaje.
            </h2>
            <p className="font-montserrat text-sm text-anthracite/55 leading-relaxed max-w-sm mb-10">
              Cuéntanos tu caso y nuestro equipo te contactará en menos de 24 horas. Primera consulta
              de diagnóstico sin costo.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { icon: '✦', text: 'Respuesta garantizada en 24 horas' },
                { icon: '✦', text: 'Primera consulta 100% gratuita' },
                { icon: '✦', text: 'Presupuesto sin compromiso' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-gold text-sm" aria-hidden="true">{item.icon}</span>
                  <span className="font-montserrat text-sm text-anthracite/60">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="p-2 bg-white/60 ring-1 ring-anthracite/8 rounded-[2rem]">
              <div className="bg-white rounded-[calc(2rem-0.5rem)] p-8 md:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center text-center gap-5 py-12"
                      role="alert"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-cormorant text-2xl font-medium text-night mb-2">
                          ¡Mensaje recibido!
                        </h3>
                        <p className="font-montserrat text-sm text-anthracite/60 max-w-xs mx-auto">
                          Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setStatus('idle')}
                        className="text-anthracite border-anthracite/20 hover:border-gold/40 hover:text-gold"
                      >
                        Enviar otro mensaje
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col gap-5"
                      noValidate
                      aria-label="Formulario de contacto"
                    >
                      {/* Honeypot */}
                      <input
                        type="text"
                        tabIndex={-1}
                        aria-hidden="true"
                        className="hidden"
                        {...register('_hp')}
                      />

                      <div className="grid sm:grid-cols-2 gap-4">
                        <Input
                          label="Nombre completo"
                          placeholder="Ej. Ana García López"
                          error={errors.nombre?.message}
                          aria-required="true"
                          {...register('nombre')}
                        />
                        <Input
                          label="Correo electrónico"
                          type="email"
                          placeholder="tu@correo.com"
                          error={errors.email?.message}
                          aria-required="true"
                          {...register('email')}
                        />
                      </div>

                      <Input
                        label="Teléfono / WhatsApp"
                        type="tel"
                        placeholder="+52 999 123 4567"
                        error={errors.telefono?.message}
                        {...register('telefono')}
                      />

                      {/* Servicio select */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="servicio"
                          className="font-montserrat text-[11px] uppercase tracking-[0.15em] text-anthracite/60 font-medium"
                        >
                          Servicio de interés
                        </label>
                        <div className="relative">
                          <div className="absolute inset-0 rounded-xl bg-anthracite/5 ring-1 ring-anthracite/10 pointer-events-none" />
                          <select
                            id="servicio"
                            className="relative w-full bg-transparent px-4 py-3.5 font-montserrat text-sm text-anthracite outline-none rounded-xl appearance-none cursor-pointer focus:ring-1 focus:ring-gold/60"
                            aria-required="true"
                            {...register('servicio')}
                          >
                            <option value="">Selecciona un tratamiento</option>
                            {SERVICES.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-anthracite/40">
                            ↓
                          </div>
                        </div>
                        {errors.servicio && (
                          <p className="font-montserrat text-[11px] text-red-500">{errors.servicio.message}</p>
                        )}
                      </div>

                      {/* Modalidad */}
                      <div className="flex flex-col gap-2.5">
                        <p className="font-montserrat text-[11px] uppercase tracking-[0.15em] text-anthracite/60 font-medium">
                          Modalidad de consulta
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { value: 'presencial', label: 'Presencial', desc: 'En clínica' },
                            { value: 'videoconsulta', label: 'Videoconsulta', desc: 'Online' },
                          ].map((opt) => (
                            <label
                              key={opt.value}
                              className="relative flex items-center gap-3 p-4 rounded-xl border border-anthracite/10 hover:border-gold/30 cursor-pointer transition-colors duration-300 has-[:checked]:border-gold/50 has-[:checked]:bg-gold/5"
                            >
                              <input
                                type="radio"
                                value={opt.value}
                                className="sr-only"
                                {...register('modalidad')}
                              />
                              <div className="w-4 h-4 rounded-full border-2 border-anthracite/20 flex items-center justify-center shrink-0">
                                <div className="w-2 h-2 rounded-full bg-gold scale-0 transition-transform duration-200 peer-checked:scale-100" />
                              </div>
                              <div>
                                <p className="font-montserrat text-xs font-semibold text-anthracite">{opt.label}</p>
                                <p className="font-montserrat text-[10px] text-anthracite/40">{opt.desc}</p>
                              </div>
                            </label>
                          ))}
                        </div>
                        {errors.modalidad && (
                          <p className="font-montserrat text-[11px] text-red-500">{errors.modalidad.message}</p>
                        )}
                      </div>

                      <Textarea
                        label="¿En qué podemos ayudarte?"
                        placeholder="Cuéntanos sobre tu situación dental, dudas o lo que deseas mejorar..."
                        error={errors.mensaje?.message}
                        {...register('mensaje')}
                      />

                      {/* Privacy */}
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="mt-0.5 w-4 h-4 rounded border-anthracite/20 accent-gold"
                          aria-required="true"
                          {...register('privacidad')}
                        />
                        <span className="font-montserrat text-[11px] text-anthracite/50 leading-relaxed">
                          He leído y acepto el{' '}
                          <a href="#footer" className="text-gold hover:text-gold-dark transition-colors underline underline-offset-2">
                            Aviso de Privacidad
                          </a>
                          {' '}y el tratamiento de mis datos personales.
                        </span>
                      </label>
                      {errors.privacidad && (
                        <p className="font-montserrat text-[11px] text-red-500">{errors.privacidad.message}</p>
                      )}

                      {status === 'error' && (
                        <div className="flex items-center gap-2 p-3.5 bg-red-50 border border-red-200 rounded-xl" role="alert">
                          <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                          <p className="font-montserrat text-xs text-red-600">{errorMsg || 'Error al enviar. Intenta de nuevo.'}</p>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="group flex items-center justify-center gap-3 bg-gold text-night font-montserrat text-[12px] font-semibold uppercase tracking-[0.15em] px-8 py-4 rounded-full hover:bg-gold-light transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed"
                        aria-label={status === 'loading' ? 'Enviando formulario...' : 'Enviar mensaje de contacto'}
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Enviando...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                            <span>Solicitar mi consulta gratuita</span>
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
