import * as React from "react"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
    
    const variants = {
      default: "border-transparent bg-slate-100 text-slate-700 hover:bg-slate-200",
      secondary: "border-transparent bg-gray-100 text-gray-700 hover:bg-gray-200",
      destructive: "border-transparent bg-red-100 text-red-700 hover:bg-red-200",
      outline: "border-slate-300 text-slate-600 hover:bg-slate-50"
    }
    
    return (
      <div
        ref={ref}
        className={`${baseClasses} ${variants[variant]} ${className || ''}`}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge }