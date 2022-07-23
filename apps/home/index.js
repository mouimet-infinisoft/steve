
import HomeLayout from "./home.layout";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./libs/dashboard";
import Settings from "./libs/settings";

const Home = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomeLayout />}>
        <Route path='dashboard/*' element={<Dashboard />} />
        <Route path='settings/*' element={<Settings />} />
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Home;
