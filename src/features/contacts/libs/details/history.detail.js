import { Box, IconButton, useTheme } from "@mui/material";
import HeaderAndSubtitle from "@/components/header-subtitle";
import { generateId } from "@/helpers";
import * as React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Empty from "@/components/no-record-found";

const Address = React.lazy(() =>
    import(
    /* webpackChunkName: 'title-description' */ "@/components/descriptions/title-description"
    )
);

const Telephones = React.lazy(() =>
    import(
    /* webpackChunkName: 'avatar-title-description' */ "@/components/descriptions/list-key-tag"
    )
);

const HistoryDetails = ({ showHistoryDetails, goBack }) => {
    const theme = useTheme();
    const addressTitle = showHistoryDetails?.address ? "Address" : ""
    const telephoneTitle = showHistoryDetails?.telephones ? "Telephones" : ""
    const stateTitle = showHistoryDetails?.state ? "State" : ""
    const showNoRecordFound = Object.values(showHistoryDetails).length;
    const iconPosition = showNoRecordFound ? "flex-start" : "center"

    return (
        <>
            <Box display="flex" height="inherit" justifyContent={iconPosition}>
                <IconButton onClick={() => goBack()} style={{ display: "inline-flex" }} disableRipple>
                    <ArrowBackIcon color="primary" />
                </IconButton>

                {!Boolean(showNoRecordFound) && (
                    <Empty />
                )}
                {Boolean(showNoRecordFound) && (
                    <Box display="flex" flexDirection="column" pl={theme.spacing(1)} gap={theme.spacing(2)}>
                        <Address title={addressTitle} description={showHistoryDetails?.address ?? ""} />
                        <Telephones title={telephoneTitle} styleProps={{ display: "flex", alignItems: "flex-start", flexDirection: "column" }} telephones={showHistoryDetails?.telephones ?? []} />
                        <HeaderAndSubtitle key={generateId()} label={stateTitle} value={showHistoryDetails?.state ?? ""} />
                    </Box>
                )}

            </Box>
        </>
    )
}

export default HistoryDetails;