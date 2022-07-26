import React from 'react';
import  { HeaderAndSubtitle } from './index.js';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/HeaderAndSubtitle',
    component: HeaderAndSubtitle,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        label: {
        },
        tag: {
        },
        value: {
        }
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <HeaderAndSubtitle {...args} />;

export const HeadSub = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HeadSub.args = {

}


