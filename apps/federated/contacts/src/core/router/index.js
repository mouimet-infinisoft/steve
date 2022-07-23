import { Routes, Route, useLocation} from "react-router-dom";
import Contact from "@/app/details/contact";
import Relations from "@/app/details/relations";
import History from "@/app/details/history";
import ExtraFields from "@/app/details/ExtraFields";
import { useMicroContext } from "../state";
import { config } from "@/config/";
import ListLayout from "../layout/listlayout";
import Details from "@/app/details";

const Feature = () => {
  const { log } = useMicroContext();
  const location = useLocation();

  if (config?.verbose) {
    log(`${config?.feature?.name} Router location = `, location);
  }

  return (
    <Routes>
      <Route path="*" element={<ListLayout />}>
        <Route path=":id/*" element={<Details />}>
          <Route path="contact" element={<Contact />} />
          <Route path="relations" element={<Relations />} />
          <Route path="extra" element={<ExtraFields />} />
          <Route path="history/*" element={<History />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Feature;
