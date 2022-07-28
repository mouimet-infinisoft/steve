import React from 'react';
import {Checklist} from './index.js';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Checklist',
  component: Checklist,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

}};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Checklist {...args}></Checklist>;

export const Check = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Check.args = {

};

