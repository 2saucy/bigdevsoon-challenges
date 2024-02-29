import type { Settings } from "./types";

export const DEFAULT_SETTINGS: Settings = [
  {
    name: "Include uppercase letters",
    checked: true,
  },
  {
    name: "Include lowercase letters",
    checked: true,
  },
  {
    name: "Include numbers",
    checked: false,
  },
  {
    name: "Include symbols",
    checked: false,
  },
];
