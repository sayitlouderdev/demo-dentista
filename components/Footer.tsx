import { Phone, MapPin, Mail } from 'lucide-react'

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function IconYoutube({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  )
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
]

const LEGAL_LINKS = [
  { label: 'Aviso de Privacidad', href: '/aviso-de-privacidad' },
  { label: 'Términos de Uso', href: '/terminos-de-uso' },
  { label: 'Política de Cookies', href: '/politica-de-cookies' },
]

const SOCIAL = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/elitedentalmerida',
    icon: IconInstagram,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/elitedentalmerida',
    icon: IconFacebook,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@elitedentalmerida',
    icon: IconYoutube,
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="footer"
      className="bg-[#060F18] text-white/50 relative overflow-hidden"
      aria-label="Pie de página"
    >
      {/* Top accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" aria-hidden="true" />

      {/* Ambient glow */}
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, #C9A84C 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-12 lg:gap-16 pb-16 border-b border-white/6">
          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="font-cormorant text-[22px] font-light tracking-[0.25em] text-ivory leading-none">
                  ÉLITE
                </span>
                <span className="w-px h-4 bg-gold/50" aria-hidden="true" />
                <span className="font-montserrat text-[9px] uppercase tracking-[0.35em] text-gold/80 leading-none">
                  Dental
                </span>
              </div>
              <p className="font-cormorant text-base font-light italic text-white/40">
                &ldquo;La perfección empieza con tu sonrisa&rdquo;
              </p>
            </div>
            <p className="font-montserrat text-[12px] text-white/35 leading-relaxed max-w-xs">
              Clínica dental premium en Mérida, Yucatán. Especialistas en rehabilitación oral,
              ortodoncia invisible y estética dental de alto nivel desde 2012.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {SOCIAL.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/30 hover:bg-gold/8 transition-all duration-300"
                    aria-label={`Síguenos en ${s.label}`}
                  >
                    <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Nav column */}
          <div>
            <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-white/30 mb-5">
              Navegación
            </p>
            <nav aria-label="Navegación del pie de página">
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="font-montserrat text-[13px] text-white/45 hover:text-gold transition-colors duration-300"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-white/30 mb-5">
              Contacto
            </p>
            <address className="not-italic flex flex-col gap-4">
              <a
                href="tel:+529991874320"
                className="flex items-center gap-3 font-montserrat text-[13px] text-white/45 hover:text-gold transition-colors duration-300"
                aria-label="Llamar a la clínica"
              >
                <Phone className="w-3.5 h-3.5 shrink-0 text-gold/50" aria-hidden="true" />
                +52 999 187 4320
              </a>
              <a
                href="mailto:hola@liberastudio.com"
                className="flex items-center gap-3 font-montserrat text-[13px] text-white/45 hover:text-gold transition-colors duration-300"
                aria-label="Enviar correo a la clínica"
              >
                <Mail className="w-3.5 h-3.5 shrink-0 text-gold/50" aria-hidden="true" />
                hola@liberastudio.com
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-3.5 h-3.5 shrink-0 text-gold/50 mt-0.5" aria-hidden="true" />
                <span className="font-montserrat text-[13px] text-white/35 leading-relaxed">
                  Calle 17 #312 × 26 y 28, Col. García Ginerés
                  <br />
                  97070 Mérida, Yucatán
                </span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-montserrat text-[11px] text-white/25">
            © {year} Clínica Dental Élite Mérida. Todos los derechos reservados.
          </p>
          <nav aria-label="Vínculos legales">
            <ul className="flex flex-wrap gap-5 justify-center">
              {LEGAL_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-montserrat text-[11px] text-white/25 hover:text-white/50 transition-colors duration-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
