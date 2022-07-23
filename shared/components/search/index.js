import Box from "@mui/material/Box";
import { InputAdornment, TextField } from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";

export default function Search({ handleOnChange, InputProps="medium" }) {
  return (
    <Box>
      <TextField
        placeholder="Search ..."
        type="search"
        variant="standard"
        sx={(theme) => ({
          padding: "0.25rem 1rem",
          backgroundColor: theme.palette.primary.dark,
          borderRadius: theme.shape.borderRadius,
          outline: `1px ${theme.palette.primary.light} solid`,
          ":hover, :active, :focus-within": {
            outline: `3px ${theme.palette.primary.dark} solid !important`,
            backgroundColor: theme.palette.primary.light
          },
          "*:before, *:after": {
            borderBottom: "0 !important"
          },
        })}
        InputProps={{
          sx: {
            "MuiInput-root:hover:not(.Mui-disabled):before": {
              borderBottom: 0
            }
          },
          startAdornment: (
            <InputAdornment sx={{ mr: "0.5rem" }} position="start">
              <SearchTwoToneIcon
                color="primary"
                sx={{ width: "2rem", height: "2rem" }}
              />
            </InputAdornment>
          )
        }}
        onChange={handleOnChange}
      />
    </Box>
  );
}
