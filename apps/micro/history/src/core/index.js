import "@/core/theme/css/App.css";
import CoreRouter from "@/core/router";
import MicroContextProvider from "@/core/state/context";
import Component from "@/components/component";

function Core(props) {

  return (
    <Component>
      <MicroContextProvider>
          <CoreRouter basename={window.location.pathname} {...props}/>
      </MicroContextProvider>
    </Component>
  );
}

export default Core;
