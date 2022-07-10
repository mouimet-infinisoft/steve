import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}
const LinkTab = ({to='/', ...tab}) =>  <Link to={to}><Tab {...tab} /></Link>


export default function BasicTabs({ tabs }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginBottom: "2rem" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          {tabs?.map((tab, i) => (
            <LinkTab key={`${tab?.label}-${i}`} {...tab} {...a11yProps(i)} />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}
