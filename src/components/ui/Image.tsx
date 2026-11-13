"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PremiumImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  className?: string;
  placeholder?: boolean;
}

export function PremiumImage({
  src,
  alt,
  className,
  placeholder = true,
  ...props
}: PremiumImageProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-200", className)}>
      {placeholder && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-3 animate-pulse">
            <div className="w-12 h-12 rounded-full border-2 border-matte-gold/30 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-matte-gold/50" />
            </div>
            <div className="h-4 w-24 bg-gray-200/50 rounded" />
          </div>
        </div>
      )}
      <Image src={src} alt={alt} fill {...props} priority={false} placeholder={placeholder ? "blur" : false} />
    </div>
  );
}
