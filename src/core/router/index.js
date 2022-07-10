import { Routes, Route } from "react-router-dom";
import Contacts from "../../components/contacts";
import Cases from "../../components/cases";
import Messages from "../../components/messages";
import Home from "../../components/home";
import Organization from "../../components/organization";
import Community from "../../components/community";
import Layout from "../../components/layout";

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
