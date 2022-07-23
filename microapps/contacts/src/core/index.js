import "@/core/theme/css/App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "@/core/router";
import MicroContextProvider from "@/core/state/context";
import { Suspense } from "react";

function App(props) {
  console.log(`POSP  = `, props);
  return (
    <Suspense>
      <MicroContextProvider>
        <BrowserRouter basename={props?.basename}>
          <Router />
        </BrowserRouter>
      </MicroContextProvider>
    </Suspense>
  );
}

export default App;
