import type { SVGProps } from "react";
import "./Icon.css";
import {
  SavingsPaths,
  GrowthPaths,
  ProtectionPaths,
  WalletPaths,
  GoalPaths,
  PartnershipPaths,
} from "./icons";

export type IconName = "savings" | "growth" | "protection" | "wallet" | "goal" | "partnership";

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  /** Pixel size (square). Default 48. */
  size?: number;
}

const PATHS: Record<IconName, () => JSX.Element> = {
  savings: SavingsPaths,
  growth: GrowthPaths,
  protection: ProtectionPaths,
  wallet: WalletPaths,
  goal: GoalPaths,
  partnership: PartnershipPaths,
};

/**
 * Generic financial-concept iconography in OCBC's line style: charcoal
 * linework (themable via the `color` CSS property) plus a fixed brand-red
 * accent. Placeholder set for carousels/cards until real OCBC iconography
 * is available. Not copied from any existing icon library.
 *
 * Usage:
 *   <Icon name="protection" size={64} />
 *   <Icon name="growth" style={{ color: 'var(--ocbc-charcoal)' }} />
 */
export function Icon({ name, size = 48, className, style, ...rest }: IconProps) {
  const Paths = PATHS[name];
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      className={["ocbc-icon", className].filter(Boolean).join(" ")}
      style={{ color: "var(--ocbc-charcoal)", ...style }}
      aria-hidden="true"
      {...rest}
    >
      <Paths />
    </svg>
  );
}
