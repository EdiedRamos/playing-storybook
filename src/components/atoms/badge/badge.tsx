import { BadgeDefaultProps } from "./badge.contants";
import { BadgeProps } from "./badge.model";
import { getThemeStyles } from "./badge.utils";

export function Badge({
  children = BadgeDefaultProps.children,
  colorScheme = BadgeDefaultProps.colorScheme,
  className = BadgeDefaultProps.className,
}: BadgeProps) {
  return (
    <p
      className={`inline-block px-3 rounded-xl text-center ${getThemeStyles(
        colorScheme
      )} ${className}`}
    >
      {children}
    </p>
  );
}
