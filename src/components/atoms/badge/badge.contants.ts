import type { BadgeProps } from "./badge.model";

type DefaultProps = Required<BadgeProps>;

export const BadgeDefaultProps: DefaultProps = {
  children: "Badge",
  colorScheme: "default",
  className: "",
};
