import Layout from "./layout";
import { Routes, Route } from "react-router-dom";
import List from "./libs/lists";

const Feature = () => {
  return (
    <Routes>
      <Route path="*" element={<Layout />}>
        <Route path="*" element={<List />} />
      </Route>
     </Routes>
  );
};

export default Feature;
