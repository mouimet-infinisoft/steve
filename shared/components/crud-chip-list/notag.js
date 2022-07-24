import * as React from "react";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { generateId } from "@/helpers";

/**
 * Chips below without tag input controls
 * @param {*} param0
 * labelProps is passed to first Textfield
 * @returns
 */
export default function NoTag({ list, onAdd, onRemove, labelProps }) {
  const [label, setLabel] = React.useState();

  const mutate = React.useCallback(() => {
    if (label) {
      React.startTransition(() => {
        onAdd({
          key: list?.length,
          label
        });
        setLabel("");
      });
    }
  }, [label, list?.length, onAdd]);

  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <div>
        <TextField
          {...labelProps}
          sx={{ mr: "1rem" }}
          value={label ?? ""}
          onChange={(e) => setLabel(e?.target?.value ?? "")}
          onBlur={mutate}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              mutate();
            }
          }}
        />
      </div>
      <div style={{ marginTop: 0 }}>
        {list?.map(({ label }, index) => (
          <Chip
            key={generateId(label + index)}
            sx={{ margin: "0.25rem", border: "none" }}
            label={`${label}`}
            onDelete={() => onRemove(index)}
          />
        ))}
      </div>
    </Stack>
  );
}
