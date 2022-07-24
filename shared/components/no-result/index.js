import notready from "./nothing.gif";
const NoResult = () => (
  <div style={{ textAlign: "center", width: '500px' }}>
    <h2>No Results</h2>
    <img
      src={notready}
      alt="no result"
      style={{ width: "-webkit-fill-available" }}
    />
  </div>
);

export default NoResult;
