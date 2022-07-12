import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

export const baseTheme = (mode) =>
  responsiveFontSizes(
    createTheme({
      palette: {
        mode,
        primary: {
          main: purple[500]
        },
        secondary: {
          main: green[500]
        }
      },
      typography: {
        fontFamily: "'Roboto Flex', sans-serif"
      },
      shape: {
        borderRadius: 10
      },
      components: {
        MuiAppBar: {
          styleOverrides: {
            root: {
              backgroundColor: "#121212"
            }
          }
        },
        MuiInput: {
          styleOverrides: {
            root: {
              "::before": {
                borderBottom: "1px solid rgb(255 255 255 / 0%)"
              }
            }
          }
        }
      }
    })
  );
