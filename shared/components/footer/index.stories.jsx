import React from 'react';
import {Footer} from './index.js';

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    props: {
        control: {
            type: 'object'
        }
    }
  }

};

const Template = (args) => (
    <div style={{ backgroundColor: 'black', color: '#1EA7FD', width: '350px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Footer {...args}></Footer>
  </div>
);

export const FooterArgs = Template.bind({});
FooterArgs.args = {
   
};


