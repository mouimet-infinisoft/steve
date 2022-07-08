import { Routes, Route } from "react-router-dom";
import Contact from "../contact";
import Home from "../home";
import Organization from "../organization";
import Community from "../community";
import Layout from "../layout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="organization" element={<Organization />} />
        <Route path="community" element={<Community />} />
      </Route>
    </Routes>
  );
};

export default Router;
