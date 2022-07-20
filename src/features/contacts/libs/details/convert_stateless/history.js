import * as React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/system';
import { useMicroState } from "@/core/state";
import { config } from '../../../config'
import { featurehistory } from '../../../mock/featurelist';
import HistoryTimeLine from './history.timeline';
import HistoryDetails from './history.detail';
import FadeInOutEffect from "@/components/fade-effect"
import ScrollContainer from '@/components/scroll-container';
import { useItem } from '@/core/hooks';

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
    <Box height={theme.spacing(32)} overflow="auto">
      {!showHistoryDetails && (
        <FadeInOutEffect>
          <HistoryTimeLine list={historyList} setShowHistoryDetails={setShowHistoryDetails} />
        </FadeInOutEffect>
      )}
      {showHistoryDetails && (
        <FadeInOutEffect>
          <ScrollContainer name={item.name} email={item.email} date={showHistoryDetails.__meta__.timestamp} action={showHistoryDetails.__meta__.action} goBack={setShowHistoryDetails}>
            <HistoryDetails showHistoryDetails={showHistoryDetails.history} />
          </ScrollContainer>
        </FadeInOutEffect>
      )}
    </Box>
  );
}
export default History;