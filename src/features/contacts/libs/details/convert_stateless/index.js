import HistoryTimelineAndDetails from "./history";
import { useMicroState } from "@/core/state";
import { config } from '../../../config'
import { featurehistory } from '../../../mock/featurelist';
import { useItem } from '@/core/hooks';
import * as React from 'react';


const History = () => {
    const selectedId = useMicroState((s) => s[config.feature.name].selectedId);
    const { item } = useItem({
        id: selectedId,
        feature: config.feature.name
    });
    const historyList = featurehistory().filter((item) => item[selectedId]?.id === selectedId);
    const [showHistoryDetails, setShowHistoryDetails] = React.useState(null);
    return <HistoryTimelineAndDetails selectedHistory={item} historyList={historyList} setShowHistoryDetails={setShowHistoryDetails} showHistoryDetails={showHistoryDetails} />
}

export default History;