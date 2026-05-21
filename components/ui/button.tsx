'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-montserrat font-semibold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary:
          'bg-gold text-night hover:bg-gold-light rounded-full',
        outline:
          'border border-gold/60 text-gold hover:border-gold hover:bg-gold/10 rounded-full',
        ghost:
          'text-ivory/70 hover:text-gold hover:bg-white/5 rounded-full',
        dark:
          'bg-night text-ivory hover:bg-night/80 rounded-full border border-white/10',
      },
      size: {
        sm: 'text-xs tracking-wide px-5 py-2.5',
        md: 'text-sm tracking-wide px-7 py-3.5',
        lg: 'text-sm tracking-widest px-9 py-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
