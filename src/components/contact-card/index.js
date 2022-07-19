import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import { CardActionArea, Chip, Divider } from "@mui/material";
import PhoneAndroidTwoToneIcon from "@mui/icons-material/PhoneAndroidTwoTone";
import MessageTwoToneIcon from "@mui/icons-material/MessageTwoTone";

const Address = React.lazy(() =>
  import(
    /* webpackChunkName: 'title-description' */ "@/components/descriptions/title-description"
  )
);

const AvatarTitle = React.lazy(() =>
  import(
    /* webpackChunkName: 'avatar-title-description' */ "@/components/descriptions/avatar-title-description"
  )
);
const Telephones = React.lazy(() =>
  import(
    /* webpackChunkName: 'avatar-title-description' */ "@/components/descriptions/list-key-tag"
  )
);

export default function ContactCard({
  id,
  name,
  email,
  avatar,
  address,
  telephones,
  tags,
  handleClick,
  isSelected,
  onClickMessage
}) {
  return (
    <>
      <Card
        key={id}
        sx={(theme) => ({
          maxWidth: 345,
          display: { xs: "none", sm: "none", md: "block" },
          border: isSelected
            ? `2px ${theme.palette.secondary.light} solid`
            : "0"
        })}
      >
        <CardActionArea
          sx={{
            padding: "1.5rem"
          }}
          onClick={handleClick}
        >
          <AvatarTitle
            avatar={avatar}
            subtitle={name ?? "Contact name"}
            description={email ?? "Add en email"}
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

            <Address
              title={"Address"}
              description={address ?? "Add an address"}
            />
            <Telephones title="Telephones" list={telephones} />
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
              onClick={onClickMessage}
            >
              Message
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </>
  );
}
