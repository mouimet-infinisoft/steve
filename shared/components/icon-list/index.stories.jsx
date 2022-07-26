import React from 'react';
import  { IconList } from './index.js';
import Avatar from "@mui/material/Avatar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/IconList',
  component: IconList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: { 
      control: {
        type: 'text'
      }
    },
    subtitle: {
      control: {
        type: 'text'
      }
    },
    icon: {
      control: {
        type: 'text'
      }
    },
    key: {
      control: {
        type: 'text'
      }
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args, props) => <IconList {...args} {...props}/>;

export const ListIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ListIcon.args = {
  title: 'Contacts',
  icon: <Avatar alt='avatar'/>,
  subtitle: 'contacts',
  key: '1',
};

