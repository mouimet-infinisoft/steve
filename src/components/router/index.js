import { Routes, Route } from "react-router-dom";
import Contacts from "../contacts";
import Cases from "../cases";
import Messages from "../messages";
import Home from "../home";
import Organization from "../organization";
import Community from "../community";
import Layout from "../layout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="cases" element={<Cases />} />
        <Route path="messages" element={<Messages />} />
        <Route path="organization" element={<Organization />} />
        <Route path="community" element={<Community />} />
      </Route>
    </Routes>
  );
};

export default Router;
