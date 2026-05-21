'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, ChevronRight, ChevronLeft, Smile } from 'lucide-react'

const STEPS = [
  {
    question: '¿Cuál es tu principal preocupación dental?',
    options: [
      { value: 'estetica', label: 'Estética / Sonrisa', emoji: '✨' },
      { value: 'dolor', label: 'Dolor o infección', emoji: '🦷' },
      { value: 'alineacion', label: 'Alineación / Mordida', emoji: '📐' },
      { value: 'perdida', label: 'Pérdida de dientes', emoji: '🔧' },
    ],
  },
  {
    question: '¿Con qué urgencia necesitas atención?',
    options: [
      { value: 'urgente', label: 'Urgente (dolor / infección)', emoji: '🚨' },
      { value: 'pronto', label: 'Pronto (esta semana)', emoji: '📅' },
      { value: 'normal', label: 'Normal (este mes)', emoji: '🗓️' },
      { value: 'planificacion', label: 'Estoy planificando', emoji: '🔭' },
    ],
  },
  {
    question: '¿Qué tratamiento te interesa más?',
    options: [
      { value: 'blanqueamiento', label: 'Blanqueamiento', emoji: '🌟' },
      { value: 'ortodoncia', label: 'Ortodoncia invisible', emoji: '😁' },
      { value: 'implantes', label: 'Implantes / Rehabilitación', emoji: '🦾' },
      { value: 'endodoncia', label: 'Endodoncia / Caries', emoji: '🩺' },
    ],
  },
  {
    question: '¿Cuándo preferirías tu cita?',
    options: [
      { value: 'manana', label: 'Mañana (9–14 h)', emoji: '☀️' },
      { value: 'tarde', label: 'Tarde (16–21 h)', emoji: '🌆' },
      { value: 'sabado', label: 'Sábado (9–13 h)', emoji: '🗓️' },
      { value: 'flexible', label: 'Soy flexible', emoji: '🙌' },
    ],
  },
]

const LABELS: Record<string, string> = {
  estetica: 'mejorar la estética de mi sonrisa',
  dolor: 'tratar un dolor o infección dental',
  alineacion: 'corregir la alineación de mis dientes',
  perdida: 'reponer dientes perdidos',
  urgente: 'con urgencia',
  pronto: 'pronto esta semana',
  normal: 'este mes',
  planificacion: 'estoy planificando',
  blanqueamiento: 'blanqueamiento dental',
  ortodoncia: 'ortodoncia invisible',
  implantes: 'implantes o rehabilitación oral',
  endodoncia: 'endodoncia o tratamiento de caries',
  manana: 'por la mañana (9–14 h)',
  tarde: 'por la tarde (16–21 h)',
  sabado: 'el sábado',
  flexible: 'de manera flexible',
}

function buildWhatsAppMessage(answers: string[]) {
  const [concern, urgency, treatment, time] = answers
  return encodeURIComponent(
    `Hola, me interesa una cita para ${LABELS[concern] || concern}. ` +
    `Necesito atención ${LABELS[urgency] || urgency}. ` +
    `Me interesa específicamente ${LABELS[treatment] || treatment}. ` +
    `Prefiero la cita ${LABELS[time] || time}. ` +
    `¿Pueden ayudarme?`
  )
}

export default function DentalQuiz() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [direction, setDirection] = useState(1)

  const reset = () => {
    setStep(0)
    setAnswers([])
    setDirection(1)
  }

  const select = (value: string) => {
    const next = [...answers.slice(0, step), value]
    setAnswers(next)
    setDirection(1)
    if (step < STEPS.length - 1) {
      setStep(step + 1)
    }
  }

  const back = () => {
    if (step > 0) {
      setDirection(-1)
      setStep(step - 1)
    }
  }

  const isDone = answers.length === STEPS.length

  return (
    <>
      {/* Floating trigger */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <AnimatePresence>
          {!open && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              transition={{ delay: 2, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="bg-night/90 backdrop-blur-sm border border-white/10 text-ivory font-montserrat text-xs px-4 py-2.5 rounded-full shadow-lg"
            >
              ¿Qué tratamiento necesitas?
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => { setOpen(!open); reset() }}
          className="w-14 h-14 rounded-full bg-gold text-night shadow-[0_8px_32px_rgba(201,168,76,0.4)] flex items-center justify-center transition-colors duration-300 hover:bg-gold-light"
          aria-label={open ? 'Cerrar asistente dental' : 'Abrir asistente dental'}
          aria-expanded={open}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="x" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }} transition={{ duration: 0.2 }}>
                <X className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div key="smile" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }} transition={{ duration: 0.2 }}>
                <Smile className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Quiz panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
            className="fixed bottom-24 right-6 z-40 w-[min(360px,calc(100vw-3rem))]"
            role="dialog"
            aria-modal="true"
            aria-label="Asistente de diagnóstico dental"
          >
            {/* Double-bezel panel */}
            <div className="p-1.5 bg-night/95 ring-1 ring-white/10 rounded-[1.75rem] shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
              <div className="bg-night rounded-[calc(1.75rem-0.375rem)] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                {/* Header */}
                <div className="px-5 py-4 border-b border-white/6 flex items-center justify-between">
                  <div>
                    <p className="font-montserrat text-[11px] uppercase tracking-[0.2em] text-gold/70">
                      Asistente dental
                    </p>
                    {!isDone && (
                      <div className="flex gap-1 mt-2">
                        {STEPS.map((_, i) => (
                          <div
                            key={i}
                            className={`h-0.5 flex-1 rounded-full transition-all duration-500 ${
                              i <= step ? 'bg-gold' : 'bg-white/15'
                            }`}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  {step > 0 && !isDone && (
                    <button
                      onClick={back}
                      className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300"
                      aria-label="Volver a la pregunta anterior"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Body */}
                <div className="px-5 py-5 min-h-[260px]">
                  <AnimatePresence mode="wait">
                    {!isDone ? (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: direction * 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -direction * 20 }}
                        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                      >
                        <p className="font-cormorant text-lg font-medium text-ivory mb-4 leading-snug">
                          {STEPS[step].question}
                        </p>
                        <div className="flex flex-col gap-2">
                          {STEPS[step].options.map((opt) => (
                            <button
                              key={opt.value}
                              onClick={() => select(opt.value)}
                              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                                answers[step] === opt.value
                                  ? 'bg-gold/15 border border-gold/40 text-ivory'
                                  : 'bg-white/4 border border-transparent hover:bg-white/8 text-white/70 hover:text-ivory'
                              }`}
                            >
                              <span className="text-base" aria-hidden="true">{opt.emoji}</span>
                              <span className="font-montserrat text-[12px]">{opt.label}</span>
                              <ChevronRight className="w-3 h-3 ml-auto opacity-40" aria-hidden="true" />
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="done"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col gap-4 items-center text-center py-4"
                      >
                        <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center">
                          <Smile className="w-6 h-6 text-gold" />
                        </div>
                        <div>
                          <p className="font-cormorant text-xl font-medium text-ivory mb-1">
                            ¡Listo! Tenemos tu perfil.
                          </p>
                          <p className="font-montserrat text-[12px] text-white/50 leading-relaxed">
                            Te conectamos con nuestro equipo para darte la atención exacta que necesitas.
                          </p>
                        </div>
                        <p className="font-montserrat text-[10px] text-white/30 italic">
                          Esta herramienta no sustituye una evaluación profesional.
                        </p>
                        <a
                          href={`https://wa.me/529992345679?text=${buildWhatsAppMessage(answers)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2.5 bg-gold text-night font-montserrat text-[12px] font-semibold uppercase tracking-[0.1em] py-3.5 rounded-full hover:bg-gold-light transition-all duration-400"
                          aria-label="Contactar por WhatsApp con tu perfil dental personalizado"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Enviar a WhatsApp
                        </a>
                        <button
                          onClick={reset}
                          className="font-montserrat text-[11px] text-white/30 hover:text-white/60 transition-colors duration-300"
                          aria-label="Reiniciar el asistente dental"
                        >
                          Empezar de nuevo
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
