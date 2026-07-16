import type { HTMLAttributes, ReactNode } from "react";
import { Logo, type LogoVariant } from "../Logo/Logo";
import "./SlideCard.css";

export type SlideTone = "dark" | "light" | "offwhite" | "red";

export interface SlideCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Background/text tone. Maps to the OCBC palette: dark = Near-Black,
   * light = White, offwhite = Warm Off-White, red = OCBC Red. */
  tone?: SlideTone;
  /** Fixes the card to the IG carousel aspect ratio (1080:1350, 4:5). Off by
   * default so the card also works as a general web section/panel. */
  carouselAspect?: boolean;
  /** Corner logo. "hero" = large, top-left (cover slides). "mark" = small,
   * bottom-left (interior slides). "none" = omit. */
  logo?: "hero" | "mark" | "none";
  /** Swipe/page indicator, e.g. page=3 total=7 renders "3/7" bottom-right. */
  page?: number;
  total?: number;
  children: ReactNode;
}

const LOGO_VARIANT_BY_TONE: Record<SlideTone, LogoVariant> = {
  dark: "white",
  red: "white",
  light: "black",
  offwhite: "black",
};

/**
 * A single on-brand slide/panel: the layout shell behind every carousel
 * example in the OCBC brand-os skill (cover, explainer, objection-handling,
 * step, and CTA slides all use this one component with a different `tone`).
 * Compose it with Tag / Heading / Text / Icon / Button as children.
 *
 * Usage:
 *   <SlideCard tone="dark" logo="hero" page={1} total={7}>
 *     <Tag>NYALA · FINANCIAL FITNESS</Tag>
 *     <Heading level={1}>Dana Darurat Kamu Belum Tentu Cukup.</Heading>
 *     <Text tone="muted">Cara hitung targetnya yang benar, bukan angka asal-asalan.</Text>
 *   </SlideCard>
 */
export function SlideCard({
  tone = "light",
  carouselAspect = false,
  logo = "none",
  page,
  total,
  className,
  children,
  ...rest
}: SlideCardProps) {
  const classes = [
    "ocbc-slidecard",
    `ocbc-slidecard--${tone}`,
    carouselAspect ? "ocbc-slidecard--carousel-aspect" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const hasFooter = logo === "mark" || (page != null && total != null);

  return (
    <div className={classes} {...rest}>
      {logo === "hero" && (
        <Logo
          variant={LOGO_VARIANT_BY_TONE[tone]}
          height={44}
          className="ocbc-slidecard__logo ocbc-slidecard__logo--hero"
        />
      )}
      <div className="ocbc-slidecard__content">{children}</div>
      {hasFooter && (
        <div className="ocbc-slidecard__footer">
          {logo === "mark" ? (
            <Logo variant={LOGO_VARIANT_BY_TONE[tone]} height={24} className="ocbc-slidecard__logo" />
          ) : (
            <span />
          )}
          {page != null && total != null && (
            <span className="ocbc-slidecard__page">
              {page}/{total}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
