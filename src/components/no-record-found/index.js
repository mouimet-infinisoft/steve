import ErrorIcon from '@mui/icons-material/Error';
import { Typography } from '@mui/material';
import Box from '@mui/system/Box';


const Empty = () => {
    return (
        <Box display="flex" justifyContent="center" height="inherit" alignItems="center">
            <ErrorIcon color="primary" />
            <Typography variant="body1">
                No Record Found!
            </Typography>
        </Box>
    )
}

export default Empty;