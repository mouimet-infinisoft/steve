import React from 'react';

import  { ActionTile } from './index.js';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ActionTile',
  component: ActionTile,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: { 
      control: {
        type: 'text'
      }
    },
    description: {
      control: {
        type: 'text'
      }
    },
    to: {
      control: {
        type: 'text'
      }
    },
    icon: {
      control: {
        type: 'file'
      }
    }
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ActionTile {...args} />;

export const Tile = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Tile.args = {
  title: 'Contacts',
  description: '',
  to: 'contacts',
  icon: ''
};

