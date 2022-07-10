
import HomeLayout from "./home.layout";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./libs/dashboard";
import Settings from "./libs/settings";

const Home = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='settings' element={<Settings />} />
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Home;
