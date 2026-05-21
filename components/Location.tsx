'use client'

import { motion } from 'framer-motion'
import { useInViewSection } from '@/hooks/useInViewSection'
import { EyebrowBadge } from './ui/eyebrow-badge'
import { MapPin, Phone, MessageCircle, Clock, Navigation } from 'lucide-react'

const HOURS = [
  { days: 'Lunes – Viernes', hours: '9:00 – 14:00  ·  16:00 – 21:00' },
  { days: 'Sábado', hours: '9:00 – 13:00' },
  { days: 'Domingo', hours: 'Cerrado' },
]

export default function Location() {
  const { ref, isInView } = useInViewSection()

  return (
    <section
      ref={ref}
      id="ubicacion"
      className="bg-night py-28 md:py-40 relative overflow-hidden"
      aria-labelledby="location-title"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: map */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            {/* Double-bezel map wrapper */}
            <div className="p-2 bg-white/4 ring-1 ring-white/10 rounded-[2rem]">
              <div className="rounded-[calc(2rem-0.5rem)] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9!2d-89.6240!3d21.0060!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f567723fa7fb0e5%3A0x98ef2c3f8b4e0c42!2sMontebello%2C%20M%C3%A9rida%2C%20Yuc.%2C%20Mexico!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
                  width="100%"
                  height="400"
                  style={{ border: 0, filter: 'grayscale(20%) contrast(1.05)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Clínica Dental Élite Mérida en Montebello"
                  aria-label="Mapa de Google con la ubicación de la clínica en Montebello, Mérida"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: info */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-col gap-8"
          >
            <div>
              <EyebrowBadge dim className="mb-6">Cómo encontrarnos</EyebrowBadge>
              <h2
                id="location-title"
                className="font-cormorant font-light text-ivory"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Visítanos en
                <br />
                <em className="text-gold not-italic">Montebello, Mérida.</em>
              </h2>
            </div>

            {/* Address card */}
            <div className="p-1.5 bg-white/4 ring-1 ring-white/8 rounded-2xl">
              <div className="bg-white/4 rounded-[calc(1rem-0.375rem)] p-5 flex gap-4">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-montserrat text-[11px] uppercase tracking-[0.15em] text-gold mb-1.5">Dirección</p>
                  <address className="not-italic font-montserrat text-sm text-white/70 leading-relaxed">
                    Calle 42 #198, Col. Montebello
                    <br />
                    97113 Mérida, Yucatán, México
                  </address>
                  <a
                    href="https://maps.google.com/?q=Calle+42+198+Montebello+Merida+Yucatan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-montserrat text-[11px] text-gold hover:text-gold-light mt-3 transition-colors duration-300"
                    aria-label="Abrir ubicación en Google Maps"
                  >
                    <Navigation className="w-3 h-3" />
                    Cómo llegar
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="p-1.5 bg-white/4 ring-1 ring-white/8 rounded-2xl">
              <div className="bg-white/4 rounded-[calc(1rem-0.375rem)] p-5">
                <div className="flex items-center gap-2.5 mb-4">
                  <Clock className="w-4 h-4 text-gold" aria-hidden="true" />
                  <p className="font-montserrat text-[11px] uppercase tracking-[0.15em] text-gold">Horarios de atención</p>
                </div>
                <div className="flex flex-col gap-2.5">
                  {HOURS.map((h) => (
                    <div key={h.days} className="flex items-baseline justify-between gap-4">
                      <span className="font-montserrat text-xs text-white/60">{h.days}</span>
                      <span className={`font-montserrat text-xs text-right ${h.days === 'Domingo' ? 'text-white/30' : 'text-white/80'}`}>
                        {h.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+529992345678"
                className="group flex-1 flex items-center justify-center gap-2.5 border border-white/15 text-white/70 hover:border-gold/40 hover:text-gold font-montserrat text-[11px] uppercase tracking-[0.12em] px-6 py-3.5 rounded-full transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]"
                aria-label="Llamar a la clínica"
              >
                <Phone className="w-3.5 h-3.5" />
                999 234 5678
              </a>
              <a
                href="https://wa.me/529992345679?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 flex items-center justify-center gap-2.5 bg-gold text-night hover:bg-gold-light font-montserrat text-[11px] font-semibold uppercase tracking-[0.12em] px-6 py-3.5 rounded-full transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]"
                aria-label="Enviar mensaje por WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>

            {/* Como llegar info */}
            <p className="font-montserrat text-[12px] text-white/35 leading-relaxed">
              A 2 minutos de Plaza Altabrisa · Estacionamiento propio · Fácil acceso en transporte público
              (ruta 59 y 65) · Zona Montebello frente a Calle 51.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
