import React from 'react';
import { Slider } from './index.js';

export default {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    direction: {
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
      defaultValue: {
        summary: 'left',
      },
      description: 'Slider direction',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Add component slider effect',
      },
    },
  },
};

const Template = (args) => (
  <Slider {...args}>
    <div style={{ color: "blue", border: "1px solid blue", backgroundColor: "pink", display: "flex", width: 250, height: 250, justifyContent: "center", alignItems: "center" }}>
      Hello
    </div>
  </Slider>
);

export const Left = Template.bind({});
Left.args = {
  direction: 'left'
};

Left.parameters = {
  docs: {
    description: {
      story: 'Left direction effect',
    },
  },
};

export const Right = Template.bind({});
Right.args = {
  direction: 'right',
};

Right.parameters = {
  docs: {
    description: {
      story: 'Right direction effect',
    },
  },
};
