import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import BasicTabs from "@/components/tabs/basic";
import { detailsCardtabs } from "./card.tabs";
import { Button, TextField } from "@mui/material";
import { useItem } from "@/core/hooks";
import { useMicroContext, useMicroState } from "@/core/state";
import { useTheme } from "@emotion/react";
import AvatarUpload from "@/components/avatar-upload";
import { config } from "@/config";

export default function DetailsCard() {
  const { store } = useMicroContext();
  const selectedId = useMicroState((s) => s[config.feature.name].selectedId);
  const { item, mutation, onMutation, listMutatorsFactory } = useItem({
    id: selectedId,
    feature: config.feature.name
  });
  const { name, email, avatar, tags } = React.useMemo(() => item ?? {}, [item]);
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: "500px",
        height: 600,
        padding: "1rem",
        position: "relative",
        overflow: "visible"
      }}
    >
      <CardHeader
        avatar={<AvatarUpload src={avatar} save={onMutation("avatar")} />}
        action={
          <TextField
            placeholder="Person"
            variant="standard"
            inputProps={{
              style: {
                padding: "0.5rem 1rem",
                borderRadius: theme.shape.borderRadius,
                textAlign: "center"
              }
            }}
            sx={(theme) => ({
              "MuiInput-root:*": {
                borderBottom: "none"
              },
              "*:before, *:after": {
                borderBottom: "0 !important"
              },
              background: theme.palette.primary.main,
              borderRadius: theme.shape.borderRadius,
              position: "absolute",
              right: "2rem",
              top: "-1rem",
              maxWidth: "100px"
            })}
            value={tags?.[0]}
            onChange={(e) => {
              listMutatorsFactory("tags").update(0, e.target.value);
            }}
          />
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
      />

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

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
          position: "absolute",
          bottom: 0,
          width: "calc(100% - 2rem)"
        }}
      >
        <Button
          variant="outlined"
          color="warning"
          onClick={() => {
            store.emit(`${config.feature.name}.archive.click`);
            mutation("state", "archived");
          }}
        >
          Archive
        </Button>
      </CardActions>
    </Card>
  );
}
