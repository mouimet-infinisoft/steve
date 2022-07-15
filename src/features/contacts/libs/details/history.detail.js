import { ButtonBase, Grid, IconButton, Typography, Box } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const HistoryDetails = ({ showHistoryDetails, setShowHistoryDetails }) => {
    return (
    <Box display="flex">
        <ButtonBase onClick={() => setShowHistoryDetails(false)}>
            <IconButton disableRipple>
                <ArrowBackIcon color="primary" />
            </IconButton>
        </ButtonBase>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Typography variant="body1">
                    Address
                </Typography>
                <Typography variant="body1">
                    4572 14th Avenue
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body1">
                    Address
                </Typography>
                <Typography variant="body1">
                    4572 14th Avenue
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body1">
                    Address
                </Typography>
                <Typography variant="body1">
                    4572 14th Avenue
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body1">
                    Address
                </Typography>
                <Typography variant="body1">
                    4572 14th Avenue
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body1">
                    Address
                </Typography>
                <Typography variant="body1">
                    4572 14th Avenue
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body1">
                    Address
                </Typography>
                <Typography variant="body1">
                    4572 14th Avenue
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body1">
                    Address
                </Typography>
                <Typography variant="body1">
                    4572 14th Avenue
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body1">
                    Address
                </Typography>
                <Typography variant="body1">
                    4572 14th Avenue
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body1">
                    Address
                </Typography>
                <Typography variant="body1">
                    4572 14th Avenue
                </Typography>
            </Grid>
        </Grid>
    </Box>
)
}

export default HistoryDetails;