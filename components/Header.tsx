'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const NAV_ITEMS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sentinel = document.createElement('div')
    sentinel.setAttribute('aria-hidden', 'true')
    sentinel.style.cssText = 'position:absolute;top:60px;left:0;height:1px;width:1px;pointer-events:none;'
    document.body.appendChild(sentinel)
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(sentinel)
    return () => {
      observer.disconnect()
      sentinel.remove()
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          className={`relative flex items-center gap-6 px-6 py-3.5 rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            scrolled
              ? 'bg-night/95 backdrop-blur-2xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)]'
              : 'bg-night/50 backdrop-blur-xl border border-white/5'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Clínica Dental Élite Mérida - Inicio">
            <span className="font-cormorant text-[22px] font-light tracking-[0.25em] text-ivory leading-none">
              ÉLITE
            </span>
            <span className="w-px h-4 bg-gold/50" aria-hidden="true" />
            <span className="font-montserrat text-[9px] uppercase tracking-[0.35em] text-gold/90 leading-none">
              Dental
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navegación principal">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="font-montserrat text-[11px] uppercase tracking-[0.12em] text-white/55 hover:text-gold transition-colors duration-300 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+529992345678"
              className="flex items-center gap-1.5 font-montserrat text-[11px] text-white/45 hover:text-gold transition-colors duration-300"
              aria-label="Llamar al 999 234 5678"
            >
              <Phone className="w-3 h-3" aria-hidden="true" />
              <span>999 234 5678</span>
            </a>
            <a
              href="https://wa.me/529992345679?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-gold text-night font-montserrat text-[11px] font-semibold uppercase tracking-[0.12em] px-5 py-2.5 rounded-full hover:bg-gold-light transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]"
              aria-label="Agendar cita por WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              <span>Agendar cita</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px] ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="block w-[18px] h-[1.5px] bg-ivory rounded-full origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-[18px] h-[1.5px] bg-ivory rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="block w-[18px] h-[1.5px] bg-ivory rounded-full origin-center"
            />
          </button>
        </motion.div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-night/97 backdrop-blur-3xl z-40 flex flex-col items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
          >
            <nav className="flex flex-col items-center gap-7" aria-label="Menú móvil">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className="font-cormorant text-[2.8rem] font-light text-ivory hover:text-gold transition-colors duration-300 cursor-pointer"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.a
                href="https://wa.me/529992345679?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="flex items-center gap-2.5 bg-gold text-night font-montserrat text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded-full mt-4 hover:bg-gold-light transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                <MessageCircle className="w-4 h-4" />
                Agendar cita
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
