import React from 'react';
import  { IconList } from './index.js';
import { IconListItem } from './index.js';

export default {
  title: 'Components/IconList',
  component: IconList,
};

const IconListTemplate = ({ items }) => (
  <IconList>
    {items.map((item) => (
      <IconListItem {...item}/>
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




