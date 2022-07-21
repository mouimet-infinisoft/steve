import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';

const getHistoryIcon = {
  creation: <CreateNewFolderIcon color="success" />,
  update: <UpdateIcon color="primary" />,
  delete: <DeleteIcon color="error" />,
  today: <CalendarTodayTwoToneIcon color="primary" />
};

const HistoryTimeLineDetails = ({ title, subtitle, description, action }) => (
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
        {description}
      </TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent></TimelineContent>
  </TimelineItem>
)


const HistoryTimeLineContainer = ({ list = [], action, ...props }) => {
  return (
    <Timeline position="alternate">
      {list.map((item) => {
        const userHistory = Object.values(item)[0];
        return (
          <HistoryTimeLineDetails
            action={action}
            title={userHistory.__meta__.action} subtitle={new Date(userHistory.__meta__.timestamp).toDateString()} description={getHistoryIcon[userHistory.__meta__.action]} {...props} />
        )
      })}
    </Timeline>
  )
}


export default HistoryTimeLineContainer;
