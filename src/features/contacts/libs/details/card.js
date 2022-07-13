import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import BasicTabs from "@/components/tabs/basic-tabs";
import { detailsCardtabs } from "../../mock/details.card.tabs";
import { Button, TextField } from "@mui/material";
import { useItem } from "@/core/hooks";
import { useMicroContext } from "@/core/state";
import { useTheme } from "@emotion/react";
import AvatarUpload from "@/components/avatar-upload";
import { config } from "../../config";
import { matchPath, useLocation, useNavigate } from "react-router-dom";

export default function DetailsCard() {
  const { store } = useMicroContext();
  const path = useLocation();
  const routeMatch = matchPath(`/${config.feature.name}/:id`, path.pathname);
  const { item, mutation, onMutation, listMutatorsFactory } = useItem({
    id: routeMatch?.params?.id,
    feature: config.feature.name
  });
  const navigate = useNavigate();
  const { name, email, avatar, tags } = React.useMemo(() => item ?? {}, [item]);
  const theme = useTheme();

  return (
    item && (
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
              navigate(-1);
            }}
          >
            Archive
          </Button>
        </CardActions>
      </Card>
    )
  );
}
