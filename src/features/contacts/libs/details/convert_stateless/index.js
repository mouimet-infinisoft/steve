import { useMicroState } from "@/core/state";
import { config } from '../../../config'
import { featurehistory } from '../../../mock/featurelist';
import * as React from 'react';
import { Routes, Route, Outlet } from "react-router-dom";
import Box from "@mui/system/Box";
import { useTheme } from "@mui/material";
import HistoryTimeLineContainer from "./history.timeline";

const HistoryLayout = () => {
  const theme = useTheme();
  return (
    <Box width={1} height={theme.spacing(32)} overflow="auto">
      <Outlet />
    </Box>
  )
}

const History = () => {
  const selectedId = useMicroState((s) => s[config.feature.name].selectedId);
  const historyList = featurehistory().filter((item) => item[selectedId]?.id === selectedId);
  const handleAction = () => { }
  return (
    <Routes>
      <Route element={<HistoryLayout />}>
        <Route path="history" element={<HistoryTimeLineContainer list={historyList} action={handleAction} />} />
      </Route>
    </Routes>
  );
};


export default History;