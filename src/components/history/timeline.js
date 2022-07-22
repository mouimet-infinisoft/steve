import HistoryTimelineItem from "./timeline.item";
import { generateId } from "@/helpers";
import Timeline from "@mui/lab/Timeline";
import { Link } from "react-router-dom";

const HistoryTimeLine = ({ list = [] }) => {
  return (
      <Timeline position="alternate">
        {list?.map?.((props) => (
          <HistoryTimelineItem
            key={generateId()}
            title="title"
            subtitle="sss"
            description="ddd"
            to={'id'}
          />
        ))}
      </Timeline>
  );
};

export default HistoryTimeLine;
