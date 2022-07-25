import ListLayout from "@/app/lists/layout";
import RequestLayout from "@/app/request";
import {
  Routes,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import List from "@/app/lists/index";
import Details from "@/app/request/libs/details";
// import Individuals from "@/app/request/libs/individuals";
import Services from "@/app/request/libs/services";
import Summary from "@/app/request/libs/summary";
import React from "react";
import { useMicroContext } from "../state";
import { config } from "@/config/index";

const Contacts = React.lazy(() =>
  import(/* webpackChunkName: 'Contacts' */ "contacts/Contact")
);

const CoreRouter = ({ basename }) => {
  const { log } = useMicroContext();

  if (config?.verbose) {
    log(`${config?.feature?.name} Basename = `, basename);
    log(`${config?.feature?.name} Router location = `, window.location);
  }

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="*" element={<ListLayout />}>
          <Route index element={<List />} />
        </Route>

        <Route path=":id/*" element={<RequestLayout />}>
        <Route index element={<Details />} />
        <Route path="Details" element={<Details />} />
        <Route path="Individuals" element={<Contacts />} />
        {/* <Route
          path="Individuals"
          element={<Individuals handleOnChange={undefined} />}
        /> */}
        <Route path="Services" element={<Services />} />
        <Route path="Summary" element={<Summary />} />
      </Route>
      </Routes>
    </Router>
  );
};

export default CoreRouter;
