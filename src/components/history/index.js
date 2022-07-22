import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";

const Timeline = React.lazy(() =>
  import(/* webpackChunkName: 'HistoryTimeline' */ "./timeline")
);
const Details = React.lazy(() =>
  import(/* webpackChunkName: 'HistoryTimeline' */ "./detail")
);

const History = ({ timelineProps, detailsProps }) => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path=":actionId" element={<Details {...detailsProps} />} />
        <Route index element={<Timeline {...timelineProps} />} />
      </Route>
    </Routes>
  );
};

export default History;
