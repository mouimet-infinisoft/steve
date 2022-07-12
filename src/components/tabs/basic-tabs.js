import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}


export default function BasicTabs({ tabs }) {
  const [value, setValue] = React.useState(Object.keys(tabs)?.[0]);

  const handleChange = (event, newValue) => {
    React.startTransition(()=>setValue(newValue))
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ marginBottom: '2rem', borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          {Object.entries(tabs)?.map(([k, {component, ...tab}], i) => (
            <Tab key={`${tab?.label}-${i}`} {...tab} value={k} {...a11yProps(i)} />
          ))}
        </Tabs>
      </Box>

      {React.cloneElement(tabs[value]?.component)}
    </Box>
  );
}
