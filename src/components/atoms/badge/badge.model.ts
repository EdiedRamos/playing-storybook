import type { PropsWithChildren } from "react";

export type ColorScheme = "default" | "darkGreen" | "lightGreen";

export interface BadgeProps extends PropsWithChildren {
  /** Extra classnames */
  className?: string;
  /** Available color schemes <br> `default` `darkGreen` `lightGreen` */
  colorScheme?: ColorScheme;
}
