'use client'

import { motion } from 'framer-motion'
import { Zap, RefreshCw, AlignCenter, Sun, Crown, Scissors } from 'lucide-react'
import { useInViewSection } from '@/hooks/useInViewSection'
import { EyebrowBadge } from './ui/eyebrow-badge'

const SERVICES = [
  {
    icon: Zap,
    title: 'Endodoncia',
    subtitle: 'Tratamiento de conductos',
    description:
      'Eliminación de infecciones con tecnología rotaria de última generación. Procedimiento sin dolor bajo anestesia de precisión.',
    duration: '1–2 sesiones',
    tag: 'Alta demanda',
  },
  {
    icon: RefreshCw,
    title: 'Rehabilitación Oral',
    subtitle: 'Reconstrucción integral',
    description:
      'Restauración completa de la función y estética mediante prótesis, implantes y coronas diseñadas digitalmente para cada paciente.',
    duration: '4–8 semanas',
    tag: 'Especialidad estrella',
  },
  {
    icon: AlignCenter,
    title: 'Ortodoncia Invisible',
    subtitle: 'Alineadores a medida',
    description:
      'Sistemas de alineadores transparentes personalizados con escaneo digital 3D. Sin brackets, sin incomodidades, sin límites.',
    duration: '6–18 meses',
    tag: 'Sin brackets',
  },
  {
    icon: Sun,
    title: 'Blanqueamiento Láser',
    subtitle: 'Hasta 8 tonos más blanco',
    description:
      'Activación fotoquímica con luz LED de espectro azul. Resultados visibles desde la primera sesión, sin sensibilidad prolongada.',
    duration: '1 sesión (90 min)',
    tag: 'Resultado inmediato',
  },
  {
    icon: Crown,
    title: 'Coronas de Porcelana',
    subtitle: 'Cerámica IPS e.max',
    description:
      'Restauraciones en cerámica monolítica de alta resistencia. Diseño digital de sonrisa para un resultado estético perfecto y natural.',
    duration: '2 sesiones',
    tag: 'Premium',
  },
  {
    icon: Scissors,
    title: 'Cirugía Bucal',
    subtitle: 'Procedimientos avanzados',
    description:
      'Extracciones complejas, implantes oseointegrados, injertos óseos y cirugía periodontal con protocolo de sedación consciente.',
    duration: 'Según diagnóstico',
    tag: 'Certificado',
  },
]

export default function Services() {
  const { ref, isInView } = useInViewSection()

  return (
    <section
      ref={ref}
      id="servicios"
      className="bg-ivory py-20 md:py-28 relative"
      aria-labelledby="servicios-title"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-5"
            >
              <EyebrowBadge>Tratamientos</EyebrowBadge>
            </motion.div>
            <motion.h2
              id="servicios-title"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.32, 0.72, 0, 1] }}
              className="font-cormorant font-light text-night leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
            >
              Servicios que
              <br />
              transforman sonrisas.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-montserrat text-sm text-anthracite/55 leading-relaxed max-w-xs md:text-right"
          >
            Cada tratamiento es diseñado específicamente para tu caso, con los estándares más
            exigentes de la odontología europea.
          </motion.p>
        </div>

        {/* Grid — asymmetric bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.32, 0.72, 0, 1] }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl px-7 py-8 flex flex-col gap-5 border border-anthracite/8 shadow-sm hover:border-gold/25 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    {/* Icon + tag */}
                    <div className="flex items-start justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-gold/8 flex items-center justify-center group-hover:bg-gold/15 transition-colors duration-400">
                        <Icon className="w-5 h-5 text-gold" aria-hidden="true" />
                      </div>
                      <span className="font-montserrat text-[9px] uppercase tracking-[0.2em] text-gold/70 bg-gold/8 px-2.5 py-1 rounded-full">
                        {service.tag}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-cormorant text-2xl font-medium text-night leading-tight">
                        {service.title}
                      </h3>
                      <p className="font-montserrat text-[10px] uppercase tracking-[0.15em] text-gold">
                        {service.subtitle}
                      </p>
                    </div>

                    <p className="font-montserrat text-[13px] text-anthracite/60 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-2 border-t border-anthracite/6">
                      <span className="font-montserrat text-[11px] text-anthracite/40">
                        {service.duration}
                      </span>
                      <a
                        href="#contacto"
                        className="font-montserrat text-[11px] uppercase tracking-[0.12em] text-gold hover:text-gold-dark flex items-center gap-1.5 transition-colors duration-300"
                        aria-label={`Solicitar información sobre ${service.title}`}
                      >
                        Consultar
                        <span className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">→</span>
                      </a>
                    </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
