import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
    },
    typography: {
      fontFamily: 'Orbitron',
    }
  });