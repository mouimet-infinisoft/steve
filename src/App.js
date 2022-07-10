import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { MemoryRouter } from "react-router-dom";
import Router from "./core/router";
import {darkTheme} from './theme'
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MemoryRouter>
        <Router />
      </MemoryRouter>
    </ThemeProvider>
  );
}

export default App;
