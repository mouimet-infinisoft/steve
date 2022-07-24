import {
  Routes,
  Route,
} from "react-router-dom";
// import Cases from "@/features/cases";
// import Messages from "@/features/messages";
// import Home from "@/app/index";
// import Organizations from "@/features/organizations";
// import Community from "@/features/community";
import Layout from "../layout";
import React from "react";
import { config } from "@/config/index";
import { useMicroContext } from "../state";
import NoResult from "@/components/no-result";
import Home from "../../home";

const Cases = React.lazy(() =>
  import(/* webpackChunkName: 'Cases' */ "cases/Case")
);
const Contacts = React.lazy(() =>
  import(/* webpackChunkName: 'Contacts' */ "contacts/Contact")
);

const CoreRouter = ({ basename = "/"}) => {
  const { log } = useMicroContext();

  if (config?.verbose) {
    log(`${config?.feature?.name} Basename = `, basename);
    log(`${config?.feature?.name} Router location = `, window.location.pathname);
  }

  return (
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts/*"
            // element={<Contacts basename={"/contacts"} />}
            element={<Contacts basename={"/contacts"} />}
          />
          <Route
            path="cases/*"
            element={<Cases basename={window.location.pathname} />}
          />
          {/* <Route path="messages/*" element={<Messages />} />
        <Route path="organizations/*" element={<Organizations />} />
        <Route path="community/*" element={<Community />} />
        <Route index element={<Home />} /> */}
          <Route path="*" element={<NoResult />} />
        </Route>
      </Routes>
  );
};

export default CoreRouter;
