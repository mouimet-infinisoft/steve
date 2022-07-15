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
import ButtonBase from '@mui/material/ButtonBase';

const getHistoryIcon = {
  creation: <CreateNewFolderIcon color="success" />,
  update: <UpdateIcon color="primary" />,
  delete: <DeleteIcon color="error" />,
}

const HistoryTimeLine = ({ list = [], setShowHistoryDetails }) => {
  const handleClick = (item) => {
    const { email, __meta__, __extra__, tags, ...rest } = item;
    setShowHistoryDetails(rest);
  }
  return (
    <Timeline>
      {list.map((history) => {
        const userHistory = Object.values(history)[0];
        return (
          <ButtonBase onClick={() => handleClick([userHistory])}>
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
                <Typography variant="body2" component="span">{userHistory.__meta__.action} by {userHistory.email}</Typography>
              </TimelineContent>
            </TimelineItem>
          </ButtonBase>
        )
      })}
    </Timeline>

  )
}

export default HistoryTimeLine;