import React from 'react';
import {AvatarUpload} from './index.js';

export default {
  title: 'Components/AvatarUpload',
  component: AvatarUpload,
  argTypes: {
      src: {
      control: {
        type: null,
      },
    },
    save: {

    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Nice Avatar Upload',
      },
    },
  },
};

const Template = (args) => (
  <AvatarUpload {...args}/>
);

export const StringArgs = Template.bind({});
StringArgs.args = {

};


