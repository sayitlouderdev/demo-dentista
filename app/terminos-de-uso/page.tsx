import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos de Uso | Clínica Dental Élite Mérida',
  description: 'Términos y condiciones de uso del sitio web de Clínica Dental Élite Mérida.',
}

export default function TerminosDeUso() {
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
          Términos de Uso
        </h1>
        <p className="font-montserrat text-[12px] text-anthracite/40 mb-12">
          Última actualización: enero de 2025
        </p>

        <div className="prose font-montserrat text-[14px] text-anthracite/70 leading-relaxed space-y-8">
          <section>
            <h2 className="font-cormorant font-medium text-night text-xl mb-3">Aceptación de los términos</h2>
            <p>
              Al acceder y utilizar este sitio web, usted acepta cumplir con los presentes términos de uso.
              Si no está de acuerdo con alguno de ellos, le pedimos que no utilice este sitio.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant font-medium text-night text-xl mb-3">Uso permitido</h2>
            <p>Este sitio web está destinado exclusivamente a:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Informarse sobre los servicios odontológicos que ofrecemos</li>
              <li>Solicitar información o agendar citas</li>
              <li>Contactar a nuestro equipo de profesionales</li>
            </ul>
            <p className="mt-4">
              Queda prohibido el uso del sitio para fines ilícitos, la reproducción no autorizada de contenido
              o cualquier actividad que interfiera con su funcionamiento normal.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant font-medium text-night text-xl mb-3">Contenido informativo</h2>
            <p>
              La información médica y odontológica publicada en este sitio tiene un carácter estrictamente
              informativo y no constituye diagnóstico ni recomendación médica. Para cualquier evaluación clínica,
              es necesario acudir a consulta con nuestros especialistas.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant font-medium text-night text-xl mb-3">Propiedad intelectual</h2>
            <p>
              Todos los contenidos de este sitio web — incluyendo textos, imágenes, logotipos y diseños —
              son propiedad de Clínica Dental Élite Mérida o de sus proveedores de contenido, y están
              protegidos por las leyes de propiedad intelectual aplicables. Su reproducción total o parcial
              sin autorización escrita está prohibida.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant font-medium text-night text-xl mb-3">Limitación de responsabilidad</h2>
            <p>
              Clínica Dental Élite Mérida no se hace responsable de daños directos o indirectos derivados
              del uso o imposibilidad de uso de este sitio web, ni de errores u omisiones en los contenidos.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant font-medium text-night text-xl mb-3">Legislación aplicable</h2>
            <p>
              Los presentes términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier
              controversia derivada de su interpretación o aplicación se someterá a los tribunales
              competentes de Mérida, Yucatán.
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
