import * as React from "react";
import { Divider, Fab, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import SearchInput from "@/components/search";

export default function Individuals({ handleOnChange }) {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5">Individuals</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Create or add persons related to this request.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <SearchInput
            InputProps={{ size: "medium" }}
            handleOnChange={handleOnChange}
          />
          <Fab
            variant="extended"
            color="primary"
            size="medium"
            //onClick={onCreate(store)}
            sx={{
              display: { xs: "none", md: "inherit" }
            }}
          >
            <AddIcon sx={{ mr: 1 }} />
            Create
          </Fab>
        </Box>
      </Box>
      <Divider variant="fullWidth" sx={{ py: "1rem", mb: "2rem" }} />

      <Box
        sx={{
          display: "flex",
          gap: 4,
          justifyContent: "space-evenly",
          flexWrap: "wrap"
        }}
      >
        duckette
      </Box>
    </>
  );
}
