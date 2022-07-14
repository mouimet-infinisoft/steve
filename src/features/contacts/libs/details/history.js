import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useTheme } from '@mui/system';
import { useMicroState } from "@/core/state";
import {config} from '../../config'
import { featurehistory } from '../../mock/featurelist';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';

const getHistoryIcon =  {
  creation: <CreateNewFolderIcon color="success"/>,
  update: <UpdateIcon  color="primary"/>,
  delete: <DeleteIcon  color="error"/>,
}

const HistoryTimeLine = ()=> {
  const theme = useTheme();
  const selectedId = useMicroState((s) => s[config.feature.name].selectedId);
  const historyList = featurehistory().filter((item) => item[selectedId]?.id === selectedId);
  return (
    <Box height={theme.spacing(32)} overflow="auto">
    <Timeline>
      {historyList.map((history) => {
        const userHistory = Object.values(history)[0];
        return (
        <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          {new Date(userHistory.__meta__.timestamp).toDateString()}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
           {getHistoryIcon[userHistory.__meta__.action]}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body2">
          {userHistory.email}
          </Typography>
          <Typography variant="body2" component="span" >{userHistory.name} </Typography>
        </TimelineContent>
        </TimelineItem>
        )
})}
    </Timeline>
    </Box>
  );
}
export default HistoryTimeLine;