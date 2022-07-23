import Layout from "@/core/layout";
import { Routes, Route, useLocation } from "react-router-dom";
import DetailsDrawer from "@/app/details";
import Contact from "@/app/details/contact";
import Relations from "@/app/details/relations";
import History from "@/app/details/history";
import ExtraFields from "@/app/details/ExtraFields";
import Lists from "@/app/lists";
import { useMicroContext } from "../state";
import { config } from "@/config/";

const Feature = () => {
  const { log } = useMicroContext()
  const location = useLocation();

  if (config?.verbose) {
    log(`${config?.feature?.name} Router looation = `, location);
  }

  return (
    <Routes>
      <Route element={<Layout />}>
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
