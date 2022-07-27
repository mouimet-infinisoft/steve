import Typography from "@mui/material/Typography"
import Box from "@mui/system/Box"

export const HeaderAndSubtitle = (props) => (
    <Box {...props}>
        <Typography variant="body1" color="text.primary" textTransform={"capitalize"} textAlign="start">
            {props.label}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
            {props.tag}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
            {props.value}
        </Typography>
    </Box>
)
