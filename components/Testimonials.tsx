'use client'

import { motion } from 'framer-motion'
import { useInViewSection } from '@/hooks/useInViewSection'
import { EyebrowBadge } from './ui/eyebrow-badge'
import Image from 'next/image'
import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Alejandra Mena Torres',
    location: 'Mérida, Yucatán',
    treatment: 'Ortodoncia Invisible',
    rating: 5,
    text: 'Después de años con complejos por mis dientes, me atreví a dar el paso. La Dra. Vega fue increíblemente profesional y paciente. Los resultados superaron todo lo que esperaba. Ya no me escondo al reír.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&auto=format&q=80',
  },
  {
    name: 'Carlos Ibarra Solís',
    location: 'Cancún, Quintana Roo',
    treatment: 'Rehabilitación Oral',
    rating: 5,
    text: 'Vine de Cancún específicamente por la reputación de la clínica. La atención desde recepción hasta el tratamiento fue impecable. Mi rehabilitación completa quedó perfecta. Vale absolutamente cada peso.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&q=80',
  },
  {
    name: 'Valentina Reyes Pech',
    location: 'Mérida, Yucatán',
    treatment: 'Blanqueamiento Láser',
    rating: 5,
    text: 'Una sesión y mis dientes cambiaron completamente. El Dr. Salinas es un artista. Las instalaciones son dignas de una clínica europea y el trato es personalísimo. Mi sonrisa ahora es mi carta de presentación.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&q=80',
  },
  {
    name: 'Miguel Ángel Durán',
    location: 'Mérida, Yucatán',
    treatment: 'Coronas de Porcelana',
    rating: 5,
    text: 'El diseño digital de sonrisa me permitió ver el resultado antes de empezar. Eso me dio mucha confianza. Las coronas quedaron perfectas, nadie adivina que son artificiales. Totalmente recomendado.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&q=80',
  },
  {
    name: 'Sofía Castillo Navarrete',
    location: 'Progreso, Yucatán',
    treatment: 'Endodoncia',
    rating: 5,
    text: 'Tenía terror a los dentistas hasta que llegué aquí. El Dr. Salinas lo hizo sin dolor y con una paciencia infinita. Ahora vengo sin miedo y recomiendo Élite Dental a toda mi familia.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&q=80',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Calificación: ${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? 'fill-gold text-gold' : 'text-anthracite/20'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { ref, isInView } = useInViewSection()

  return (
    <section
      ref={ref}
      id="testimonios"
      className="bg-night py-28 md:py-40 relative overflow-hidden"
      aria-labelledby="testimonials-title"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" aria-hidden="true" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, #C9A84C 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <EyebrowBadge dim>Lo que dicen nuestros pacientes</EyebrowBadge>
          </motion.div>
          <motion.h2
            id="testimonials-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.06, ease: [0.32, 0.72, 0, 1] }}
            className="font-cormorant font-light text-ivory"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
          >
            180 sonrisas
            <br />
            <em className="text-gold not-italic">que nos respaldan.</em>
          </motion.h2>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.32, 0.72, 0, 1] }}
              className="break-inside-avoid"
            >
              {/* Double-bezel card */}
              <div className="p-1.5 bg-white/4 ring-1 ring-white/8 rounded-[1.75rem] hover:ring-gold/20 transition-all duration-500">
                <div className="bg-white/[0.04] rounded-[calc(1.75rem-0.375rem)] p-7 flex flex-col gap-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                  {/* Stars */}
                  <StarRating rating={t.rating} />

                  {/* Quote */}
                  <p className="font-montserrat text-[13px] text-white/65 leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Author */}
                  <footer className="flex items-center gap-3 pt-4 border-t border-white/8">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 ring-1 ring-gold/20">
                      <Image
                        src={t.avatar}
                        alt={`Foto de perfil de ${t.name}`}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <p className="font-montserrat text-xs font-semibold text-ivory">{t.name}</p>
                      <p className="font-montserrat text-[10px] text-white/35">{t.location}</p>
                    </div>
                    <span className="ml-auto font-montserrat text-[10px] uppercase tracking-[0.12em] text-gold/60 bg-gold/8 px-2.5 py-1 rounded-full shrink-0">
                      {t.treatment}
                    </span>
                  </footer>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
