import { cn } from "@/lib/utils"

interface IasisLogoProps {
  className?: string
  showWordmark?: boolean
  inverse?: boolean
  logoUrl?: string | null
}

export function IasisLogo({ className, showWordmark = false, inverse = false, logoUrl }: IasisLogoProps) {
  const src = logoUrl ?? "/logo-sm.png"

  return (
    <div className={cn("flex items-center gap-2", className)} suppressHydrationWarning>
      <span aria-hidden="true" className="relative inline-flex h-7 items-center justify-center">
        <img
          src={src}
          alt="Iasis AI"
          className="h-7 w-auto object-contain"
        />
      </span>
      {showWordmark ? (
        <span
          className={cn(
            "notranslate font-serif text-xl tracking-tight",
            inverse ? "text-background" : "text-foreground",
          )}
          translate="no"
        >
          iasis
          <sup className={cn("text-[0.6em] leading-none", inverse ? "text-background/70" : "text-primary")}>+</sup>
        </span>
      ) : null}
      <span className="notranslate sr-only" translate="no">
        Iasis AI
      </span>
    </div>
  )
}
