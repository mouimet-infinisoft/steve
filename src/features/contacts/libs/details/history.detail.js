import { ButtonBase, Grid, IconButton, Typography, Box } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const HistoryChangedValues = (title, value) => (
    <Grid item xs={6}>
        <Typography variant="body1" sx={{textTransform: 'capitalize'}}>
            {title}
        </Typography>
        <Typography variant="body1">
            {value}
        </Typography>
    </Grid>)


const NestedHistoryChangedValues = (nestedList) => (
    <>
        {nestedList.map((item) =>
        (Object.keys(item).map((key) => (
            HistoryChangedValues(key, item[key])
        )))
        )}
    </>)

const HistoryDetails = ({ showHistoryDetails, setShowHistoryDetails }) => {
    return (
        <Box display="flex">
            <ButtonBase onClick={() => setShowHistoryDetails(false)}>
                <IconButton disableRipple>
                    <ArrowBackIcon color="primary" />
                </IconButton>
            </ButtonBase>
            <Grid container spacing={2}>
                {Object.keys(showHistoryDetails).map((key) => (
                    <>
                        {Boolean(typeof showHistoryDetails[key] === "object") && NestedHistoryChangedValues(showHistoryDetails[key])}
                        {Boolean(typeof showHistoryDetails[key] !== "object") && HistoryChangedValues(key, showHistoryDetails[key])}
                    </>
                ))}
            </Grid>
        </Box>
    )
}

export default HistoryDetails;