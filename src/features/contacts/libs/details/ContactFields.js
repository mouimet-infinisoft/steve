import { useItem } from "@/core/hooks";
import { useMicroState } from "@/core/state";
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import PhoneAndroidTwoToneIcon from "@mui/icons-material/PhoneAndroidTwoTone";
import { TextField, Box } from "@mui/material";
import React from "react";

export const ContactFields = () => {
  const selectedId = useMicroState((s) => s.contacts.selectedId);
  const {item, InputMutator, listMutatorsFactory, mutation, onMutation, remove} = useItem({id:selectedId, feature: 'contacts'})

  const { address, telephones } = React.useMemo(
    () => item ?? {},
    [item]
  );

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "flex-start", marginBottom: '0.65rem' }}>
        <HomeTwoToneIcon sx={{ color: "action.active", mr: '1rem' }} />
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
          onChange={e=>{mutation('address', e.target.value)}}
        />
      </Box>


      <Box sx={{ display: "flex", alignItems: "flex-start" }}>
        <PhoneAndroidTwoToneIcon sx={{ color: "action.active", mr: '1rem' }} />
        <TextField
          id="input-with-sx"
          fullWidth
          placeholder="(514) 555-7821"
          label="Telephones"
          variant="standard"
          sx={{
            "MuiInput-root:before": {
              borderBottom: "1px solid rgb(255 255 255 / 0%)"
            }
          }}
          value={address}
          onChange={e=>{mutation('address', e.target.value)}}
        />
      </Box>
    </>
  );
};
