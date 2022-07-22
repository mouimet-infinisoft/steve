import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { a11yProps } from ".";

export const ArrayTabs = ({ tabs }) => {
  const [value, setValue] = React.useState(Object.keys(tabs)?.[0]);

  const handleChange = (event, newValue) => {
    React.startTransition(() => setValue(newValue));
  };
  const LinkTab = ({ to = "/", ...tab }) => (
    <Link to={to}>
      <Tab {...tab} />
    </Link>
  );
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{ marginBottom: "2rem", borderBottom: 1, borderColor: "divider" }}
      >
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          {tabs?.map(({ component, label, ...tab }, i) => (
            <LinkTab
              key={`${tab?.label}-${i}`}
              {...tab}
              value={label}
              {...a11yProps(i)} />
          ))}
        </Tabs>
      </Box>

      {React.cloneElement(tabs[value]?.component)}
    </Box>
  );
};
