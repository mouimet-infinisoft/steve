import React from 'react';
import {ContactCard} from './index.js';

export default {
  title: 'Components/ContactCard',
  component: ContactCard,
  argTypes: {
    onClick: {
      action: 'clicked'     
    },
    subtitle: {
      description: '`{name ?? "Contact name"}`',
      table: {
        defaultValue: {
          summary: 'subtitle',
          detail: 'Typography'
        }
      },
      control: {
        type: 'text'
      }
    }
   }
  };



const Template = () => (
  <ContactCard  />
);

export const Card = Template.bind({});
Card.args = {
  subtitle: ''
}


