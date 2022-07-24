import "@/core/theme/css/App.css";
import { MemoryRouter } from "react-router-dom";
import Router from "@/core/router";
import MicroContextProvider from "@/core/state/context";
import Component from "@/components/component";

function App({ basename }) {
  return (
    <Component>
      <MicroContextProvider>
        <MemoryRouter basename={basename}>
          <Router />
        </MemoryRouter>
      </MicroContextProvider>
    </Component>
  );
}

export default App;
