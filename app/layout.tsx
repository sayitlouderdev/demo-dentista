import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Clínica Dental Élite Mérida | Dentista de Lujo en Yucatán',
  description:
    'La perfección empieza con tu sonrisa. Clínica dental premium en Mérida, Yucatán. Especialistas en rehabilitación oral, ortodoncia invisible y estética dental avanzada.',
  keywords: [
    'clínica dental Mérida',
    'dentista lujo Yucatán',
    'ortodoncia invisible Mérida',
    'blanqueamiento dental Mérida',
    'rehabilitación oral',
    'cirugía bucal Mérida',
  ],
  authors: [{ name: 'Clínica Dental Élite Mérida' }],
  openGraph: {
    title: 'Clínica Dental Élite Mérida | La perfección empieza con tu sonrisa',
    description:
      'Experiencia dental de alto nivel en Mérida, Yucatán. Tecnología de vanguardia, equipo especializado, resultados perfectos.',
    locale: 'es_MX',
    type: 'website',
  },
  other: {
    'theme-color': '#0D1F2D',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Dentist'],
  name: 'Clínica Dental Élite Mérida',
  description: 'Clínica dental premium especializada en rehabilitación oral, ortodoncia y estética dental',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle 42 #198, Col. Montebello',
    addressLocality: 'Mérida',
    addressRegion: 'Yucatán',
    postalCode: '97113',
    addressCountry: 'MX',
  },
  telephone: '+52-999-234-5678',
  email: 'sayitlouder.dev@gmail.com',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '180',
  },
  priceRange: '$$$',
  hasMap: 'https://maps.google.com/?q=Montebello+Merida+Yucatan',
  sameAs: [
    'https://www.instagram.com/elitedentalmerida',
    'https://www.facebook.com/elitedentalmerida',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="noise-overlay font-montserrat antialiased">
        {children}
      </body>
    </html>
  )
}
