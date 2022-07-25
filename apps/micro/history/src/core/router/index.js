import { Routes, Route } from "react-router-dom";
import { useMicroContext } from "@/core/state";
import { config } from "@/config/index";
import ListLayout from "@/core/layout";
import { BrowserRouter as Router } from "react-router-dom";
import TimeLine from "@/app/timeline.list";
import Event from "@/app/event";

const CoreRouter = ({basename, ...props}) => {
  const { log } = useMicroContext();

  if (config?.verbose) {
    log(`${config?.feature?.name} Basename = `, basename);
    log(`${config?.feature?.name} Router location = `, window.location);
  }

  return (
    <Router>
      <Routes>
        <Route path="*" element={<ListLayout {...props}/>}>
          <Route index element={<TimeLine {...props}/>} />
          <Route path=":id" element={<Event {...props}/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default CoreRouter;
