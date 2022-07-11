import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";

export default function Tags({ list, onAdd, onRemove }) {
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
                icon={
                  <Avatar sx={{ width: 24, height: 24 }}>
                    {list?.[index]?.tag?.[0]}
                  </Avatar>
                }
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
            variant="standard"
            label="Telephones"
            placeholder=" Add phone number"
            // sx={{paddingBottom: '1rem'}}
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

// {
//     key: number;
//     className: string;
//     disabled: boolean;
//     'data-tag-index': number;
//     tabIndex: -1;
//     onDelete: (event: any) => void;
// }

// const list = [
//   {
//     key: 111,
//     disabled: true,
//     onDelete: console.log,
//     label: "514-777-5555",
//     tag: "work"
//   },
//   {
//     key: 222,
//     disabled: false,
//     onDelete: console.log,
//     label: "540-789-2121",
//     tag: "mobile"
//   }
// ];
