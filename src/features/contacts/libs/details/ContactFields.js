import CrudChipList from "@/components/crud-chip-list";
import { useItem } from "@/core/hooks";
import { useMicroState } from "@/core/state";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import PhoneAndroidTwoToneIcon from "@mui/icons-material/PhoneAndroidTwoTone";
import { TextField, Box } from "@mui/material";
import React from "react";

const FieldContainer = ({ children }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "strench",
      marginBottom: "1rem"
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

export const ContactFields = () => {
  const selectedId = useMicroState((s) => s.contacts.selectedId);
  const { item, listMutatorsFactory, mutation } = useItem({
    id: selectedId,
    feature: "contacts"
  });
  const { address, telephones } = React.useMemo(() => item ?? {}, [item]);

  return (
    <>
      <FieldContainer>
        <HomeTwoToneIcon sx={iconCss} />
        <TextField
          fullWidth
          placeholder="55 Dog Road, Kentucky, USA 87687"
          label="Address"
          InputLabelProps={{ shrink: true }}
          variant="standard"
          sx={txtfieldCss}
          value={address}
          onChange={(e) => {
            mutation("address", e.target.value);
          }}
        />
      </FieldContainer>

      <FieldContainer>
        <PhoneAndroidTwoToneIcon sx={iconCss} />
        <CrudChipList
          labelProps={{
            variant: "standard",
            label: "Telephones",
            placeholder: " Add phone number",
            InputLabelProps: { shrink: true }
          }}
          tagProps={{
            variant: "standard",
            label: "Tag",
            placeholder: " Home",
            InputLabelProps: { shrink: true }
          }}
          variant="below"
          key={item?.telephones?.length}
          list={telephones ?? []}
          onRemove={listMutatorsFactory("telephones").remove}
          onAdd={listMutatorsFactory("telephones").add}
        />
      </FieldContainer>
    </>
  );
};
