import { Routes, Route } from "react-router-dom";
// import Cases from "@/features/cases";
// import Messages from "@/features/messages";
// import Home from "@/app/index";
// import Organizations from "@/features/organizations";
// import Community from "@/features/community";
import Layout from "../layout";
import React from 'react'

const Contacts = React.lazy(() => import(/* webpackChunkName: 'Contacts' */ 'contacts/Contact'))

const Router = () => {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        {/* <Route path="home/*" element={<Home />} /> */}
        <Route path="contacts/*" element={<Contacts />} />
        {/* <Route path="cases/*" element={<Cases />} />
        <Route path="messages/*" element={<Messages />} />
        <Route path="organizations/*" element={<Organizations />} />
        <Route path="community/*" element={<Community />} />
        <Route index element={<Home />} /> */}
      </Route>
    </Routes>
  );
};

export default Router;
