import { pink } from '@mui/material/colors';
import React from 'react';
import { Jumbotron } from './index.js';

export default {
  title: 'Components/Jumbotron',
  component: Jumbotron
}


const Template = (args) => (
  <Jumbotron {...args}></Jumbotron>

);

export const Jumbo = Template.bind({});
Jumbo.args = {
  title: "JUMBOTRON"
}




