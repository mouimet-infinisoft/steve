import * as React from "react";
import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function Summary() {
  return (
    <>
      <Typography variant="h5">Summary</Typography>
      <Typography variant="subtitl1" color="text.secondary">
        Make sure the information is correct before completing.
      </Typography>
      <Divider variant="fullWidth" sx={{ py: "1rem", mb: "2rem" }} />

      <Box
        sx={{
          display: "flex",
          gap: 4,
          justifyContent: "space-evenly",
          flexWrap: "wrap"
        }}
      >
       


      </Box>
    </>
  );
}
