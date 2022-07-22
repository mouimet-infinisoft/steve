import Layout from "./layout";
import { Routes, Route } from "react-router-dom";
import List from "./libs/lists";
import Details from "./libs/details";
import DetailsDrawer from "./libs/details";
import Fields from "./libs/details/Fields";
import Relations from "./libs/details/relations";
import History from "./libs/details/convert_stateless";
import ExtraFields from "./libs/details/ExtraFields";

const Feature = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path=":id" element={<List />}>
          <Route path="details" element={<DetailsDrawer />}>
            <Route path="relations" element={<Relations />} />
            <Route path="extra" element={<ExtraFields />} />
            <Route path="history" element={<History />} />
            <Route path="contact" element={<Fields />} />
          </Route>
        </Route>
        <Route index element={<List index />} />
      </Route>
    </Routes>
  );
};

export default Feature;
