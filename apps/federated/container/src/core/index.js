import "@/core/theme/css/App.css";
import CoreRouter from "@/core/router";
import MicroContextProvider from "@/core/state/context";
import Component from "@/components/component";
import { BrowserRouter as Router } from "react-router-dom";

function Core() {
  return (
    <Component>
      <MicroContextProvider>
        <Router>
          <CoreRouter />
        </Router>
      </MicroContextProvider>
    </Component>
  );
}

export default Core;
