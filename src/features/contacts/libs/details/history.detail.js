import { ButtonBase, Grid, IconButton, Typography, Box } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getFormattedTitle } from "../utils";

const TypographyTitle = (title, value) => (
    <Grid item xs={6}>
        <Typography variant="body1">
            {getFormattedTitle(title)}
        </Typography>
        <Typography variant="body1">
            {value}
        </Typography>
    </Grid>)


const DetailedChanges = (nestedList) => (
    <>
        {nestedList.map((item) =>
        (Object.keys(item).map((key) => (
            TypographyTitle(key, item[key])
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
                        {Boolean(typeof showHistoryDetails[key] === "object") && DetailedChanges(showHistoryDetails[key])}
                        {Boolean(typeof showHistoryDetails[key] !== "object") && TypographyTitle(key, showHistoryDetails[key])}
                    </>
                ))}
            </Grid>
        </Box>
    )
}

export default HistoryDetails;