import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const HistoryTimeLineItem = ({
  title = "",
  subtitle = "",
  subtitle2 = "",
  description = "",
  to = "/"
}) => {
  const nav = useNavigate();

  return (
    <>
      <TimelineItem onClick={() => nav(to)}>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          {subtitle}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            {description}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="subtitle1" component="span" textTransform="capitalize">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">{subtitle2}</Typography>
        </TimelineContent>
      </TimelineItem>
      </>
  );
};
export default HistoryTimeLineItem;
