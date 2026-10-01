import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[2px] border text-sm font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-primary bg-primary text-primary-foreground hover:border-primary-light hover:bg-primary-light",
        lime: "border-lime bg-lime text-ink hover:border-accent-hover hover:bg-accent-hover",
        destructive:
          "border-destructive bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive",
        outline:
          "border-foreground/25 bg-transparent text-foreground hover:border-foreground/50 hover:bg-foreground/[0.04]",
        secondary:
          "border-transparent bg-teal-light text-primary hover:bg-secondary",
        ghost:
          "border-transparent text-foreground hover:bg-muted",
        link: "border-transparent text-primary normal-case tracking-normal underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-10 px-4",
        lg: "h-[52px] px-8 text-[0.9375rem]",
        icon: "h-11 w-11",
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
