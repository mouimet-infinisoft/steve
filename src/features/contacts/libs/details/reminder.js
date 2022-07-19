import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box"
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const Reminder = ({ value = new Date(), handleTimeChange, handleDateChange }) => (
        <Box width={1} height={1} display="flex" flexDirection="column" gap={"16px"}>
            <Box display="flex" justifyContent="space-between" gap={"16px"}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        label="Date desktop"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleDateChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                        label="Time"
                        value={value}
                        onChange={handleTimeChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Box>
            <TextField
                fullWidth
                label="Description"
                placeholder=""
                variant="outlined"
                multiline
                minRows={2}
                InputLabelProps={{ shrink: true }}
                sx={(theme) => ({
                    "MuiInput-root:before": {
                        borderBottom: "1px solid rgb(255 255 255 / 0%)"
                    }
                })}
            />
            <TextField
                fullWidth
                label="Notes"
                placeholder=""
                variant="outlined"
                multiline
                minRows={4}
                InputLabelProps={{ shrink: true }}
                sx={(theme) => ({
                    "MuiInput-root:before": {
                        borderBottom: "1px solid rgb(255 255 255 / 0%)"
                    }
                })}
            />
        </Box>

    )

export default Reminder;