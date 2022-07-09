import { createTheme } from "@mui/material/styles";
import { baseTheme } from "./baseTheme";

export const darkTheme = createTheme(baseTheme, {
  palette: {
    mode: "dark"
  }
});
