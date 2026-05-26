import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        background: '#0D1F2D',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px',
      }}
    >
      <div style={{ color: '#C9A84C', fontSize: 21, fontFamily: 'Georgia, serif', fontWeight: 300, lineHeight: 1 }}>
        É
      </div>
    </div>,
    { ...size }
  )
}
