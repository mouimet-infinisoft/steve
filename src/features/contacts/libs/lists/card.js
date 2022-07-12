import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
// import CardMedia from '@mui/material/CardMedia';
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CardActionArea, Chip } from "@mui/material";
import PhoneAndroidTwoToneIcon from "@mui/icons-material/PhoneAndroidTwoTone";
import MessageTwoToneIcon from "@mui/icons-material/MessageTwoTone";
import { useMicroContext, useMicroState } from "@/core/state";


export default function ContactCards() {
  const listMap = useMicroState((state) => state.contacts.list);
  return Object.values(listMap)?.filter(i=>i?.state === 'active')?.map((contact) => (
    <ContactCard {...contact} key={contact?.id} />
  ));
}

function ContactCard({ id, name, email, avatar, address, telephones }) {
  const { store } = useMicroContext();

  return (
    <Card
      sx={{ maxWidth: 345, height: 325, display: { xs: "none", sm: "none", md: "block" } }}
    >
      <CardActionArea
        onClick={() => {
          store.mutate((s) => ({
            ...s,
            contacts: { ...s.contacts, selectedId: id }
          }));
          store.emit("contact.click", { id });
        }}
      >
        <CardHeader
        sx={{height: 100}}
          avatar={
            <Avatar
              sx={{ width: 64, height: 64 }}
              src={avatar}
              aria-label="contact"
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={<Typography variant="subtitle1">{name ?? "Full name"}</Typography>}
          subheader={
         (
              <Typography variant="body1" color="text.secondary">
                {email ?? "Add en email"}
              </Typography>
            )
          }
        />

        <CardContent         sx={{height: 160}}>
          <Box sx={{ marginBottom: "0.5rem" }}>
            <Typography variant="subtitle2">Address</Typography>
            <Typography variant="body2" color="text.secondary">
              {address ?? "Add an address"}
            </Typography>
          </Box>

          <div>
            <Typography variant="subtitle2">Telephones</Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: 'wrap' }} component="span">
              {telephones?.map(({ key, label, tag }) => (
                <Box key={key} component="span">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="span"
                    mr={0.35}
                  >
                    {label}
                  </Typography>
                  <Chip label={tag} size="small" />
                </Box>
              ))}
            </Box>
          </div>
        </CardContent>

        <CardActions disableSpacing         sx={{height: 60}}>
          <Button
            sx={{ width: "150px", margin: "0 0.5rem" }}
            startIcon={<PhoneAndroidTwoToneIcon />}
            aria-label="call"
            color="secondary"
            size="small"
            variant="outlined"
          >
            Call
          </Button>
          <Button
            sx={{ width: "150px", margin: "0 0.5rem" }}
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