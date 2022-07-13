import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";

/**
 * Chips rendered inside input controls
 * @param {*} param0
 * labelProps is passed to first Textfield
 * tagProps is password to second Textfield
 * @returns
 */
export default function Tags({ list, onAdd, onRemove, inputComponentProps={}, }) {
  const [state, setState] = React.useState();

  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        disableClearable
        id="tags-filled"
        options={list?.map((option) => option)}
        defaultValue={list?.map((t) => t?.label)}
        freeSolo
        ListboxComponent={() => <></>}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => {
            return (
              <Chip
                sx={{ margin: "0.25rem" }}
                variant="outlined"
                label={option}
                onDelete={() => onRemove(index)}
              />
            );
          })
        }
        renderInput={(params) => (
          <TextField
            {...params}

            {...inputComponentProps}
            value={state ?? ""}
            onChange={(e) => setState(e?.target?.value ?? "")}
            onKeyUp={(e) => {
              if (e.key === "Enter" && state) {
                onAdd({
                  key: list?.length,
                  label: state,
                  tag: "mobile"
                });
                setState("");
              }
            }}
          />
        )}
      />
    </Stack>
  );
}
