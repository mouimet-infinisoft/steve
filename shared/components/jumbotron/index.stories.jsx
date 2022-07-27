import { pink } from '@mui/material/colors';
import React from 'react';
import { Jumbotron } from './index.js';

export default {
  title: 'Components/Jumbotron',
  component: Jumbotron
}


const Template = (args) => (
  <div style={{ backgroundColor: 'black', color: '#1EA7FD', width: '100%' }}>
  <Jumbotron {...args} />
  </div>

);

export const Jumbo = Template.bind({});
Jumbo.args = {
  title: "JUMBOTRON",
}




