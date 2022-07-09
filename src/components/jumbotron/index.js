import Typography from "@mui/material/Typography";

const Jumbotron = ({ title }) => {
  return (
    <div>
      <Typography variant="h1" gutterBottom component="div">
        {title}
      </Typography>
    </div>
  );
};

export default Jumbotron;
