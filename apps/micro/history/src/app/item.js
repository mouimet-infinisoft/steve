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
        <TimelineDot color="primary" sx={hoverCss} key="SEPERATOR">
          {seperator}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={hoverCss}>{content}</TimelineContent>
    </TimelineItem>
  );
};
export default EventTimelineItem;

const hoverCss = {
  ":hover": { cursor: "pointer" },
  "svg:hover,span:hover, [class*=MuiTypography]:hover": {
    transform: "scale(1.1)",
    // transition: "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
  }
};
