import type { ElementType, HTMLAttributes, ReactNode } from "react";
import "./Text.css";

export type TextVariant = "body" | "caption";
export type TextTone = "default" | "muted" | "inverse";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant;
  /** "muted" = Slate Gray, for secondary copy and metadata. "inverse" = white, for dark backgrounds. */
  tone?: TextTone;
  as?: ElementType;
  children: ReactNode;
}

/**
 * Body and Caption copy. `tone="muted"` is the standard choice for
 * supporting lines under a Heading; `tone="inverse"` for text on
 * charcoal/near-black/red backgrounds.
 *
 * Usage:
 *   <Text tone="muted">Cara hitung targetnya yang benar, bukan angka asal-asalan.</Text>
 *   <Text variant="caption">Sumber: OJK, 2025</Text>
 */
export function Text({ variant = "body", tone = "default", as = "p", className, children, ...rest }: TextProps) {
  const Tag = as;
  const classes = ["ocbc-text", `ocbc-text--${variant}`, `ocbc-text--${tone}`, className]
    .filter(Boolean)
    .join(" ");
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
