import {  Routes, Route } from "react-router-dom";
import Contact from "../contact";
const Router = () => {
  return (
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
};

export default Router;
