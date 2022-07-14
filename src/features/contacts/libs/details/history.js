import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useTheme } from '@mui/system';
import { useMicroState } from "@/core/state";
import {config} from '../../config'
import { featurehistory } from '../../mock/featurelist';


const getHistoryIcon = (action) => {
  switch (true) {
    case action==="create":
      return <FastfoodIcon />;
    case action==="create":
      return <FastfoodIcon />;
    case action==="create":
      return <FastfoodIcon />;
}}

const HistoryTimeLine = ()=> {
  const theme = useTheme();
  const selectedId = useMicroState((s) => s[config.feature.name].selectedId);
  const userHistory = featurehistory().find((item) => item[selectedId]);
  const selectedUserHistory = userHistory[selectedId]
  const userMeta = selectedUserHistory.__meta__
  return (
    <Box height={theme.spacing(32)} overflow="auto">
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          {new Date(userMeta.timestamp).toDateString()}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          {getHistoryIcon(userMeta.action)}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body2">
          {selectedUserHistory.email}
          </Typography>
          <Typography variant="body2" component="span" >{selectedUserHistory.name} Because you need strength</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </Box>
  );
}
export default HistoryTimeLine;