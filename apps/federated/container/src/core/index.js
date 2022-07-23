import "@/core/theme/css/App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "@/core/router";
import MicroContextProvider from "@/core/state/context";
import Component from '@/components/component'

function App() {
  return (
    <Component>
      <MicroContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </MicroContextProvider>
    </Component>
  );
}

export default App;
