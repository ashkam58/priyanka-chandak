'use client'
import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  /** If true, this button becomes a WhatsApp CTA opening the given number (or default). */
  cta?: boolean;
  /** Optional WhatsApp number (digits only, with country code) to use when cta is true. */
  whatsapp?: string;
  /** If provided, render as an anchor with this href (preserves external links) */
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", cta, whatsapp, href, ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-2xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-400 disabled:opacity-50 disabled:pointer-events-none";
    const variants = {
      default: "bg-brand-500 hover:bg-brand-600 text-white border border-white/10 backdrop-blur",
      outline: "bg-transparent border border-white/20 hover:bg-white/10",
      ghost: "bg-transparent hover:bg-white/10"
    } as const;
    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2",
      lg: "px-6 py-3 text-lg"
    } as const;

    const defaultWa = "917738080370"; // changeable default WhatsApp number (country code + number)

    // If href provided or cta/whatsapp is set and there is no explicit onClick, render an anchor
    const shouldRenderAnchor = Boolean(href) || Boolean(cta && !(props as any).onClick) || Boolean(whatsapp && !(props as any).onClick);

    if (shouldRenderAnchor) {
      const number = whatsapp || (cta ? defaultWa : undefined);
      const waHref = number ? `https://wa.me/${number}` : undefined;
      const linkHref = href || waHref || "#";

      return (
        <a
          ref={ref as any}
          href={linkHref}
          target={linkHref.startsWith("http") ? "_blank" : undefined}
          rel={linkHref.startsWith("http") ? "noreferrer" : undefined}
          className={cn(base, variants[variant], sizes[size], className)}
          {...(props as any)}
        />
      );
    }

    return (
      <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />
    );
  }
);
Button.displayName = "Button";
