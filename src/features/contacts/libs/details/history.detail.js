import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, IconButton, useTheme } from "@mui/material";
import HeaderAndSubtitle from "@/components/header-subtitle";
import { removeIdAndKeys } from "./utils";
import { generateId } from "@/helpers";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const NestedHistoryDetailsItems = (key, nestedList) => {
    const theme = useTheme();
    const list = removeIdAndKeys(nestedList)
    return (
        <Grid item xs={4} key={generateId()}>
            <Typography variant="body1" textTransform='capitalize'>
                {key}
            </Typography>
            {list?.map((props) => ( <HeaderAndSubtitle key={generateId()} {...props} display="flex" gap={theme.spacing(1)} />)) }
        </Grid>
    )
}
const HistoryDetails = ({ showHistoryDetails, goBack }) => (
    <>
                    <Box display="inline-flex" justifyContent={"space-between"}>
                        <IconButton onClick={() => goBack()}>
                            <ArrowForwardIcon color="primary" />
                        </IconButton>
                    </Box>
    <Grid container spacing={2} sx={{overflow:"auto"}}>
           {Object.keys(showHistoryDetails).map((key) => (
                <>
                    {Boolean(typeof showHistoryDetails[key] === "object") && NestedHistoryDetailsItems(key, showHistoryDetails[key])}
                    {Boolean(typeof showHistoryDetails[key] !== "object") && (
                        <Grid item xs={4}>
                            <HeaderAndSubtitle key={generateId()} label={key} value={showHistoryDetails[key]} />
                        </Grid>
                    )}
                </>
            ))}
    </ Grid>
    </>
)

export default HistoryDetails;