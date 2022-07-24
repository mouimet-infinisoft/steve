import React from 'react';

import { MietteDePain } from './index.jsx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/MietteDePain',
  component: MietteDePain,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    itemLabel: {
      control: {
        type: 'text'
      }
    }
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <MietteDePain {...args} />;

export const MDP = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MDP.args = {
   itemLabel: 'STEEVE'
};

