import ListLayout from "./libs/lists/layout";
import RequestLayout from "./libs/request";
import { Routes, Route, Navigate } from "react-router-dom";
import List from "./libs/lists";
import Details from "./libs/details";
import Individuals from "./libs/request/libs/individuals";
import General from "./libs/request/libs/general";
import Services from "./libs/request/libs/services";
import Planning from "./libs/request/libs/planning";
import Summary from "./libs/request/libs/summary";

const Feature = () => {
  return (
    <Routes>
      <Route element={<ListLayout />}>
        <Route index element={<List />} />
      </Route>
      <Route element={<RequestLayout />}>
        <Route path=":id" element={<Navigate to="general" />} />
        <Route path=":id/General" element={<General />} />
        <Route path=":id/Individuals" element={<Individuals />} />
        <Route path=":id/Details" element={<Details />} />
        <Route path=":id/Services" element={<Services />} />
        <Route path=":id/Planning" element={<Planning />} />
        <Route path=":id/Summary" element={<Summary />} />
      </Route>
    </Routes>
  );
};

export default Feature;
