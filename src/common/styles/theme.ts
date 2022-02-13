// eslint-disable-next-line import/named
import { createTheme, responsiveFontSizes, Theme } from "@mui/material";
import { grey } from "@mui/material/colors";

let theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#262626",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#FF7F11",
      contrastText: "#FFF",
    },
    success: {
      main: "#ACBFA4 ",
      contrastText: "#262626",
    },
    info: {
      main: "#E2E8CE",
      contrastText: "#262626",
    },
    custom: {
      green: "#ACBFA4",
      amber: "#FF7F11",
      beige: "#E2E8CE",
      dark: "#262626",
      red: "#FF1B1C",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "32px",
      fontWeight: 900,
      textTransform: "uppercase",
    },
    h3: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "18px",
      fontWeight: 900,
      textTransform: "uppercase",
    },
    h4: {
      fontSize: "18px",
      fontWeight: 700,
    },
    body1: {
      fontSize: "14px",
      lineHeight: "24px",
    },
    body2: {
      fontSize: "13px",
      lineHeight: "17.7px",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1440,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
