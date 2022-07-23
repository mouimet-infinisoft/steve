import Layout from "@/core/layout";
import { Routes, Route } from "react-router-dom";
import DetailsDrawer from "@/app/details";
import Contact from "@/app/details/contact";
import Relations from "@/app/details/relations";
import History from "@/app/details/history";
import ExtraFields from "@/app/details/ExtraFields";
import Lists from "@/app/lists";

const Feature = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path=":id" element={<DetailsDrawer />}>
          <Route path="relations" element={<Relations />} />
          <Route path="extra" element={<ExtraFields />} />
          <Route path="history/*" element={<History />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route index element={<Lists />} />
      </Route>
    </Routes>
  );
};

export default Feature;
