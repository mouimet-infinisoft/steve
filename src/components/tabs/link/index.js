import * as React from "react";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import BasicTabs from "../basic";

const LinkTab = ({ to = "/", ...tab }) => (
  <Link to={to}>
    <Tab {...tab} />
  </Link>
);

const LinkTabs = ({ tabs, props }) => (
  <BasicTabs tabs={tabs} TabSlot={LinkTab} {...props} />
);

export default LinkTabs;
