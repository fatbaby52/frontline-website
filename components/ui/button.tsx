import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none border-2 text-sm font-bold uppercase tracking-wide transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-ink bg-ink text-on-dark hover:-translate-y-0.5 hover:[box-shadow:6px_6px_0_rgba(13,20,18,0.16)] active:translate-y-0 active:shadow-none",
        lime: "border-ink bg-lime text-ink hover:-translate-y-0.5 hover:[box-shadow:6px_6px_0_var(--primary)] active:translate-y-0 active:shadow-none",
        destructive:
          "border-destructive bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive",
        outline:
          "border-ink bg-transparent text-ink hover:bg-ink hover:text-on-dark",
        secondary:
          "border-transparent bg-teal-light text-primary hover:bg-secondary",
        ghost:
          "border-transparent text-foreground hover:bg-muted",
        link: "border-transparent text-primary normal-case tracking-normal underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-10 text-sm",
        icon: "h-12 w-12",
        "icon-sm": "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
