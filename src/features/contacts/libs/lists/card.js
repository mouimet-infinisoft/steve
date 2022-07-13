import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip, Divider } from "@mui/material";
import PhoneAndroidTwoToneIcon from "@mui/icons-material/PhoneAndroidTwoTone";
import MessageTwoToneIcon from "@mui/icons-material/MessageTwoTone";
import { useMicroContext} from "@/core/state";
import { defaultAvatar } from "@/components/avatar-upload/assets";
import { config } from "../../config";
import { Link, matchPath, useLocation } from "react-router-dom";

export default function Cards({ list = [] }) {
  return list
    ?.filter((i) => i?.state === "active")
    ?.map((item) => <AppCard {...item} key={item?.id} />);
}

function AppCard({ id, name, email, avatar, address, telephones, tags }) {
  const { store } = useMicroContext();
  const path = useLocation();
  const selectedId = matchPath(`/${config.feature.name}/:id`, path.pathname)?.params?.id

  return (
    <Card
      component={Link}
      to={`/${config.feature.name}/${id}`}
      sx={(theme) => ({
        maxWidth: 345,
        display: { xs: "none", sm: "none", md: "block" },
        border:
          selectedId === id ? `2px ${theme.palette.secondary.light} solid` : "0"
      })}
    >
      <CardActionArea
        sx={{
          padding: "1.5rem"
        }}
        onClick={() => {
          store.mutate((s) => ({
            ...s,
            [config.feature.name]: { ...s[config.feature.name], selectedId: id }
          }));
          store.emit(`${config.feature.name}.click`, { id });
        }}
      >
        <CardHeader
          sx={{ height: 100 }}
          avatar={
            <Avatar
              sx={{ width: 64, height: 64 }}
              src={avatar ?? defaultAvatar}
              aria-label="contact"
            />
          }
          title={
            <Typography variant="subtitle1">{name ?? "Full name"}</Typography>
          }
          subheader={
            <Typography variant="body1" color="text.secondary">
              {email ?? "Add en email"}
            </Typography>
          }
        />

        <CardContent sx={{ height: 160, paddingTop: 0 }}>
          <Box sx={{ marginBottom: "1rem", position: "relative" }}>
            {tags?.[0] && (
              <Chip
                color="primary"
                variant="outlined"
                label={tags[0]}
                sx={(theme) => ({
                  position: "absolute",
                  background: theme.palette.primary.light,
                  border: `2px ${theme.palette.primary.dark} solid`,
                  color: theme.palette.primary.contrastText,
                  textTransform: "capitalize",
                  right: 0,
                  top: -15
                })}
              />
            )}
            <Divider variant="fullWidth" />
          </Box>

          <Box sx={{ marginBottom: "0.75rem" }}>
            <Typography variant="subtitle2">Address</Typography>
            <Typography variant="body2" color="text.secondary">
              {address ?? "Add an address"}
            </Typography>
          </Box>

          <div>
            <Typography variant="subtitle2">Telephones</Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column"
              }}
              component="span"
            >
              {telephones?.map(({ key, label, tag }) => (
                <Box key={key} component="span">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="span"
                    mr={1}
                  >
                    {label}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary.light"
                    component="span"
                    mr={1}
                  >
                    {tag}
                  </Typography>
                </Box>
              ))}
            </Box>
          </div>
        </CardContent>

        <CardActions disableSpacing sx={{ height: 60 }}>
          <Button
            sx={{ width: "150px", margin: "0 0.5rem", paddingY: "0.5rem" }}
            startIcon={<PhoneAndroidTwoToneIcon />}
            aria-label="call"
            color="secondary"
            size="small"
            variant="outlined"
          >
            Call
          </Button>
          <Button
            sx={{ width: "150px", margin: "0 0.5rem", paddingY: "0.5rem" }}
            startIcon={<MessageTwoToneIcon />}
            aria-label="message"
            size="small"
            variant="outlined"
          >
            Message
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
