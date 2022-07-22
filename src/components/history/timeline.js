import HistoryTimelineItem from "./timeline.item";
import { generateId } from "@/helpers";
import Timeline from "@mui/lab/Timeline";
import { useTheme } from "@mui/system";
import Box from "@mui/system/Box";

const HistoryTimeLine = ({ list = [] }) => {
  const theme = useTheme();
  return (
    <Box overflow="auto" height={theme.spacing(28)}>
      <Timeline position="alternate" sx={{paddingTop:0}}>
        {list?.map?.(({id, title, subtitle, description}) => (
          <HistoryTimelineItem
            key={generateId()}
            title={title}
            subtitle={subtitle}
            description={description}
            to={id}
          />
        ))}
      </Timeline>
      </Box>
  );
};

export default HistoryTimeLine;
