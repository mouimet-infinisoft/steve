import { Avatar, Divider, Grid, IconButton } from "@mui/material"
import { Box } from "@mui/system"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from "@emotion/react";
import HeaderAndSubtitle from "../header-subtitle";

const ScrollContainer = ({ name, email, action, date, children, goBack }) => {
    const theme = useTheme();
    return (
        <>
            <Box pl={theme.spacing(2)} pr={theme.spacing(2)}>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Box display="flex" gap={theme.spacing(1)}>
                            <Avatar sx={{ width: 46, height: 46 }}>H</Avatar>
                            <HeaderAndSubtitle label={"label"} value={"value"} />
                        </Box>
                    </Grid>
                    <Grid item xs>
                        <Box display="flex" justifyContent={"space-between"}>
                            <HeaderAndSubtitle flexDirection="column" label={"label"} value={"value"} />
                            <IconButton onClick={() => goBack(false)}>
                                <ArrowForwardIcon color="primary" />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
                <Divider sx={{ marginBottom: 2, marginTop: 2 }} />
                <Box height={theme.spacing(22)} overflow="auto">
                    {children}
                </Box>
            </Box>
        </>
    )
}
export default ScrollContainer