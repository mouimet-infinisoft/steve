import * as React from "react";
import PropTypes from "prop-types";
import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link as RouterLink, useLocation } from "react-router-dom";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";

const breadcrumbNameMap = {
  "/inbox": "Inbox",
  "/inbox/important": "Important",
  "/trash": "Trash",
  "/spam": "Spam",
  "/drafts": "Drafts"
};

function ListItemLink(props) {
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  let icon = null;
  if (open != null) {
    icon = open ? <ExpandLess /> : <ExpandMore />;
  }

  return (
    <li>
      <ListItem button component={RouterLink} to={to} {...other}>
        <ListItemText primary={primary} />
        {icon}
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired
};

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

const MietteDePain = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ padding: "1rem 0rem", ".MuiBreadcrumbs-ol": {alignItems: "flex-start"} }}>
      <LinkRouter
        underline="hover"
        color="inherit"
        to="/"
      >
        <HomeTwoToneIcon sx={{ width: "1.4rem", height: "1.4rem" }} />
      </LinkRouter>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography color="text.primary" key={to}>
            {/* {breadcrumbNameMap[to]} */}
            {value}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {/* {breadcrumbNameMap[to]} */}
            {value}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
};

export default MietteDePain;
