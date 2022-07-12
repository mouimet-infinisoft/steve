import * as React from "react";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

/**
 * Chips below input controls
 * @param {*} param0
 * labelProps is passed to first Textfield
 * tagProps is password to second Textfield
 * @returns
 */
export default function Below({ list, onAdd, onRemove, labelProps, tagProps }) {
  const [label, setLabel] = React.useState();
  const [tag, setTag] = React.useState("");

  const mutate = React.useCallback(() => {
    if (label && tag) {
      React.startTransition(() => {
        onAdd({
          key: list?.length,
          label,
          tag
        });
        setLabel("");
        setTag("");
      });
    }
  }, [label, list?.length, onAdd, tag]);

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

        <TextField
          {...tagProps}
          InputLabelProps={{ shrink: true }}
          value={tag ?? ""}
          onChange={(e) => setTag(e?.target?.value ?? "")}
          onBlur={mutate}
        />
      </div>
      <div style={{ marginTop: 0 }}>
        {list?.map(({ label, tag }, index) => (
          <Chip
            sx={{ margin: "0.25rem", border: "none" }}
            label={`${tag} ${label}`}
            onDelete={() => onRemove(index)}
          />
        ))}
      </div>
    </Stack>
  );
}
