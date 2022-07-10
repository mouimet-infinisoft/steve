
import Layout from "./layout";
import { Routes, Route } from "react-router-dom";
import Contacts from './libs/lists'
import contacts from './mock/contacts.json'


const ContactFeature = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Contacts list={contacts}  />} />
      </Route>
    </Routes>
  );
};

export default ContactFeature;
