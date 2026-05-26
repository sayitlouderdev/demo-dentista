'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useAnimationFrame, useReducedMotion } from 'framer-motion'
import { useInViewSection } from '@/hooks/useInViewSection'
import { EyebrowBadge } from './ui/eyebrow-badge'
import Image from 'next/image'
import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Patricia Lozano Herrera',
    location: 'Mérida, Yucatán',
    treatment: 'Ortodoncia Invisible',
    rating: 5,
    text: 'Llevaba años postergando el tratamiento por miedo a los brackets. La Dra. Montoya me explicó todo con calma y el proceso fue mucho más sencillo de lo que imaginaba. Hoy sonrío sin pensarlo dos veces.',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&auto=format&q=80',
  },
  {
    name: 'Roberto Cisneros Ávila',
    location: 'Cancún, Quintana Roo',
    treatment: 'Rehabilitación Oral',
    rating: 5,
    text: 'Hice el viaje desde Cancún expresamente. Desde la primera llamada noté que esto era diferente. La rehabilitación quedó exactamente como la vimos en la simulación digital. Vale cada kilómetro.',
    avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=120&auto=format&q=80',
  },
  {
    name: 'Daniela Espinosa Ruiz',
    location: 'Mérida, Yucatán',
    treatment: 'Blanqueamiento Láser',
    rating: 5,
    text: 'Una sola sesión y el cambio fue brutal. El Dr. Fuentes tiene un ojo clínico impresionante. Las instalaciones parecen sacadas de una revista europea y el trato es de primera. Mi sonrisa ahora habla por mí.',
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=120&auto=format&q=80',
  },
  {
    name: 'Fernando Aguirre Nájera',
    location: 'Mérida, Yucatán',
    treatment: 'Coronas de Porcelana',
    rating: 5,
    text: 'Ver mi sonrisa final en la simulación antes de empezar fue lo que me convenció. Las coronas quedaron tan naturales que mi propia familia no nota la diferencia. Trabajo impecable.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&q=80',
  },
  {
    name: 'Mariana Villanueva Cruz',
    location: 'Progreso, Yucatán',
    treatment: 'Endodoncia',
    rating: 5,
    text: 'Fobia al dentista desde niña. El Dr. Fuentes fue tan paciente y claro en cada paso que ni sentí el procedimiento. Ahora vengo sin ansiedad y ya traje a mis dos hijos. No volvería a ningún otro lugar.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&q=80',
  },
]

const DOUBLED = [...TESTIMONIALS, ...TESTIMONIALS]

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

function TestimonialCard({ t }: { t: typeof TESTIMONIALS[number] }) {
  return (
    <div className="p-1.5 bg-white/4 ring-1 ring-white/8 rounded-[1.75rem] hover:ring-gold/20 transition-all duration-500 h-full">
      <div className="bg-white/[0.04] rounded-[calc(1.75rem-0.375rem)] p-7 flex flex-col gap-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] h-full">
        <StarRating rating={t.rating} />
        <p className="font-montserrat text-[13px] text-white/65 leading-relaxed flex-1">
          &ldquo;{t.text}&rdquo;
        </p>
        <footer className="flex items-center gap-3 pt-4 border-t border-white/8">
          <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 ring-1 ring-gold/20">
            <Image src={t.avatar} alt={`Foto de perfil de ${t.name}`} fill className="object-cover" sizes="40px" />
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
  )
}

export default function Testimonials() {
  const { ref, isInView } = useInViewSection()
  const trackRef = useRef<HTMLDivElement>(null)
  const motionX = useMotionValue(0)
  const xAcc = useRef(0)
  const isDragging = useRef(false)
  const reduceMotion = useReducedMotion()

  useAnimationFrame((_, delta) => {
    if (isDragging.current || reduceMotion || !trackRef.current) return
    xAcc.current -= delta * 0.04
    const half = trackRef.current.scrollWidth / 2
    if (-xAcc.current >= half) xAcc.current += half
    motionX.set(xAcc.current)
  })

  return (
    <section
      ref={ref}
      id="testimonios"
      className="bg-night py-24 md:py-32 relative overflow-hidden"
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
      </div>

      {/* Draggable marquee — full bleed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative overflow-hidden select-none"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0px, black 100px, black calc(100% - 100px), transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0px, black 100px, black calc(100% - 100px), transparent 100%)',
        }}
      >
        <motion.div
          ref={trackRef}
          style={{ x: motionX }}
          drag="x"
          dragMomentum={false}
          dragElastic={0}
          className="flex gap-5 w-max py-4 px-10 cursor-grab active:cursor-grabbing"
          onDragStart={() => { isDragging.current = true }}
          onDragEnd={() => {
            isDragging.current = false
            xAcc.current = motionX.get()
          }}
        >
          {DOUBLED.map((t, i) => (
            <div key={i} className="shrink-0 w-[340px] sm:w-[380px]">
              <TestimonialCard t={t} />
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Hint for mobile */}
      <p className="text-center font-montserrat text-[10px] uppercase tracking-[0.2em] text-white/20 mt-6 md:hidden">
        Arrastra para explorar
      </p>
    </section>
  )
}
