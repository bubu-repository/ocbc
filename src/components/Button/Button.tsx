import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

export type ButtonVariant = "primary" | "onRed";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** "primary" = red pill on light backgrounds. "onRed" = white pill with red label, for CTA slides on a red field. */
  variant?: ButtonVariant;
  children: ReactNode;
}

/**
 * Pill CTA button, matching the "ruangmenyala.com"-style link treatment
 * used on CTA slides. Not a form-heavy button system: OCBC social/marketing
 * surfaces use one CTA shape, so this component stays deliberately narrow.
 *
 * Usage:
 *   <Button variant="onRed">ruangmenyala.com</Button>
 */
export function Button({ variant = "primary", className, children, ...rest }: ButtonProps) {
  const classes = ["ocbc-button", `ocbc-button--${variant}`, className].filter(Boolean).join(" ");
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
