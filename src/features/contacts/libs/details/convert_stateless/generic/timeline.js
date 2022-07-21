import HistoryTimelineItem from "./timeline.item";
import { generateId } from "@/helpers";
import Timeline from "@mui/lab/Timeline";

const HistoryTimeLine = ({ list = [] }) => {
  return (<>
    <Timeline position="alternate">
      {list?.map((props) => (
        <HistoryTimelineItem key={props?.id ?? generateId()} {...props} />
      ))}
    </Timeline>
  </>
  )
};

export default HistoryTimeLine;
