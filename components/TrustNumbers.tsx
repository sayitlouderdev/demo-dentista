'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'

const STATS = [
  {
    value: 3400,
    suffix: '+',
    label: 'Pacientes satisfechos',
    description: 'Familias que confían en nosotros',
  },
  {
    value: 12,
    suffix: ' años',
    label: 'De experiencia clínica',
    description: 'Excelencia desde 2012',
  },
  {
    value: 4.9,
    suffix: '/5',
    label: 'Calificación promedio',
    description: 'En 180 reseñas verificadas',
    decimals: 1,
  },
  {
    value: 8,
    suffix: '+',
    label: 'Tecnologías premium',
    description: 'Equipamiento de última generación',
  },
]

export default function TrustNumbers() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="bg-night py-24 md:py-32 relative overflow-hidden"
      aria-label="Estadísticas de confianza"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 80% 20%, #0D1F2D 0%, #1a3347 100%)',
        }}
        aria-hidden="true"
      />
      {/* Top/bottom hairlines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="flex items-center gap-3 mb-16 justify-center"
        >
          <span className="w-6 h-px bg-gold/50" aria-hidden="true" />
          <span className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-gold/60">
            Números que nos respaldan
          </span>
          <span className="w-6 h-px bg-gold/50" aria-hidden="true" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="group bg-night hover:bg-white/[0.03] transition-colors duration-500 px-8 py-12 flex flex-col gap-3 items-center text-center"
            >
              <div
                className="font-cormorant font-light text-gold leading-none"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 4rem)' }}
                aria-hidden="true"
              >
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <div className="w-8 h-px bg-gold/30 group-hover:w-12 transition-all duration-500" aria-hidden="true" />
              <p className="font-montserrat text-[11px] uppercase tracking-[0.15em] text-white/80 font-medium">
                {stat.label}
              </p>
              <p className="font-montserrat text-xs text-white/35 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
