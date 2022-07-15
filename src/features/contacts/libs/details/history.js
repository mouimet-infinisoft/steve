import * as React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/system';
import { useMicroState } from "@/core/state";
import { config } from '../../config'
import { featurehistory } from '../../mock/featurelist';
import HistoryTimeLine from './history.timeline';
import HistoryDetails from './history.detail';
import { motion, AnimatePresence } from 'framer-motion';

const FadeInOutEffect = ({ children }) => (
  <AnimatePresence>
    <motion.div initial={{ opacity: 0, scale: 0.5 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
)

const History = () => {
  const theme = useTheme();
  const selectedId = useMicroState((s) => s[config.feature.name].selectedId);
  const historyList = featurehistory().filter((item) => item[selectedId]?.id === selectedId);
  const [showHistoryDetails, setShowHistoryDetails] = React.useState(null);
  return (
    <Box height={theme.spacing(32)} overflow="auto">
      {!showHistoryDetails && (
        <FadeInOutEffect>
          <HistoryTimeLine list={historyList} setShowHistoryDetails={setShowHistoryDetails} />
        </FadeInOutEffect>
      )}
      {showHistoryDetails && (
        <FadeInOutEffect>
          <HistoryDetails showHistoryDetails={showHistoryDetails} setShowHistoryDetails={setShowHistoryDetails} />
        </FadeInOutEffect>
      )}
    </Box>
  );
}
export default History;