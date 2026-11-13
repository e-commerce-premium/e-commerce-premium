"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "white" | "dark" | "gold";
}

export function Card({ className, variant = "white", ...props }: CardProps) {
  const variantClasses = {
    white: "bg-white/90 backdrop-blur-sm border-white/20",
    dark: "bg-black/60 backdrop-blur-md border-white/10",
    gold: "bg-gradient-to-br from-[#fffbeb] to-[#fff8e7]/40 backdrop-blur-sm border-matte-gold/30",
  };

  return (
    <div className={cn("rounded-xl border shadow-soft transition-all duration-300", variantClasses[variant], className)} {...props} />
  );
}
