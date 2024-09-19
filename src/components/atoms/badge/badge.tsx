import { PropsWithChildren } from "react";

type ColorScheme = "default" | "darkGreen" | "lightGreen";

interface Props extends PropsWithChildren {
  className?: string;
  colorScheme?: ColorScheme;
}

function getThemeStyles(theme: ColorScheme): string {
  switch (theme) {
    case "default":
      return "bg-light text-blue border-[2px] border-purple";
    case "darkGreen":
      return "bg-green-dark";
    case "lightGreen":
      return "bg-green-light text-dark";
    default:
      return "";
  }
}

export function Badge({
  children = "Badge",
  colorScheme = "default",
  className = "",
}: Props) {
  return (
    <p
      className={`inline-block px-3 rounded-xl text-center text-white ${getThemeStyles(
        colorScheme
      )} ${className}`}
    >
      {children}
    </p>
  );
}
