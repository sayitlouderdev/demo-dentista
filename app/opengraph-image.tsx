import { ImageResponse } from 'next/og'

export const alt = 'Clínica Dental Élite Mérida — La perfección empieza con tu sonrisa'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        background: 'linear-gradient(135deg, #0D1F2D 0%, #162B3F 60%, #0D1F2D 100%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px',
        position: 'relative',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: '2px', background: 'linear-gradient(to right, transparent, #C9A84C 50%, transparent)' }} />

      <div style={{ color: '#C9A84C', fontSize: 13, letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: 32, fontFamily: 'sans-serif', opacity: 0.8 }}>
        Mérida, Yucatán · Desde 2012
      </div>

      <div style={{ color: '#FAFAF7', fontSize: 72, fontWeight: 300, lineHeight: 1.05, textAlign: 'center', marginBottom: 12, fontFamily: 'Georgia, serif', letterSpacing: '-0.01em' }}>
        La perfección empieza
      </div>
      <div style={{ color: '#C9A84C', fontSize: 72, fontWeight: 300, lineHeight: 1.05, textAlign: 'center', marginBottom: 44, fontFamily: 'Georgia, serif', letterSpacing: '-0.01em' }}>
        con tu sonrisa.
      </div>

      <div style={{ width: 40, height: 1, background: '#C9A84C', marginBottom: 32, opacity: 0.5 }} />

      <div style={{ color: '#FAFAF7', fontSize: 18, letterSpacing: '0.28em', textTransform: 'uppercase', fontFamily: 'sans-serif', opacity: 0.5 }}>
        Clínica Dental Élite Mérida
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: '15%', right: '15%', height: '2px', background: 'linear-gradient(to right, transparent, #C9A84C 50%, transparent)' }} />
    </div>,
    { ...size }
  )
}
