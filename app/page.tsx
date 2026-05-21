import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustNumbers from '@/components/TrustNumbers'
import Services from '@/components/Services'
import Technology from '@/components/Technology'
import Process from '@/components/Process'
import Team from '@/components/Team'
import BeforeAfter from '@/components/BeforeAfter'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Location from '@/components/Location'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import DentalQuiz from '@/components/DentalQuiz'

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustNumbers />
      <Services />
      <Technology />
      <Process />
      <Team />
      <BeforeAfter />
      <Testimonials />
      <FAQ />
      <Location />
      <ContactForm />
      <Footer />
      <DentalQuiz />
    </main>
  )
}
