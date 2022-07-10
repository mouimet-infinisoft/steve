import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

export const baseTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: purple[500]
      },
      secondary: {
        main: green[500]
      }
    },
    typography: {
      fontFamily: "'Roboto Flex', sans-serif",
    },
    shape: {
      borderRadius: 15
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: "#121212"
          }
        }
      }
    }
  })
);
