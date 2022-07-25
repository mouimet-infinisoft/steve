import Item from "./item";
import { default as MUITimeline } from "@mui/lab/Timeline";
import Box from "@mui/system/Box";
import { Link } from "react-router-dom";
import Empty from "./empty";

const TimeLine = ({ events = {} }) => {
  const _events = Object.entries(events);

  if (!_events ||  _events?.length<= 0) {
    return <Empty />;
  }
console.log(_events)
  return (
    <Box overflow="auto" p={2} width={"100%"}>
      <MUITimeline>
        {_events?.map?.(([id, { timeline, details }]) => {
          return (
          <Link key={id} to={id} state={details} reloadDocument={false} replace={false}>
            <Item {...timeline}/>
          </Link>
        )}
        )}
      </MUITimeline>
    </Box>
  );
};

export default TimeLine;
