'use client'

import { motion } from 'framer-motion'
import { Search, FileText, Star } from 'lucide-react'
import { useInViewSection } from '@/hooks/useInViewSection'
import { EyebrowBadge } from './ui/eyebrow-badge'

const STEPS = [
  {
    number: '01',
    icon: Search,
    title: 'Diagnóstico integral',
    description:
      'Evaluación clínica completa con radiografía digital 3D, fotografías intraorales de alta resolución y análisis periodontal. Identificamos cada necesidad con precisión absoluta.',
    detail: 'Primera consulta gratuita · 60 minutos',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Plan personalizado',
    description:
      'Diseño digital de tu nueva sonrisa antes de iniciar. Te presentamos opciones de tratamiento con simulación fotorrealista, costos detallados y tiempos estimados sin compromisos.',
    detail: 'Presentación visual · Cotización transparente',
  },
  {
    number: '03',
    icon: Star,
    title: 'Resultado perfecto',
    description:
      'Ejecución milimétrica por nuestro equipo especializado con seguimiento continuo. Garantía post-tratamiento y protocolo de mantenimiento personalizado para resultados duraderos.',
    detail: 'Garantía incluida · Seguimiento 12 meses',
  },
]

export default function Process() {
  const { ref, isInView } = useInViewSection()

  return (
    <section
      ref={ref}
      className="bg-ivory py-28 md:py-40 relative overflow-hidden"
      aria-labelledby="process-title"
    >
      {/* Decorative background number */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-cormorant text-[20vw] font-light text-anthracite/[0.03] leading-none pointer-events-none select-none"
        aria-hidden="true"
      >
        3
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <EyebrowBadge>Nuestro proceso</EyebrowBadge>
          </motion.div>
          <motion.h2
            id="process-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.06, ease: [0.32, 0.72, 0, 1] }}
            className="font-cormorant font-light text-night"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
          >
            Tres pasos hacia
            <br />
            tu sonrisa ideal.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector lines (desktop) */}
          <div
            className="hidden md:block absolute top-14 left-[calc(33.33%+1rem)] right-[calc(33.33%+1rem)] h-px bg-gradient-to-r from-gold/30 via-gold/60 to-gold/30"
            aria-hidden="true"
          />

          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.32, 0.72, 0, 1] }}
                className={`relative ${i === 1 ? 'md:mt-12' : ''}`}
              >
                {/* Double-bezel card */}
                <div className="p-1.5 bg-white/60 ring-1 ring-anthracite/8 rounded-[1.75rem] h-full">
                  <div className="bg-white rounded-[calc(1.75rem-0.375rem)] p-8 flex flex-col gap-5 h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
                    {/* Step number + icon */}
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-gold/8 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-gold" aria-hidden="true" />
                      </div>
                      <span className="font-cormorant text-5xl font-light text-anthracite/10 leading-none">
                        {step.number}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2 flex-1">
                      <h3 className="font-cormorant text-2xl font-medium text-night">
                        {step.title}
                      </h3>
                      <p className="font-montserrat text-[13px] text-anthracite/60 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-anthracite/6">
                      <p className="font-montserrat text-[10px] uppercase tracking-[0.15em] text-gold/70">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-3 border border-anthracite/15 text-anthracite font-montserrat text-[12px] uppercase tracking-[0.15em] px-8 py-4 rounded-full hover:border-gold/50 hover:text-gold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
          >
            <span>Comenzar mi diagnóstico</span>
            <span className="w-7 h-7 rounded-full bg-anthracite/5 flex items-center justify-center group-hover:translate-x-1 group-hover:bg-gold/10 transition-all duration-300" aria-hidden="true">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
