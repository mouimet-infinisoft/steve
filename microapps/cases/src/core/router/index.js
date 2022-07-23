import ListLayout from "@/app/lists/layout";
import RequestLayout from "@/app/request";
import { Routes, Route, Navigate } from "react-router-dom";
import List from "@/app/lists/index";
import Details from "@/app/request/libs/details";
import Individuals from "@/app/request/libs/individuals";
import Services from "@/app/request/libs/services";
import Summary from "@/app/request/libs/summary";
import React from "react";

// const Contacts = React.lazy(() => import(/* webpackChunkName: 'Contacts' */ '@/features/contacts/index'))

const Feature = () => {
  return (
    <Routes>
      <Route element={<ListLayout />}>
        <Route index element={<List />} />
      </Route>

      <Route path=":id" element={<RequestLayout />}>
        <Route index element={<Details />} />
        <Route
          path="Individuals"
          element={<Individuals handleOnChange={undefined} />}
        />
        <Route path="Services" element={<Services />} />
        <Route path="Summary" element={<Summary />} />
      </Route>
    </Routes>
  );
};

export default Feature;
