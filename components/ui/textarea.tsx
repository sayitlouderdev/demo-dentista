import * as React from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="font-montserrat text-[11px] uppercase tracking-[0.15em] text-anthracite/60 font-medium"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <div className="absolute inset-0 rounded-xl bg-anthracite/5 ring-1 ring-anthracite/10 pointer-events-none transition-all duration-300" />
          <textarea
            id={inputId}
            className={cn(
              'relative w-full bg-transparent px-4 py-3.5 font-montserrat text-sm text-anthracite placeholder:text-anthracite/30',
              'rounded-xl outline-none transition-all duration-300 resize-none min-h-[120px]',
              'focus:ring-1 focus:ring-gold/60 focus:bg-white',
              error && 'ring-1 ring-red-400/60',
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && (
          <p className="font-montserrat text-[11px] text-red-500">{error}</p>
        )}
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
