import Avatar from "@mui/material/Avatar"
import Divider from "@mui/material/Divider"
import Box from "@mui/system/Box"
import HeaderAndSubtitle from "../header-subtitle";
import { useTheme } from "@mui/material"

const ScrollContainer = ({ title, subtitle, description, children}) => {
    const theme = useTheme();
    return (
        <>
            <Box display="flex" justifyContent="space-between">
                <Box display="flex" gap={theme.spacing(1)}>
                    <Avatar sx={{ width: theme.spacing(5), height: theme.spacing(5) }}>H</Avatar>
                    <HeaderAndSubtitle label={title} value={subtitle} />
                </Box>
                <Box display="flex" justifyContent={"space-between"}>
                    <HeaderAndSubtitle flexDirection="column" label={"action"} value={description} />
                </Box>
            </Box>
            <Divider sx={{ marginBottom: 2, marginTop: 2 }} />
            <Box height={theme.spacing(22)}>
                {children}
            </Box>
        </>
    )
}
export default ScrollContainer