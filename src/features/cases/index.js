import ListLayout from "./libs/lists/layout";
import RequestLayout from "./libs/request";
import { Routes, Route, Navigate } from "react-router-dom";
import List from "./libs/lists";
import Details from "./libs/request/libs/details";
import Individuals from "./libs/request/libs/individuals";
import Services from "./libs/request/libs/services";
import Summary from "./libs/request/libs/summary";
import React from "react";

// const Contacts = React.lazy(() => import(/* webpackChunkName: 'Contacts' */ '@/features/contacts/index'))

const Feature = () => {
  return (
    <Routes>
      <Route element={<ListLayout />}>
        <Route index element={<List />} />
      </Route>
      
      <Route element={<RequestLayout />}>
        <Route path=":id" element={<Navigate to="Details" />} />
        {/* <Route path=":id/Individuals" element={<Contacts/>} /> */}
        <Route path=":id/Individuals" element={<Individuals handleOnChange={undefined} />} />
        <Route path=":id/Details" element={<Details />} />
        <Route path=":id/Services" element={<Services />} />
        <Route path=":id/Summary" element={<Summary />} />
      </Route>
    </Routes>
  );
};

export default Feature;
