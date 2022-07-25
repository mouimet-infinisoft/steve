import "@/core/theme/css/App.css";
// import { MemoryRouter } from "react-router-dom";
import CoreRouter from "@/core/router";
import MicroContextProvider from "@/core/state/context";
import Component from "@/components/component";

function Core() {
  return (
    <Component>
      <MicroContextProvider>
        {/* <MemoryRouter basename={basename}> */}
          <CoreRouter basename={window.location.pathname}/>
        {/* </MemoryRouter> */}
      </MicroContextProvider>
    </Component>
  );
}

export default Core;
