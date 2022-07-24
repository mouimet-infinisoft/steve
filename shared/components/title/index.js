import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Title = ({ title, children, sx={}, ...props }) => {
  return (
    <Box
      {...props}
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
        display: "flex",
        alignItems: "center",
        gap: 4,
        padding: "1rem 3rem",
        borderRadius: "15px",
        marginBottom: "2rem",
        ...sx,
      })}
    >
      <Typography variant="h2" sx={{ flex: 1 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default Title;
