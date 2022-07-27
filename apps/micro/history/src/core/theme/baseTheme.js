import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { presets } from "./presets";

const selectedPreset = "blue";

export const baseTheme = (mode) =>
  responsiveFontSizes(
    createTheme({
      palette: {
        mode,
        ...presets[selectedPreset]
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
    }
    )
  );
