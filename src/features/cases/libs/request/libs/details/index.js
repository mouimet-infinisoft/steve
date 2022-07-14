import * as React from "react";
import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CrudChipList from "@/components/crud-chip-list";
import TextField from "@mui/material/TextField";

export default function Details() {

  return (
    <>
      <Typography variant="h4">Details</Typography>
      <Typography variant="subtitl1" color="text.secondary">
        Gather as much information possible to help system help you.
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
        <CrudChipList
          variant="inside"
          list={[]}
          onAdd={() => {}}
          
          inputComponentProps={{
            InputLabelProps: { shrink: true },
            variant: "outlined",
            label: "Motifs",
            placeholder: "What are the motives for this request?"
          }}
        />

        <CrudChipList
          variant="inside"
          list={[]}
          onAdd={() => {}}
          inputComponentProps={{
            InputLabelProps: { shrink: true },
            variant: "outlined",
            label: "Origin",
            placeholder: "Where is coming the request?"
          }}
        />

        <CrudChipList
          variant="inside"
          list={[]}
          onAdd={() => {}}
          inputComponentProps={{
            InputLabelProps: { shrink: true },
            variant: "outlined",
            label: "Services",
            placeholder: "What is/are the services required?"
          }}
        />

        <CrudChipList
          variant="inside"
          list={[]}
          onAdd={() => {}}
          inputComponentProps={{
            InputLabelProps: { shrink: true },
            variant: "outlined",
            label: "Location",
            placeholder: "Where is going to happen?"
          }}
        />
      </Box>

      <Box
        sx={{
          padding: "1.5rem",
          display: "flex",
          justifyContent: "stretch",
          marginTop: "1rem"
        }}
      >
        <TextField
          fullWidth
          label="Notes"
          placeholder=""
          variant="outlined"
          multiline
          minRows={8}
          InputLabelProps={{ shrink: true }}
          sx={(theme) => ({
            "MuiInput-root:before": {
              borderBottom: "1px solid rgb(255 255 255 / 0%)"
            }
          })}
        />
      </Box>
    </>
  );
}
