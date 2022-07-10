import "./App.css";
import { MemoryRouter } from "react-router-dom";
import Router from "./core/router";
import MicroContextProvider from "@/core/state/context";
import { Suspense } from "react";

function App() {
  return (
    <Suspense>
      <MicroContextProvider>
        <MemoryRouter>
          <Router />
        </MemoryRouter>
      </MicroContextProvider>
    </Suspense>
  );
}

export default App;
