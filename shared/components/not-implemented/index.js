import notready from "./not.gif";
export const NotImplemented = () => (
  <div style={{ textAlign: "center" }}>
    <h2>Not Implemented</h2>
    <img
      src={notready}
      alt="not ready"
      style={{ width: "-webkit-fill-available" }}
    />
  </div>
);

