import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { a11yProps } from ".";

export const ArrayTabs = ({ tabs, TabSlot=Tab }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    React.startTransition(() => setValue(newValue));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{ marginBottom: "2rem", borderBottom: 1, borderColor: "divider" }}
      >
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          {tabs?.map(({ component, label, ...tab }, i) => (
            <TabSlot
              key={`${tab?.label}-${i}`}
              value={i}
              {...tab}
              {...a11yProps(i)} />
          ))}
        </Tabs>
      </Box>

      {React.isValidElement(tabs?.[value]?.component) && React.cloneElement(tabs[value].component)}
    </Box>
  );
};
