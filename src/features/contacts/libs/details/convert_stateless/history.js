import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/system';
import HistoryTimeLine from './history.timeline';
import HistoryDetails from './history.detail';
import ScrollContainer from '@/components/scroll-container';
import SlideEffect from '@/components/slide-effect';

const HistoryTimelineAndDetails = ({ selectedHistory, historyList, setShowHistoryDetails, showHistoryDetails }) => {
  const theme = useTheme();

  return (
    <Box height={theme.spacing(32)} sx={{ overflow: "auto", overflowX: "hidden" }}>
      {/* {!showHistoryDetails && (
        <SlideEffect>
          <HistoryTimeLine list={historyList} setShowHistoryDetails={setShowHistoryDetails} />
        </SlideEffect>
      )}
      {showHistoryDetails && (
        <SlideEffect direction='right' styleProps={{ textAlign: "start" }}>
          <ScrollContainer name={selectedHistory?.name} email={selectedHistory?.email} date={showHistoryDetails?.__meta__?.timestamp} action={showHistoryDetails?.__meta__?.action} goBack={() => setShowHistoryDetails(false)}>
            <HistoryDetails showHistoryDetails={showHistoryDetails?.history} goBack={() => setShowHistoryDetails(false)} showNoRecordFound={Object.values(showHistoryDetails).length} />
          </ScrollContainer>
        </SlideEffect>
      )} */}
    </Box>
  );
}
export default HistoryTimelineAndDetails;