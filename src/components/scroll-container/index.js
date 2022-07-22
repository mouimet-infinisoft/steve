// @ts-nocheck
import Avatar from "@mui/material/Avatar"
import Divider from "@mui/material/Divider"
import Box from "@mui/system/Box"
import HeaderAndSubtitle from "../header-subtitle";
import { IconButton, Typography, useTheme } from "@mui/material"
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ScrollContainer = ({ title, subtitle, description, children }) => {
    const theme = useTheme();
    return (
        <>
            <Box display="flex" alignItems="center">
                <IconButton
                    sx={{ display: "inline-flex", padding: 0, marginLeft: -1, marginRight: 1 }}
                    disableRipple
                    component={Link}
                    to={-1}
                >
                    <ArrowBackIcon color="primary" />
                </IconButton>
                <Box display="flex" gap={theme.spacing(12)}>
                    <Box display="flex" gap={theme.spacing(1.5)}>
                        <Avatar sx={{ width: theme.spacing(5), height: theme.spacing(5) }}><Typography textTransform="capitalize">{title.charAt(1)}</Typography></Avatar>
                        <HeaderAndSubtitle label={title} value={subtitle} />
                    </Box>
                    <HeaderAndSubtitle flexDirection="column" label={"action"} value={description} />
                </Box>
            </Box>
            <Divider />
            <Box height={theme.spacing(22)} pl={theme.spacing(4)} overflow={"auto"}>
                {children}
            </Box>
        </>
    )
}
export default ScrollContainer