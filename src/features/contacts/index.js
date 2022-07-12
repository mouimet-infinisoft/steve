
import Layout from "./layout";
import { Routes, Route } from "react-router-dom";
import Contacts from './libs/lists'

const ContactFeature = () => {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route index element={<Contacts />} />
      </Route>
    </Routes>
  );
};

export default ContactFeature;
