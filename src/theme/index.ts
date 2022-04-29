// import { createTheme } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { palette } from "./colors.theme";

export const theme = createTheme({
  palette,
  typography: {
    fontFamily: ["Lato"].join(","),
  },
});
