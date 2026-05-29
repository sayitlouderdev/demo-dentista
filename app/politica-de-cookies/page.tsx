import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cookies | Clínica Dental Élite Mérida',
  description: 'Información sobre el uso de cookies en el sitio web de Clínica Dental Élite Mérida.',
}

export default function PoliticaDeCookies() {
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
          Política de Cookies
        </h1>
        <p className="font-montserrat text-[12px] text-anthracite/40 mb-12">
          Última actualización: enero de 2025
        </p>

        <div className="prose font-montserrat text-[14px] text-anthracite/70 leading-relaxed space-y-8">
          <section>
            <h2 className="font-cormorant font-medium text-night text-xl mb-3">¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo al
              visitarlos. Permiten que el sitio recuerde sus preferencias y mejore su experiencia de navegación.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant font-medium text-night text-xl mb-3">Cookies que utilizamos</h2>
            <div className="space-y-4">
              <div className="p-4 bg-anthracite/5 rounded-xl">
                <p className="font-semibold text-night mb-1">Cookies técnicas (necesarias)</p>
                <p>Imprescindibles para el funcionamiento del sitio. No recopilan información personal y no
                  pueden desactivarse.</p>
              </div>
              <div className="p-4 bg-anthracite/5 rounded-xl">
                <p className="font-semibold text-night mb-1">Cookies analíticas</p>
                <p>Nos permiten entender cómo interactúan los usuarios con el sitio para mejorar su funcionamiento.
                  Los datos se recogen de forma anónima y agregada.</p>
              </div>
              <div className="p-4 bg-anthracite/5 rounded-xl">
                <p className="font-semibold text-night mb-1">Cookies de terceros</p>
                <p>Servicios como Google Maps pueden instalar cookies propias al interactuar con el mapa
                  integrado en nuestra sección de ubicación.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-cormorant font-medium text-night text-xl mb-3">Gestión de cookies</h2>
            <p>
              Puede configurar su navegador para rechazar o eliminar cookies en cualquier momento. Tenga en
              cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad del sitio. Consulte la
              ayuda de su navegador para más información sobre cómo gestionar las cookies.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant font-medium text-night text-xl mb-3">Contacto</h2>
            <p>
              Para cualquier consulta relacionada con esta política, contáctenos en{' '}
              <a href="mailto:hola@liberastudio.com" className="text-gold hover:text-gold-dark underline underline-offset-2 transition-colors">
                hola@liberastudio.com
              </a>
              .
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
