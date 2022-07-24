import { Routes, Route, useLocation } from "react-router-dom";
// import Cases from "@/features/cases";
// import Messages from "@/features/messages";
// import Home from "@/app/index";
// import Organizations from "@/features/organizations";
// import Community from "@/features/community";
import Layout from "../layout";
import React from "react";
import { config } from "@/config/";
import { useMicroContext } from "../state";
import NoResult from "@/components/no-result";
import Home from "../../home";

const Cases = React.lazy(() =>
  import(/* webpackChunkName: 'Cases' */ "cases/Case")
);
const Contacts = React.lazy(() =>
  import(/* webpackChunkName: 'Contacts' */ "contacts/Contact")
);

const Router = () => {
  const { log } = useMicroContext();
  const location = useLocation();

  if (config?.verbose) {
    log(`${config?.feature?.name} Router location = `, location);
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts/*"
          // element={<Contacts basename={"/contacts"} />}
          element={<Contacts basename={location?.basename ?? "/"} />}
        />
        <Route
          path="cases/*"
          element={<Cases basename={location?.basename ?? "/"} />}
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

export default Router;
