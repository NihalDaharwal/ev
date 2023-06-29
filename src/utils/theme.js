import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#00e676",
    },
    secondary: {
      main: "#00352c",
    },
    error: {
      main: red.A400,
    },
    white:{
      main:'#FFFFF'
    },
    badge: {
      main: "#2899dd",
    },
    badge2: {
      main: "#5e6c93",
    },
    badge3: {
      main: "#ff5d5d",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
