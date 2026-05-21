'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInViewSection } from '@/hooks/useInViewSection'
import { EyebrowBadge } from './ui/eyebrow-badge'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    q: '¿Cuánto cuesta la primera consulta?',
    a: 'La primera consulta de diagnóstico es completamente gratuita. Incluye exploración clínica, fotografías intraorales y una evaluación preliminar de tus necesidades. Sin compromiso.',
  },
  {
    q: '¿Ofrecen facilidades de pago para tratamientos de alto costo?',
    a: 'Sí. Contamos con planes de financiamiento de hasta 24 meses sin intereses con tarjetas participantes, así como convenios con instituciones de financiamiento dental. Nuestro asesor te presenta las opciones sin costo.',
  },
  {
    q: '¿Cuánto tiempo dura un tratamiento de ortodoncia invisible?',
    a: 'Depende de la complejidad de cada caso. Los tratamientos leves pueden resolverse en 4–6 meses. Los casos moderados toman entre 8–14 meses. Al final del diagnóstico te damos una estimación personalizada con simulación digital del resultado.',
  },
  {
    q: '¿Es dolorosa la endodoncia?',
    a: 'No. Realizamos todos los procedimientos bajo anestesia de precisión de acción rápida. La mayoría de los pacientes reportan no haber sentido absolutamente nada durante el tratamiento. Contamos también con gas de óxido nitroso para pacientes con ansiedad dental.',
  },
  {
    q: '¿Cuánto dura el efecto del blanqueamiento láser?',
    a: 'El efecto puede mantenerse entre 1 y 3 años dependiendo de tus hábitos (café, vino, tabaco). Te proporcionamos un kit de mantenimiento domiciliario y recomendamos sesiones de retoque anuales para mantener el resultado óptimo.',
  },
  {
    q: '¿Atienden a pacientes de otras ciudades o países?',
    a: 'Sí, con mucho gusto. Varios de nuestros pacientes vienen de Cancún, CDMX y del extranjero. Ofrecemos consultas previas por videollamada, coordinamos su visita para optimizar tiempos y podemos recomendar hospedaje de calidad cercano a la clínica.',
  },
]

export default function FAQ() {
  const { ref, isInView } = useInViewSection()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      ref={ref}
      className="bg-ivory py-28 md:py-40"
      aria-labelledby="faq-title"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <EyebrowBadge>Preguntas frecuentes</EyebrowBadge>
          </motion.div>
          <motion.h2
            id="faq-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.06, ease: [0.32, 0.72, 0, 1] }}
            className="font-cormorant font-light text-night"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
          >
            Todo lo que necesitas
            <br />
            saber antes de empezar.
          </motion.h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.32, 0.72, 0, 1] }}
            >
              {/* Double-bezel */}
              <div
                className={`p-1 ring-1 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  openIndex === i
                    ? 'bg-white ring-gold/25 shadow-[0_8px_32px_rgba(201,168,76,0.08)]'
                    : 'bg-white/60 ring-anthracite/8 hover:ring-anthracite/15'
                }`}
              >
                <div className="rounded-[calc(1rem-0.25rem)] overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    aria-expanded={openIndex === i}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span className="font-cormorant text-xl font-medium text-night leading-snug">
                      {faq.q}
                    </span>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-400 ${
                        openIndex === i
                          ? 'bg-gold text-night'
                          : 'bg-anthracite/6 text-anthracite/50 hover:bg-gold/10 hover:text-gold'
                      }`}
                      aria-hidden="true"
                    >
                      {openIndex === i ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === i && (
                      <motion.div
                        id={`faq-answer-${i}`}
                        role="region"
                        aria-labelledby={`faq-question-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="px-6 pb-6">
                          <div className="h-px bg-anthracite/6 mb-4" aria-hidden="true" />
                          <p className="font-montserrat text-[14px] text-anthracite/65 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center font-montserrat text-sm text-anthracite/50 mt-14"
        >
          ¿Tienes otra pregunta?{' '}
          <a href="#contacto" className="text-gold hover:text-gold-dark transition-colors duration-300 underline underline-offset-4">
            Escríbenos directamente
          </a>
        </motion.p>
      </div>
    </section>
  )
}
