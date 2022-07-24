import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {useNavigate } from "react-router-dom";
import { generateId } from "@/helpers";

export const ArrayTabs = ({ tabs, TabSlot = Tab, ...props }) => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(tabs[0].label);

  const handleChange = (event, newValue) => {
    React.startTransition(() => setValue(newValue));
  };

  return (
    <Box sx={{ width: "100%" }} {...props}>
      <Box
        sx={{ marginBottom: "2rem", borderBottom: 1, borderColor: "divider" }}
      >
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          {tabs?.map(({ component, label, to, ...tab }, i) => (
            <TabSlot
              key={generateId(Math.random())}
              value={label}
              label={label}
              {...tab}
              onClick={() => navigate(to)}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};
