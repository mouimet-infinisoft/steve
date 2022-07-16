import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';

const getHistoryIcon = {
  creation: <CreateNewFolderIcon color="success" />,
  update: <UpdateIcon color="primary" />,
  delete: <DeleteIcon color="error" />,
}

const HistoryTimeLine = ({ list = [], setShowHistoryDetails }) => {
  const handleClick = (item) => {
    const { email, __meta__, __extra__, __relation__, tags, id, avatar, ...rest } = item;
    console.log(rest)
    setShowHistoryDetails(rest);
  }
  return (
    <Timeline position="alternate">
      {list.map((history) => {
        const userHistory = Object.values(history)[0];
        return (
          <TimelineItem onClick={() => handleClick(userHistory)}>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
            >
              <Typography variant="body1" color="text.primary" textTransform={"capitalize"}>
                {userHistory.__meta__.action}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {new Date(userHistory.__meta__.timestamp).toDateString()}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                {getHistoryIcon[userHistory.__meta__.action]}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            </TimelineContent>
          </TimelineItem>
        )
      })}
    </Timeline>

  )
}

export default HistoryTimeLine;