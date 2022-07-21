import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from "./layout"
const Timeline = React.lazy(() => import(/* webpackChunkName: 'HistoryTimeline' */ './timeline'))
const Details = React.lazy(() => import(/* webpackChunkName: 'HistoryTimeline' */ './detail'))

const History = ({ timelineProps, detailsProps }) => {
  return (
    <Routes>
    <Route element={<Layout />}>
      <Route path="history" element={<Timeline {...timelineProps} />} />
       <Route path=":id/details" element={<Details {...detailsProps} />} />
    </Route>
  </Routes>
  );
};


export default History;