import HistoryTimelineItem from "./timeline.item";
import { generateId } from "@/helpers";
import Timeline from "@mui/lab/Timeline";

const HistoryTimeLine = ({ list = [] }) => {
  return (
    <>
      <Timeline position="alternate">
        {list?.map((props) => (
          <HistoryTimelineItem
            key={generateId()}
            title="title"
            subtitle="sss"
            description="ddd"
            action={()=>{}}
          />
        ))}
      </Timeline>
    </>
  );
};

export default HistoryTimeLine;
