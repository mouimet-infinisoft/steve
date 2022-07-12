import { useItem } from "@/core/hooks";
import { useMicroState } from "@/core/state";
import { generateId } from "@/helpers";
import FiberNewTwoToneIcon from "@mui/icons-material/FiberNewTwoTone";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import { TextField, Box, IconButton } from "@mui/material";
import React, { startTransition } from "react";

const FieldContainer = ({ children, ...props }) => (
  <Box
    {...props}
    sx={{
      display: "flex",
      alignItems: "strench",
      marginBottom: "1rem",
      position: "relative"
    }}
  >
    {children}
  </Box>
);

const iconCss = {
  color: "action.active",
  mr: "1rem",
  marginTop: "1rem",
  marginBottom: "0.5rem"
};
const txtfieldCss = {
  "MuiInput-root:before": {
    borderBottom: "1px solid rgb(255 255 255 / 0%)"
  }
};

export const ExtraFields = () => {
  const selectedId = useMicroState((s) => s.contacts.selectedId);
  const { item, listMutatorsFactory } = useItem({
    id: selectedId,
    feature: "contacts"
  });
  const { __extra__ } = React.useMemo(() => item ?? {}, [item]);

  const [newFieldName, setNewFieldName] = React.useState("");

  const createField = () => {
    if (newFieldName) {
      startTransition(() => {
        listMutatorsFactory("__extra__").add({
          id: generateId(),
          key: newFieldName,
          value: undefined
        });
        setNewFieldName("");
      });
    }
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <FiberNewTwoToneIcon sx={iconCss} />
        <TextField
          fullWidth
          InputLabelProps={{ shrink: true }}
          placeholder="Create new field, type name here"
          label={"New field"}
          variant="standard"
          sx={{
            ...txtfieldCss,
            marginBottom: "2rem",
            borderBottom: "1px solid"
          }}
          value={newFieldName}
          onBlur={createField}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              createField();
            }
          }}
          onChange={(e) => {
            setNewFieldName(e.target.value);
          }}
        />
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {__extra__?.map(({ key, value, id }, index) => (
          <FieldContainer key={id}>
            {value ? (
              <InfoTwoToneIcon sx={iconCss} />
            ) : (
              <HighlightOffTwoToneIcon
                sx={{
                  ...iconCss,
                  color: "red",
                  ":hover": { cursor: "pointer" }
                }}
                onClick={() => listMutatorsFactory("__extra__").remove(index)}
              />
            )}
            <TextField
              key={id}
              fullWidth
              InputLabelProps={{ shrink: true }}
              placeholder="Insert information here"
              label={key}
              variant="standard"
              sx={txtfieldCss}
              value={value}
              onChange={(e) => {
                listMutatorsFactory("__extra__").update(index, {
                  id,
                  key,
                  value: e.target.value
                });
              }}
            />
          </FieldContainer>
        ))}
      </Box>
    </>
  );
};
