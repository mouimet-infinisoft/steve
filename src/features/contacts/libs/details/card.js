import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import BasicTabs from "@/components/tabs/basic-tabs";
import { detailsCardtabs } from "../../mock/details.card.tabs";
import { TextField } from "@mui/material";
import { useItem } from "@/core/hooks";
import { useMicroState } from "@/core/state";
import { useTheme } from "@emotion/react";
import AvatarUpload from "@/components/avatar-upload";

export default function DetailsCard() {
  const selectedId = useMicroState((s) => s.contacts.selectedId);
  const { item, mutation, onMutation } = useItem({
    id: selectedId,
    feature: "contacts"
  });
  const { name, email, avatar } = React.useMemo(() => item ?? {}, [item]);
  const theme = useTheme();

  return (
    <Card sx={{ width: "500px", height: 600, padding: "1rem" }}>
      <CardHeader
        avatar={
          <AvatarUpload src={avatar} save={onMutation("avatar")} />
        }
        title={
          <TextField
            fullWidth
            placeholder="Full name"
            variant="standard"
            inputProps={{ style: { fontSize: theme.typography.h3.fontSize } }}
            sx={(theme) => ({
              "MuiInput-root:before": {
                borderBottom: "1px solid rgb(255 255 255 / 0%)"
              }
            })}
            value={name}
            onChange={(e) => {
              mutation("name", e.target.value);
            }}
          />
        }
        subheader={
          <TextField
            fullWidth
            placeholder="Add email name@site.com"
            variant="standard"
            sx={{
              "MuiInput-root:before": {
                borderBottom: "1px solid rgb(255 255 255 / 0%)"
              }
            }}
            value={email}
            onChange={(e) => {
              mutation("email", e.target.value);
            }}
          />
        }
      ></CardHeader>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem"
        }}
      >
        <BasicTabs tabs={detailsCardtabs} />
      </CardActions>

      <CardContent></CardContent>
    </Card>
  );
}
