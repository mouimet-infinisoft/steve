import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

const EventTimelineItem = ({
  seperator = "",
  content = "",
  opposite = "",
  ...props
}) => {
  return (
    <TimelineItem {...props}>
      <TimelineOppositeContent>{opposite}</TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="primary">
          {seperator}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>{content}</TimelineContent>
    </TimelineItem>
  );
};
export default EventTimelineItem;