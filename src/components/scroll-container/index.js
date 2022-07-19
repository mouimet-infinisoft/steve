import Avatar from "@mui/material/Avatar"
import Divider from "@mui/material/Divider"
import Box from "@mui/system/Box"
import HeaderAndSubtitle from "../header-subtitle";
import { useTheme } from "@mui/material"

const ScrollContainer = ({ name, email, action, date, children, goBack }) => {
    const theme = useTheme();
    return (
        <>
            <Box display="flex" justifyContent="space-between" pl={theme.spacing(2)} pr={theme.spacing(2)}>
                <Box display="flex" gap={theme.spacing(1)}>
                    <Avatar sx={{ width: theme.spacing(5), height: theme.spacing(5) }}>H</Avatar>
                    <HeaderAndSubtitle label={name} value={email} />
                </Box>
                <Box display="flex" justifyContent={"space-between"}>
                    <HeaderAndSubtitle flexDirection="column" label={action} value={new Date(date).toDateString("en-US")} />
                </Box>
            </Box>
            <Divider sx={{ marginBottom: 2, marginTop: 2 }} />
            <Box height={theme.spacing(22)} pl={theme.spacing(2)} pr={theme.spacing(2)}>
                {children}
            </Box>
        </>
    )
}
export default ScrollContainer