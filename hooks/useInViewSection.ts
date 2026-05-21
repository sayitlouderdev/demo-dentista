import { useRef } from 'react'
import { useInView } from 'framer-motion'

export function useInViewSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return { ref, isInView }
}
