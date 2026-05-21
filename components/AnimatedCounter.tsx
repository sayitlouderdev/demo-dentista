'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  prefix?: string
  decimals?: number
  duration?: number
}

export default function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 2000,
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isInView) return

    const startTime = performance.now()

    const easeOutExpo = (t: number) =>
      t === 1 ? 1 : 1 - Math.pow(2, -10 * t)

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutExpo(progress)
      const current = target * easedProgress

      setValue(parseFloat(current.toFixed(decimals)))

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        setValue(target)
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [isInView, target, duration, decimals])

  return (
    <span ref={ref} aria-label={`${prefix}${target}${suffix}`}>
      {prefix}
      {decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toLocaleString('es-MX')}
      {suffix}
    </span>
  )
}
