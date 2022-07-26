import React from 'react';

import  { ContactListItem } from './ContactListItem.js';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ContactListItem',
  component: ContactListItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ContactListItem {...args} />;

export const Contact = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Contact.args = {

};

