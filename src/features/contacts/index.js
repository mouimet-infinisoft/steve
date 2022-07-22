import Layout from "./layout";
import { Routes, Route } from "react-router-dom";
import List from "./libs/lists";
import Details from "./libs/details";
import DetailsDrawer from "./libs/details";
import Contact from "./libs/details/contact";
import Relations from "./libs/details/relations";
import History from "./libs/details/history";
import ExtraFields from "./libs/details/ExtraFields";

const Feature = () => {
  return (
    <Routes>
      <Route path="*" element={<Layout />}>
        <Route path=":id" element={<DetailsDrawer />}>
          <Route path="relations" element={<Relations />} />
          <Route path="extra" element={<ExtraFields />} />
          <Route path="history/*" element={<History />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Feature;
