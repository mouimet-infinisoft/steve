import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "@/app/details/contact";
import Relations from "@/app/details/relations";
import History from "@/app/details/history";
import ExtraFields from "@/app/details/ExtraFields";
import { useMicroContext } from "../state";
import { config } from "@/config/index";
import ListLayout from "../layout/listlayout";
import Details from "@/app/details";
import { BrowserRouter as Router } from "react-router-dom";

const CoreRouter = ({basename}) => {
  const { log } = useMicroContext();

  if (config?.verbose) {
    log(`${config?.feature?.name} Basename = `, basename);
    log(`${config?.feature?.name} Router location = `, window.location);
  }

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="*" element={<ListLayout />}>
          <Route path=":id" element={<Details />}>
            <Route index element={<Contact />} />
            <Route path="contact" element={<Contact />} />
            <Route path="relations" element={<Relations />} />
            <Route path="extra" element={<ExtraFields />} />
            <Route path="history/*" element={<History />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default CoreRouter;
