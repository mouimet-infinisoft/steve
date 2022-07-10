import { Routes, Route } from "react-router-dom";
import Contacts from "../../features/contacts";
import Cases from "../../features/cases";
import Messages from "../../features/messages";
import Home from "../../features/home";
import Organization from "../../features/organization";
import Community from "../../features/community";
import Layout from "../layout";

const Router = () => {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route path="home/*" element={<Home />} />
        <Route path="contacts/*" element={<Contacts />} />
        <Route path="cases/*" element={<Cases />} />
        <Route path="messages/*" element={<Messages />} />
        <Route path="organization/*" element={<Organization />} />
        <Route path="community/*" element={<Community />} />
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
