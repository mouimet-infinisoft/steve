import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicTabs from "@/components/tabs/basic-tabs";
import { detailsCardtabs } from "../../mock/details.card.tabs";

export default function DetailsCard({
  name,
  email,
  avatar,
  address,
  telephones,
  id
}) {
  return (
    <Card sx={{ width: "500px", height: 600, padding: "1rem" }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ width: 96, height: 96 }}
            src={avatar}
            aria-label="contact"
          />
        }
        title={<Typography variant="h3">{name}</Typography>}
        subheader={
          email && (
            <Typography variant="h5" color="text.secondary">
              <a href={`mailto:${email}`}>{email}</a>
            </Typography>
          )
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

      <CardContent>
       
    
      </CardContent>
    </Card>
  );
}
