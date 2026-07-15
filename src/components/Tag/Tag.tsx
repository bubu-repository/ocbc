import type { HTMLAttributes, ReactNode } from "react";
import "./Tag.css";

export type TagTone = "onDark" | "onLight";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: TagTone;
  children: ReactNode;
}

/**
 * Small bordered label, e.g. a segment marker like "NYALA · FINANCIAL FITNESS"
 * on a cover slide. Red text, thin red border, transparent background.
 *
 * Usage:
 *   <Tag>NYALA · FINANCIAL FITNESS</Tag>
 */
export function Tag({ tone = "onDark", className, children, ...rest }: TagProps) {
  const classes = ["ocbc-tag", `ocbc-tag--${tone}`, className].filter(Boolean).join(" ");
  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}
