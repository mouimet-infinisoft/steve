import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";

const HistoryTimeLineItem = ({ title, subtitle, description, action }) => (
  <TimelineItem onClick={() => action()}>
    <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
      <Typography
        variant="body1"
        color="text.primary"
        textTransform={"capitalize"}
      >
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {subtitle}
      </Typography>
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineConnector />
      <TimelineDot>
        {/* {description} */}
      </TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent></TimelineContent>
  </TimelineItem>
)
export default HistoryTimeLineItem;
