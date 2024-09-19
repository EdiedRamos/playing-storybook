import type { ColorScheme } from "./badge.model";

export function getThemeStyles(theme: ColorScheme): string {
  switch (theme) {
    case "default":
      return "bg-light text-blue border-[2px] border-purple";
    case "darkGreen":
      return "bg-green-dark text-white";
    case "lightGreen":
      return "bg-green-light text-dark";
    default:
      return "";
  }
}
