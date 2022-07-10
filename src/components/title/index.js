import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Title = ({ title }) => {
  return (
    <Box sx={theme => ({backgroundColor: theme.palette.background.default, padding: '1rem', borderRadius: '15px', marginBottom: '2rem'})}>
      <Typography variant="h2">
        {title}
      </Typography>
    </Box>
  );
};

export default Title;
