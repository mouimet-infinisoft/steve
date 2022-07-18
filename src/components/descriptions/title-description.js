import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

const TitleDescription = ({title, description}) => <Box sx={{ marginBottom: "0.75rem" }}>
<Typography variant="subtitle2">{title}</Typography>
<Typography variant="body2" color="text.secondary">
  {description}
</Typography>
</Box>

export default TitleDescription