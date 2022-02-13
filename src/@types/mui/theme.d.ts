import { Theme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      green: string;
      amber: string;
      beige: string;
      dark: string;
      red: string;
    };
  }
  interface PaletteOptions {
    custom: {
      green: string;
      amber: string;
      beige: string;
      dark: string;
      red: string;
    };
  }
}
