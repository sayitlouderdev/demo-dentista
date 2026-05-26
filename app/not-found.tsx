import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-night flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" aria-hidden="true" />

      <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-gold/70 mb-8">
        Clínica Dental Élite Mérida
      </p>

      <h1
        className="font-cormorant font-light text-ivory mb-6"
        style={{ fontSize: 'clamp(6rem, 18vw, 12rem)', lineHeight: 1 }}
      >
        404
      </h1>

      <p
        className="font-cormorant font-light text-ivory/50 mb-10"
        style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}
      >
        Esta página no existe.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-gold text-night font-montserrat text-[12px] font-semibold uppercase tracking-[0.15em] px-8 py-4 rounded-full hover:bg-gold-light transition-all duration-500"
      >
        ← Volver al inicio
      </Link>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" aria-hidden="true" />
    </div>
  )
}
