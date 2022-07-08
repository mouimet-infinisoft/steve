import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Layout from "./layout";

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
