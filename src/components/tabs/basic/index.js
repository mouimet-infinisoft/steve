import * as React from "react";
import { ArrayTabs } from "./ArrayTabs";
import { ObjectTabs } from "./ObjectTabs";

export function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const variant = (props) => ({
  object: <ObjectTabs {...props} />,
  array: <ArrayTabs {...props} />,
  undefined:<ArrayTabs {...props} />
});

export default function BasicTabs(props) {
  return variant(props)[typeof props?.tabs];
}


