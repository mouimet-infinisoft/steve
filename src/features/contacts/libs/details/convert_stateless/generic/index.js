import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from "./layout"
const Timeline = React.lazy(() => import(/* webpackChunkName: 'HistoryTimeline' */ './timeline'))
const Details = React.lazy(() => import(/* webpackChunkName: 'HistoryTimeline' */ './detail'))

const History = ({ timelineProps, detailsProps }) => {
  return (
    <Routes>
    <Route path="/Contacts/:id/history" element={<Layout />}>
      <Route index element={<Timeline {...timelineProps} />} />
       <Route path="/Contacts/:id/history/:timelineItemId/details" element={<Details {...detailsProps} />} />
    </Route>
  </Routes>
  );
};


export default History;