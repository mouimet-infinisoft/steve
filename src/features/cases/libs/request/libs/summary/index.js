import * as React from "react";
import NotImplemented from "@/components/not-implemented";
import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CrudChipList from "@/components/crud-chip-list";

export default function Summary() {
  return (
    <>
      <Typography variant="h5">Summary</Typography>
      <Typography variant="subtitl1" color="text.secondary">
        jhkjhlkj jh lj
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
            variant: "outlined",
            label: "Motifs",
            placeholder: "Type motive here..."
          }}
        />

        <CrudChipList
          variant="inside"
          list={[]}
          onAdd={() => {}}
          inputComponentProps={{
            variant: "outlined",
            label: "Origin",
            placeholder: "Type request origin here..."
          }}
        />

        <CrudChipList
          variant="inside"
          list={[]}
          onAdd={() => {}}
          inputComponentProps={{
            variant: "outlined",
            label: "Services",
            placeholder: "Choose services..."
          }}
        />

        <CrudChipList
          variant="inside"
          list={[]}
          onAdd={() => {}}
          inputComponentProps={{
            variant: "outlined",
            label: "Location",
            placeholder: "Choose location..."
          }}
        />
      </Box>
    </>
  );
}
