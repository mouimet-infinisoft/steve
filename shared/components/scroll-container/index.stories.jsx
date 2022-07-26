import React from 'react';

import  { ScrollContainer } from './index.js';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ScrollContainer',
  component: ScrollContainer,
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
    subtitle: {
      control: {
        type: 'text'
      }
    },
    subtitle2: {
      control: {
        type: 'text'
      }
    }
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ScrollContainer {...args} />;

export const Scroll = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Scroll.args = {
  title: 'Contacts',
  description: 'dsfs',
  subtitle: 'contacts',
  subtitle2: 'dsfsff'
};

