import type { ElementType, HTMLAttributes, ReactNode } from "react";
import "./Heading.css";

export type HeadingLevel = 1 | 2 | 3;

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Visual + semantic level. 1 = hero statement, 2 = section head, 3 = subhead. */
  level?: HeadingLevel;
  /** Render a different tag than the level implies (e.g. a visual H1 that's semantically an H2). */
  as?: ElementType;
  children: ReactNode;
}

const TAG: Record<HeadingLevel, ElementType> = { 1: "h1", 2: "h2", 3: "h3" };

/**
 * OCBC type hierarchy, H1 through H3. Sizes are the `--ocbc-size-*` tokens
 * (fluid via clamp()) so a Heading reads correctly in a hero slot or a
 * cramped card without a second component.
 *
 * Usage:
 *   <Heading level={1}>Dana Darurat Kamu Belum Tentu Cukup.</Heading>
 *   <Heading level={2}>Berapa Target yang Benar?</Heading>
 */
export function Heading({ level = 2, as, className, children, ...rest }: HeadingProps) {
  const Tag = as ?? TAG[level];
  const classes = ["ocbc-heading", `ocbc-heading--h${level}`, className].filter(Boolean).join(" ");
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
