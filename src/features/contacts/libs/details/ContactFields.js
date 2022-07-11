import CrudChipList from "@/components/crud-chip-list";
import { useItem } from "@/core/hooks";
import { useMicroState } from "@/core/state";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import PhoneAndroidTwoToneIcon from "@mui/icons-material/PhoneAndroidTwoTone";
import { TextField, Box } from "@mui/material";
import React from "react";

const list = [
  {
    key: 111,
    disabled: true,
    onDelete: console.log,
    label: "514-777-5555",
    tag: "work"
  },
  {
    key: 222,
    disabled: false,
    onDelete: console.log,
    label: "540-789-2121",
    tag: "mobile"
  }
];

export const ContactFields = () => {
  const selectedId = useMicroState((s) => s.contacts.selectedId);
  const {
    item,
    InputMutator,
    listMutatorsFactory,
    mutation,
    onMutation,
    remove
  } = useItem({ id: selectedId, feature: "contacts" });

  const { address, telephones } = React.useMemo(() => item ?? {}, [item]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          marginBottom: '1rem'
        }}
      >
        <HomeTwoToneIcon sx={{ color: "action.active", mr: "1rem", marginBottom: "0.5rem"}} />
        <TextField
          id="input-with-sx"
          fullWidth
          placeholder="55 Dog Road, Kentucky, USA 87687"
          label="Address"
          variant="standard"
          sx={{
            "MuiInput-root:before": {
              borderBottom: "1px solid rgb(255 255 255 / 0%)"
            }
          }}
          value={address}
          onChange={(e) => {
            mutation("address", e.target.value);
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          marginBottom: '1rem'
        }}
      >
        <PhoneAndroidTwoToneIcon sx={{ color: "action.active", mr: "1rem",        marginBottom: "0.5rem" }} />
        <CrudChipList
          key={item.telephones.length}
          list={telephones}
          onRemove={listMutatorsFactory("telephones").remove}
          onAdd={listMutatorsFactory("telephones").add}
        />
      </Box>

      {/* <Box sx={{ display: "flex", alignItems: "flex-start" }}>
        <PhoneAndroidTwoToneIcon sx={{ color: "action.active", mr: '1rem' }} />
        <CrudChipList />
      </Box> */}
    </>
  );
};
