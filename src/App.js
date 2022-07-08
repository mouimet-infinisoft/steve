import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Layout from "./components/layout";
import { MemoryRouter } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    </ThemeProvider>
  );
}

export default App;
