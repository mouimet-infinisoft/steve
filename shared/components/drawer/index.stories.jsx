import React from 'react';
import {SideDrawer} from './index.js';

export default {
  title: 'Components/SideDrawer',
  component: SideDrawer,
  argTypes: {

  },
};

const Template = (args) => (
  <SideDrawer {...args}/>
);

export const Drawer = Template.bind({});
Drawer.args = {

};


