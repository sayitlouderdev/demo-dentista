'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { GripVertical } from 'lucide-react'
import { useInViewSection } from '@/hooks/useInViewSection'

const CASES = [
  {
    id: 1,
    title: 'Rehabilitación Oral Completa',
    label: 'Coronas de porcelana · 6 meses',
    before: {
      src: '/ba-1-before.png',
      alt: 'Antes: dentición con desgaste severo',
    },
    after: {
      src: '/ba-1-after.png',
      alt: 'Después: sonrisa perfecta tras rehabilitación oral',
    },
  },
  {
    id: 2,
    title: 'Ortodoncia Invisible',
    label: 'Alineadores transparentes · 14 meses',
    before: {
      src: '/ba-2-before.png',
      alt: 'Antes: maloclusión y apiñamiento dental',
    },
    after: {
      src: '/ba-2-after.png',
      alt: 'Después: alineación perfecta con ortodoncia invisible',
    },
  },
  {
    id: 3,
    title: 'Blanqueamiento Láser',
    label: 'Sistema Zoom · 1 sesión',
    before: {
      src: '/ba-3-before.png',
      alt: 'Antes: tinción dental por café y tabaco',
    },
    after: {
      src: '/ba-3-after.png',
      alt: 'Después: dientes blancos tras blanqueamiento láser',
    },
  },
]

function Slider({ beforeSrc, afterSrc, beforeAlt, afterAlt }: {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
}) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    updatePosition(e.clientX)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true
    updatePosition(e.touches[0].clientX)
  }

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      updatePosition(e.clientX)
    }
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return
      updatePosition(e.touches[0].clientX)
    }
    const stop = () => { isDragging.current = false }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', stop)
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', stop)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', stop)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', stop)
    }
  }, [updatePosition])

  return (
    <div
      ref={containerRef}
      className="ba-slider relative aspect-[4/3] cursor-ew-resize overflow-hidden rounded-[1.5rem] select-none"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      role="img"
      aria-label={`Comparación antes y después: ${beforeAlt} / ${afterAlt}`}
    >
      <Image src={afterSrc} alt={afterAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>

      <div className="absolute top-3 left-3 bg-night/75 backdrop-blur-sm border border-white/10 rounded-lg px-2.5 py-1.5 pointer-events-none">
        <span className="font-montserrat text-[9px] uppercase tracking-[0.15em] text-white/70">Antes</span>
      </div>
      <div className="absolute top-3 right-3 bg-gold/90 rounded-lg px-2.5 py-1.5 pointer-events-none">
        <span className="font-montserrat text-[9px] uppercase tracking-[0.15em] text-night font-semibold">Después</span>
      </div>

      <div
        className="absolute top-0 bottom-0 w-px bg-white/80"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
          <GripVertical className="w-4 h-4 text-night" />
        </div>
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  const { ref, isInView } = useInViewSection()

  return (
    <section
      ref={ref}
      className="bg-ivory py-20 md:py-32"
      aria-labelledby="ba-title"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2
            id="ba-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.06, ease: [0.32, 0.72, 0, 1] }}
            className="font-cormorant font-light text-night"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
          >
            Antes y después.
            <br />
            La diferencia habla sola.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-montserrat text-sm text-anthracite/50 mt-4"
          >
            Arrastra el control deslizante para comparar el antes y después de cada caso.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CASES.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="flex flex-col gap-4"
            >
              {/* Double-bezel wrapper */}
              <div className="p-1.5 bg-white/60 ring-1 ring-anthracite/8 rounded-[1.75rem]">
                <div className="rounded-[calc(1.75rem-0.375rem)] overflow-hidden">
                  <Slider
                    beforeSrc={c.before.src}
                    afterSrc={c.after.src}
                    beforeAlt={c.before.alt}
                    afterAlt={c.after.alt}
                  />
                </div>
              </div>
              <div className="px-2">
                <h3 className="font-cormorant text-xl font-medium text-night mb-1">{c.title}</h3>
                <p className="font-montserrat text-[11px] uppercase tracking-[0.12em] text-gold/80">{c.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center font-montserrat text-[11px] text-anthracite/35 mt-10"
        >
          * Casos ilustrativos de Clínica Dental Élite Mérida. Resultados individuales pueden variar.
        </motion.p>
      </div>
    </section>
  )
}
