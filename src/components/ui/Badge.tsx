"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border-white/20 bg-white/60 text-black hover:bg-white/80",
        new: "border-matte-gold/30 bg-matte-gold/10 text-[#d4af37] animate-float",
        sale: "border-rose-500/30 bg-rose-500/10 text-rose-600 hover:bg-rose-500/20",
        featured: "border-matte-gold/30 bg-gradient-to-r from-matte-gold/10 to-transparent text-[#d4af37]",
      },
      size: {
        sm: "text-[0.6875rem]",
        md: "text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
