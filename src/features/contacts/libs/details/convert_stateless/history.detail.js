import { Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import HeaderAndSubtitle from "@/components/header-subtitle";

const NestedHistoryDetailsItems = (key, {key:k, id, ...list}) => {
    const theme = useTheme();
    return (
        <Grid item xs={6}>
            <Typography variant="body1" textTransform='capitalize'>
                {key}
            </Typography>
            {list?.map(({ label, tag, value }) =>
            (
                <HeaderAndSubtitle label={label} tag={tag} value={value} display="flex" gap={theme.spacing(1)} />
            ))}
        </Grid>
    )
}

const HistoryDetails = ({ showHistoryDetails }) => (
    <Grid container spacing={2}>
        <>
            {Object.keys(showHistoryDetails).map((key) => (
                <>
                    {Boolean(typeof showHistoryDetails[key] === "object") && NestedHistoryDetailsItems(key, showHistoryDetails[key])}
                    {Boolean(typeof showHistoryDetails[key] !== "object") && (
                        <Grid item xs={6}>
                            <HeaderAndSubtitle label={key} value={showHistoryDetails[key]} />
                        </Grid>
                    )}
                </>
            ))}
        </>
    </ Grid>
)

export default HistoryDetails;