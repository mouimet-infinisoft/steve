import IconButton from "@mui/material/IconButton"
import Avatar from "@mui/material/Avatar"
import Divider from "@mui/material/Divider"
import Grid from "@mui/material/Grid"
import Box from "@mui/system/Box"
import HeaderAndSubtitle from "../header-subtitle";
import { useTheme } from "@mui/material"

const ScrollContainer = ({ name, email, action, date, children, goBack }) => {
    const theme = useTheme();
    return (
        <Box pl={theme.spacing(2)} pr={theme.spacing(2)}>
            <Grid container spacing={2}>
                <Grid item xs>
                    <Box display="flex" gap={theme.spacing(1)}>
                        <Avatar sx={{ width: theme.spacing(5), height: theme.spacing(5) }}>H</Avatar>
                        <HeaderAndSubtitle label={name} value={email} />
                    </Box>
                </Grid>
                 <Grid item xs>
                    <Box display="flex" justifyContent={"space-between"}>
                        <HeaderAndSubtitle flexDirection="column" label={action} value={date} />
                    </Box>
                </Grid>
            </Grid>
            <Divider sx={{ marginBottom: 2, marginTop: 2 }} />
            <Box height={theme.spacing(22)}>
                {children}
            </Box>
        </Box>
    )
}
export default ScrollContainer