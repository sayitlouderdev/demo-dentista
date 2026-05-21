import { cn } from '@/lib/utils'

interface EyebrowBadgeProps {
  children: React.ReactNode
  className?: string
  dim?: boolean
}

export function EyebrowBadge({ children, className, dim = false }: EyebrowBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-montserrat text-[10px] uppercase tracking-[0.3em] px-3 py-1.5 rounded-full',
        dim ? 'text-gold/70 bg-gold/10' : 'text-gold bg-gold/10',
        className
      )}
    >
      {children}
    </span>
  )
}
