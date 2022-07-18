import { Typography } from "@mui/material"
import { Box } from "@mui/system"

const HeaderAndSubtitle = (props) => (
    <Box {...props}>
        <Typography variarnt="body1" color="text.primary" textTransform={"capitalize"}>
            {props.label}
        </Typography>
        <Typography variarnt="body2" color="text.secondary" component={"span"}>
            {props.tag}
        </Typography>
        <Typography variarnt="body2" color="text.secondary" component={"span"}>
            {props.value}
        </Typography>
    </Box>
)

export default HeaderAndSubtitle;