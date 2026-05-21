'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInViewSection } from '@/hooks/useInViewSection'
import { EyebrowBadge } from './ui/eyebrow-badge'
import { Scan, Monitor, Camera, Sparkles } from 'lucide-react'

const TECH_ITEMS = [
  {
    icon: Scan,
    title: 'Radiografía Digital 3D',
    description:
      'Tomografía cone-beam CBCT que genera modelos tridimensionales completos de la anatomía bucal con una dosis de radiación 90% menor que los sistemas convencionales.',
    badge: 'Diagnóstico preciso',
  },
  {
    icon: Monitor,
    title: 'Microscopio Dental',
    description:
      'Magnificación hasta 25× para procedimientos endodónticos y restauradores con una precisión quirúrgica inigualable. Iluminación LED coaxial de 48,000 lux.',
    badge: 'Precisión microquirúrgica',
  },
  {
    icon: Camera,
    title: 'Escáner Intraoral 3Shape',
    description:
      'Digitalización completa de la cavidad oral en minutos. Elimina las impresiones con alginato y permite diseñar restauraciones con tolerancias de 5 micrómetros.',
    badge: 'Sin impresiones',
  },
  {
    icon: Sparkles,
    title: 'Diseño Digital de Sonrisa',
    description:
      'Simulación fotorrealista de tu sonrisa final antes de iniciar cualquier tratamiento. Tecnología DSD que garantiza resultados alineados con tu rostro y personalidad.',
    badge: 'Previo al tratamiento',
  },
]

export default function Technology() {
  const { ref, isInView } = useInViewSection()

  return (
    <section
      ref={ref}
      id="tecnologia"
      className="bg-night py-28 md:py-40 relative overflow-hidden"
      aria-labelledby="tech-title"
    >
      {/* Ambient light */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
            className="order-2 lg:order-1"
          >
            {/* Double-bezel image wrapper */}
            <div className="p-2 bg-white/5 ring-1 ring-white/10 rounded-[2rem]">
              <div className="relative overflow-hidden rounded-[calc(2rem-0.5rem)] aspect-[4/5] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                <Image
                  src="https://images.unsplash.com/photo-1588776814546-1ffed44d1f97?w=900&auto=format&q=85"
                  alt="Sillón dental de alta tecnología en Clínica Dental Élite Mérida"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAFRABAQAAAAAAAAAAAAAAAAAAAAH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AKlgAAAAAB//2Q=="
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent" />
                {/* Corner badge */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <div className="bg-night/80 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2.5">
                    <p className="font-montserrat text-[10px] uppercase tracking-[0.15em] text-gold">ISO 9001 Certificado</p>
                    <p className="font-cormorant text-sm text-white/70 mt-0.5">Estándares europeos</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: content */}
          <div className="order-1 lg:order-2 flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            >
              <EyebrowBadge dim className="mb-6">Equipamiento 2024</EyebrowBadge>
              <h2
                id="tech-title"
                className="font-cormorant font-light text-ivory leading-tight"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}
              >
                Tecnología que
                <br />
                <em className="text-gold not-italic">marca la diferencia.</em>
              </h2>
            </motion.div>

            <div className="flex flex-col gap-6">
              {TECH_ITEMS.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 24 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.32, 0.72, 0, 1] }}
                    className="group flex gap-4 p-5 rounded-2xl hover:bg-white/4 transition-colors duration-400"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/18 transition-colors duration-300 mt-0.5">
                      <Icon className="w-4.5 h-4.5 text-gold" aria-hidden="true" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="font-montserrat text-sm font-semibold text-ivory">
                          {item.title}
                        </h3>
                        <span className="font-montserrat text-[9px] uppercase tracking-[0.15em] text-gold/60 bg-gold/8 px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      </div>
                      <p className="font-montserrat text-[13px] text-white/45 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
