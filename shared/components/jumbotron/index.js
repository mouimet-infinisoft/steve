import Typography from "@mui/material/Typography";

export const Jumbotron = ({ title }) => {
  return (
    <div>
      <Typography variant="h1" gutterBottom>
        {title}
      </Typography>
    </div>
  );
};
