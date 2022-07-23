import "@/core/theme/css/App.css";
import { MemoryRouter } from "react-router-dom";
import Router from "@/core/router";
import MicroContextProvider from "@/core/state/context";
import Component from '@/components/component'

function App() {
  return (
    <Component>
      <MicroContextProvider>
        <MemoryRouter>
          <Router />
        </MemoryRouter>
      </MicroContextProvider>
    </Component>
  );
}

export default App;
