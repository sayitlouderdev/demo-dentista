'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { MessageCircle, Calendar, ChevronDown } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-night"
      aria-label="Hero - Clínica Dental Élite Mérida"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-[1.15]"
      >
        <Image
          src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1920&auto=format&q=85"
          alt="Interior de Clínica Dental Élite Mérida — sala de tratamiento de lujo"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIhAAAQMEAwEBAAAAAAAAAAAAAQIDBAAFERITISJB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKe02dF2bISqShqW3FRH6hY4BSPQFKB4oBB8ZIxrT1vWvbm4tzNsqUuShLaVJIJJBIyR8nXpSlHkn//Z"
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-night/90 via-night/70 to-night/30" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-night/20" aria-hidden="true" />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden="true" />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24"
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-px bg-gold/70" aria-hidden="true" />
            <span className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-gold/80">
              Mérida, Yucatán · Desde 2012
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="font-cormorant font-light text-ivory leading-[1.03] mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
          >
            La perfección
            <br />
            <em className="text-gold-shimmer not-italic">empieza con</em>
            <br />
            tu sonrisa.
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="font-montserrat text-[15px] font-light text-white/60 leading-relaxed max-w-xl mb-10"
          >
            Clínica dental premium en el corazón de Montebello. Tecnología de vanguardia europea,
            atención personalizada y resultados que transforman vidas.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Primary CTA */}
            <a
              href="https://wa.me/529992345679?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20mi%20primera%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gold text-night font-montserrat text-[12px] font-semibold uppercase tracking-[0.15em] px-8 py-4 rounded-full hover:bg-gold-light transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]"
              aria-label="Agendar primera cita por WhatsApp"
            >
              <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>Agendar mi cita</span>
              <span className="w-7 h-7 rounded-full bg-night/10 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-px transition-transform duration-300">
                ↗
              </span>
            </a>

            {/* Secondary CTA */}
            <a
              href="#servicios"
              className="group inline-flex items-center gap-3 border border-white/25 text-white font-montserrat text-[12px] font-medium uppercase tracking-[0.15em] px-8 py-4 rounded-full hover:border-gold/60 hover:text-gold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              <Calendar className="w-4 h-4" />
              <span>Ver servicios</span>
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap gap-6 mt-14"
          >
            {[
              { value: '3,400+', label: 'Pacientes atendidos' },
              { value: '4.9/5', label: '180 reseñas' },
              { value: '12 años', label: 'De experiencia' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="font-cormorant text-2xl font-light text-gold leading-none">{stat.value}</span>
                <span className="font-montserrat text-[10px] uppercase tracking-[0.15em] text-white/40">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-montserrat text-[9px] uppercase tracking-[0.25em] text-white/30">Desplazar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
