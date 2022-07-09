import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { MemoryRouter } from "react-router-dom";
import Router from "./components/router";
import {darkTheme} from './theme'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <MemoryRouter>
        <Router />
      </MemoryRouter>
    </ThemeProvider>
  );
}

export default App;
