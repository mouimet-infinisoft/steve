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
import { CardActionArea, Chip, Divider } from "@mui/material";
import PhoneAndroidTwoToneIcon from "@mui/icons-material/PhoneAndroidTwoTone";
import MessageTwoToneIcon from "@mui/icons-material/MessageTwoTone";
import Drawer from "@mui/material/Drawer";
import { useSubscribe } from "@/core/hooks";

export default function ContactDetails({
  name,
  email,
  avatar,
  address,
  telephones,
}) {
  const anchor = "right";
  const [visible, setVisible] = React.useState();
  useSubscribe({event:'contact.click', handler: (e,s,p)=>{
    React.startTransition(()=>{setVisible(true)})
  }})


  return (
    <Drawer

      anchor={anchor}
      open={visible}
        onClose={()=>setVisible(false)}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardHeader
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
            title={<Typography variant="subtitle1">{name}</Typography>}
            subheader={
              email && (
                <Typography variant="body1" color="text.secondary">
                  <a href={`mailto:${email}`}>{email}</a>
                </Typography>
              )
            }
          >
            <Divider />

            <CardActions disableSpacing>
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
          </CardHeader>

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
        </CardActionArea>
      </Card>
    </Drawer>
  );
}
