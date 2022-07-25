import * as React from "react";
import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CrudChipList from "@/components/crud-chip-list";
import TextField from "@mui/material/TextField";
import { matchPath, useLocation } from "react-router-dom";
import { useItem } from "@/core/hooks";
import { config } from "@/config/index";

export default function Details() {
  const { pathname } = useLocation();
  const route = matchPath(":selectedId/*", pathname);
  const { item, listMutatorsFactory, InputMutator} = useItem({
    id: route?.params?.selectedId,
    feature: config.feature.name
  });

  const CrudList = ({ name, label, placeholder, variant = "inside" }) => (
    <CrudChipList
      inputComponentProps={{
  
        InputLabelProps: { shrink: true },
        variant: "outlined",
        label,
        placeholder
      }}
      variant={variant}
      key={item?.[name]?.length}
      list={item?.[name] ?? []}
      onRemove={listMutatorsFactory([name]).remove}
      onAdd={listMutatorsFactory([name]).add}
    />
  );

  return (
    <>
      <Typography variant="h4">Details</Typography>
      <Typography variant="subtitle1" color="text.secondary">
        Gather as much information possible to help system help you.
      </Typography>
      <Divider variant="fullWidth" sx={{ py: "1rem", mb: "2rem" }} />

      <Box
        sx={{
          display: "flex",
          gap: 4,
          justifyContent: "space-evenly",
          flexWrap: "nowrap",
          padding: "1.5rem"
        }}
      >
        <CrudList
          label="Motifs"
          placeholder="What are the motives for this request?"
          name="motives"
        />
        <TextField
          label="Origin"
          fullWidth
          placeholder="Where is coming the request?"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          sx={(theme) => ({
            flex: 1,
            marginLeft: '1.5rem',
            "MuiInput-root:before": {
              borderBottom: "1px solid rgb(255 255 255 / 0%)"
            }
          })}
          value={item?.["origin"] ?? ''}
          onChange={InputMutator("origin")}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 4,
          justifyContent: "space-evenly",
          flexWrap: "nowrap"
        }}
      >
        <CrudList
          label="Services"
          placeholder="What is/are the services required?"
          name="services"
        />

        <CrudList
          label="Location"
          placeholder="Where is going to happen?"
          name="location"
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
          placeholder="Insert notes here..."
          variant="outlined"
          multiline
          minRows={8}
          value={item?.["notes"] ?? ''}
          onChange={InputMutator("notes")}
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
