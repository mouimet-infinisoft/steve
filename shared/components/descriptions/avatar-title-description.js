import { CardHeader, Avatar, Typography } from "@mui/material";
import { defaultAvatar } from "./assets";

const AvatarTitleDescription = ({avatar, subtitle, description}) => (
  <CardHeader
    sx={{ height: 100 }}
    avatar={
      <Avatar
        sx={{ width: 64, height: 64 }}
        src={avatar ?? defaultAvatar}
        aria-label={subtitle}
      />
    }
    title={<Typography variant="subtitle1">{subtitle}</Typography>}
    subheader={
      <Typography variant="body1" color="text.secondary">
        {description}
      </Typography>
    }
  />
);

export default AvatarTitleDescription;
