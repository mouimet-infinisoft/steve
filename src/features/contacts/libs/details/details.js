import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {  Chip, Divider } from "@mui/material";
import PhoneAndroidTwoToneIcon from "@mui/icons-material/PhoneAndroidTwoTone";
import MessageTwoToneIcon from "@mui/icons-material/MessageTwoTone";
import Drawer from "@mui/material/Drawer";
import { useSubscribe } from "@/core/hooks";
import { useMicroState } from "@/core/state";

export default function ContactDetails() {
  const anchor = "right";

  const [visible, setVisible] = React.useState();
  const selectedId = useMicroState((s) => s.contacts.selectedId);
  const contact = useMicroState((s) => s.contacts.list[selectedId]);
  const { name, email, avatar, address, telephones } = React.useMemo(
    () => contact ?? {},
    [contact]
  );

  useSubscribe({
    event: "contact.click",
    handler: () => {
      React.startTransition(() => {
        setVisible(true);
      });
    }
  });

  return (
    <Drawer
      anchor={anchor}
      open={visible}
      onClose={() => setVisible(false)}
      sx={{
        ".MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.8)"
        }
      }}
      PaperProps={{
        style: {
          backgroundImage: "none",
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center"
        }
      }}
    >
      <Card sx={{ width: '500px', height: 600, padding: "1rem" }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{ width: 96, height: 96 }}
                src={avatar}
                aria-label="contact"
              />
            }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title={<Typography variant="h3">{name}</Typography>}
            subheader={
              email && (
                <Typography variant="h5" color="text.secondary">
                  <a href={`mailto:${email}`}>{email}</a>
                </Typography>
              )
            }
          />
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem"
            }}
          >
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

          <Divider />

          <CardContent>
            <Box sx={{ marginBottom: "0.5rem" }}>
              <Typography variant="subtitle2">Address</Typography>
              <Typography variant="body2" color="text.secondary">
                {address}
              </Typography>
            </Box>

            <div>
              <Typography variant="subtitle2">Telephones</Typography>
              <Box sx={{ display: "flex", gap: 2 }} component="span">
                {telephones?.map(({ id, number, tag }) => (
                  <Box key={id} component="span">
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component="span"
                      mr={0.35}
                    >
                      {number}{" "}
                    </Typography>
                    <Chip label={tag} size="small" />
                  </Box>
                ))}
              </Box>
            </div>
          </CardContent>

          {/* <CardActions disableSpacing>
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
        </CardActions> */}
      </Card>
    </Drawer>
  );
}
