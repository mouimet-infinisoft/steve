import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/system';
import { useMicroState } from "@/core/state";
import { config } from '../../../config'
import { featurehistory } from '../../../mock/featurelist';
import HistoryTimeLine from './history.timeline';
import HistoryDetails from './history.detail';
import ScrollContainer from '@/components/scroll-container';
import { useItem } from '@/core/hooks';
import SlideEffect from '@/components/slide-effect';

const History = () => {
  const theme = useTheme();
  const selectedId = useMicroState((s) => s[config.feature.name].selectedId);
  const { item } = useItem({
    id: selectedId,
    feature: config.feature.name
  });
  const historyList = featurehistory().filter((item) => item[selectedId]?.id === selectedId);
  const [showHistoryDetails, setShowHistoryDetails] = React.useState(null);
  return (
    <Box height={theme.spacing(32)} sx={{ overflow: "auto", overflowX: "hidden" }}>
      {!showHistoryDetails && (
        <SlideEffect>
          <HistoryTimeLine list={historyList} setShowHistoryDetails={setShowHistoryDetails} />
        </SlideEffect>
      )}
      {showHistoryDetails && (
        <SlideEffect direction='right' styleProps={{ textAlign: "start" }}>
          <ScrollContainer name={item.name} email={item.email} date={showHistoryDetails.__meta__.timestamp} action={showHistoryDetails.__meta__.action} goBack={() => setShowHistoryDetails(false)}>
            <HistoryDetails showHistoryDetails={showHistoryDetails.history} goBack={() => setShowHistoryDetails(false)} showNoRecordFound={Object.values(showHistoryDetails).length} />
          </ScrollContainer>
        </SlideEffect>
      )}
    </Box>
  );
}
export default History;