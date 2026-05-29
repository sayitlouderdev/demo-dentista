import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso de Privacidad | Clínica Dental Élite Mérida',
  description: 'Aviso de privacidad de Clínica Dental Élite Mérida conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.',
}

export default function AvisoPrivacidad() {
  return (
    <div className="bg-ivory min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-montserrat text-[11px] uppercase tracking-[0.2em] text-anthracite/50 hover:text-gold transition-colors duration-300 mb-12"
        >
          ← Volver al inicio
        </Link>

        <h1 className="font-cormorant font-light text-night mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
          Aviso de Privacidad
        </h1>
        <p className="font-montserrat text-[12px] text-anthracite/40 mb-12">
          Última actualización: enero de 2025
        </p>

        <div className="prose font-montserrat text-[14px] text-anthracite/70 leading-relaxed space-y-8">
          <section>
            <h2 className="font-cormorant font-medium text-night text-xl mb-3">Responsable del tratamiento</h2>
            <p>
              Clínica Dental Élite Mérida, con domicilio en Calle 17 #312 × 26 y 28, Col. García Ginerés,
              C.P. 97070, Mérida, Yucatán, México, es responsable del uso y protección de sus datos personales.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant font-medium text-night text-xl mb-3">Datos personales que recabamos</h2>
            <p>Recabamos los siguientes datos personales:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono / WhatsApp</li>
              <li>Información sobre el servicio de interés</li>
              <li>Datos de salud bucal proporcionados voluntariamente en consulta</li>
            </ul>
          </section>

          <section>
            <h2 className="font-cormorant font-medium text-night text-xl mb-3">Finalidades del tratamiento</h2>
            <p>Sus datos personales serán utilizados para:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Atender y dar seguimiento a sus solicitudes de cita o información</li>
              <li>Brindar atención odontológica y llevar su historial clínico</li>
              <li>Enviar comunicaciones sobre tratamientos, citas y recordatorios</li>
              <li>Cumplir con obligaciones legales y fiscales</li>
            </ul>
          </section>

          <section>
            <h2 className="font-cormorant font-medium text-night text-xl mb-3">Derechos ARCO</h2>
            <p>
              Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales
              (derechos ARCO). Para ejercerlos, envíe una solicitud a{' '}
              <a href="mailto:hola@liberastudio.com" className="text-gold hover:text-gold-dark underline underline-offset-2 transition-colors">
                hola@liberastudio.com
              </a>{' '}
              indicando su nombre completo, los datos a rectificar o cancelar, y copia de su identificación oficial.
              Responderemos en un plazo máximo de 20 días hábiles.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant font-medium text-night text-xl mb-3">Transferencia de datos</h2>
            <p>
              No realizamos transferencias de datos personales a terceros, salvo las requeridas por ley o por
              autoridades competentes en los términos de la legislación aplicable.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant font-medium text-night text-xl mb-3">Cambios al aviso de privacidad</h2>
            <p>
              Nos reservamos el derecho de modificar este aviso en cualquier momento. Cualquier cambio estará
              disponible en esta misma página con la fecha de actualización correspondiente.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-anthracite/10">
          <p className="font-montserrat text-[11px] text-anthracite/35">
            © {new Date().getFullYear()} Clínica Dental Élite Mérida. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  )
}
