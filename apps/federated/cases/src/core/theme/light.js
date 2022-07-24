import { createTheme } from "@mui/material";
import { baseTheme } from "./baseTheme";

export const light = createTheme(baseTheme("light"), {
  palette: {
    background: {
      paper: "#eeeeee"
    }
  },
});
