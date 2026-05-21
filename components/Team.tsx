'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, GraduationCap } from 'lucide-react'
import { useInViewSection } from '@/hooks/useInViewSection'
import { EyebrowBadge } from './ui/eyebrow-badge'

const DOCTORS = [
  {
    name: 'Dr. Alejandro Fuentes Carrillo',
    role: 'Director General · Rehabilitación Oral',
    cedula: 'Cédula Profesional: 6453812 SSA',
    bio: 'Especialista en rehabilitación oral integral con formación en la Universidad Nacional Autónoma de México y posgrado en el Centro Europeo de Implantología de Barcelona. Más de 14 años reconstruyendo funcionalidad y estética dental.',
    specialties: ['Rehabilitación Oral', 'Implantes Oseointegrados', 'Prótesis Dental'],
    awards: ['Premio Excelencia CODY 2022', 'Miembro ADM Nacional'],
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&auto=format&q=85',
    imageAlt: 'Dr. Alejandro Fuentes Carrillo, director de Clínica Dental Élite Mérida',
  },
  {
    name: 'Dra. Isabel Montoya Garza',
    role: 'Ortodoncia y Estética Dental',
    cedula: 'Cédula Profesional: 8219047 SSA',
    bio: 'Ortodoncista certificada con subespecialidad en alineadores invisibles y diseño digital de sonrisa. Formación en la Universidad de Guadalajara y certificación internacional Invisalign Diamond Provider desde 2019.',
    specialties: ['Ortodoncia Invisible', 'Estética Dental', 'Diseño de Sonrisa DSD'],
    awards: ['Invisalign Diamond Provider', 'Certificación AMOA 2023'],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&q=85',
    imageAlt: 'Dra. Isabel Montoya Garza, especialista en ortodoncia de Clínica Dental Élite',
  },
]

export default function Team() {
  const { ref, isInView } = useInViewSection()

  return (
    <section
      ref={ref}
      id="equipo"
      className="bg-night py-28 md:py-40 relative overflow-hidden"
      aria-labelledby="team-title"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <EyebrowBadge dim>Nuestro equipo</EyebrowBadge>
          </motion.div>
          <motion.h2
            id="team-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.06, ease: [0.32, 0.72, 0, 1] }}
            className="font-cormorant font-light text-ivory"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
          >
            Especialistas que
            <br />
            <em className="text-gold not-italic">inspiran confianza.</em>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {DOCTORS.map((doctor, i) => (
            <motion.article
              key={doctor.name}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.32, 0.72, 0, 1] }}
              className={i === 1 ? 'md:mt-10' : ''}
            >
              {/* Double-bezel */}
              <div className="p-2 bg-white/4 ring-1 ring-white/10 rounded-[2rem]">
                <div className="bg-white/[0.04] rounded-[calc(2rem-0.5rem)] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={doctor.image}
                      alt={doctor.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAFRABAQAAAAAAAAAAAAAAAAAAAAH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AKlgAAAAAB//2Q=="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/20 to-transparent" />
                    {/* Floating cédula */}
                    <div className="absolute top-4 right-4 bg-night/80 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2">
                      <p className="font-montserrat text-[9px] uppercase tracking-[0.12em] text-gold/80">{doctor.cedula}</p>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-8 flex flex-col gap-5">
                    <div>
                      <h3 className="font-cormorant text-2xl font-medium text-ivory leading-tight mb-1">
                        {doctor.name}
                      </h3>
                      <p className="font-montserrat text-[11px] uppercase tracking-[0.15em] text-gold">
                        {doctor.role}
                      </p>
                    </div>

                    <p className="font-montserrat text-[13px] text-white/50 leading-relaxed">
                      {doctor.bio}
                    </p>

                    {/* Specialties */}
                    <div className="flex flex-col gap-2.5">
                      <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-white/30 flex items-center gap-2">
                        <GraduationCap className="w-3 h-3" aria-hidden="true" /> Especialidades
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {doctor.specialties.map((s) => (
                          <span
                            key={s}
                            className="font-montserrat text-[11px] text-gold/80 bg-gold/8 border border-gold/15 px-3 py-1 rounded-full"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Awards */}
                    <div className="flex flex-col gap-2 pt-4 border-t border-white/8">
                      {doctor.awards.map((award) => (
                        <div key={award} className="flex items-center gap-2">
                          <Award className="w-3 h-3 text-gold/60 shrink-0" aria-hidden="true" />
                          <span className="font-montserrat text-[11px] text-white/40">{award}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
