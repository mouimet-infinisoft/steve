import React from 'react';
import  { IconList } from './index.js';
import { IconListItem } from './index.js';
import Divider from "@mui/material/Divider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/IconList',
  component: IconList,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const IconListTemplate = ({ items }) => (
  <IconList>
    {items.map((item, index) => (
      <>
      <IconListItem {...item}/>
      {items.count < index && (
      <Divider variant="inset" component="li" key={index + "divider"}/>
    )}
      </>
      ))}
  </IconList>
);

export const Empty = IconListTemplate.bind({});
Empty.args = { items: [] };

export const OneItem = IconListTemplate.bind({});
OneItem.args = {
  items: [
    {
      ...IconListItem.args,
    },
  ],
};




