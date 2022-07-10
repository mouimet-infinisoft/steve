import Jumbotron from "../../components/jumbotron";
import Title from "../../components/title";
import HomeLayout from "./home.layout";
import Paper from '@mui/material/Paper'

const Home = () => {
  return (
    <Paper>
      <Title title="Home" />
      <HomeLayout />
    </Paper>
  );
};

export default Home;
