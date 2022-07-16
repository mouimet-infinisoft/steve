import { Grid, Typography } from "@mui/material";
import { useItem } from "@/core/hooks";
import { config } from '../../config'
import { useMicroState } from "@/core/state";
import { useTheme } from "@emotion/react";
import { removeIdAndKeys } from "./utils";
import HeaderAndSubtitle from "@/components/header-subtitle";

const NestedHistoryChangedValues = (key, nestedList) => {
    const list = removeIdAndKeys(nestedList)
    const theme = useTheme();
    return (
        <>
            <Grid item xs={6}>
                <Typography variant="body1" textTransform='capitalize'>
                    {key}
                </Typography>
                {list.map(({ label, tag, value }) =>
                (
                    <HeaderAndSubtitle label={label} tag={tag} value={value} display="flex" gap={theme.spacing(1)} />
                ))}
            </Grid>
        </>)
}

const HistoryDetails = ({ showHistoryDetails, setShowHistoryDetails }) => {
    const selectedId = useMicroState((s) => s[config.feature.name].selectedId);
    const { item } = useItem({
        id: selectedId,
        feature: config.feature.name
    });

    return (
        <Grid container spacing={2}>
            <>
                {Object.keys(showHistoryDetails).map((key) => (
                    <>
                        {Boolean(typeof showHistoryDetails[key] === "object") && NestedHistoryChangedValues(key, showHistoryDetails[key])}
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
}

export default HistoryDetails;