import { generateId } from "@/helpers/generateid.js";
import React from "react";
import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import History from './src/core'
import { historyMocks } from './mock/history'

const argTypes = {
  title: "Microapps/History",
  component: History,
  parameters: {
    docs: {
      description: {
        component: '*** STORIES INCOMPLETE *** <br /> Micro component to display a timeline histoiry with its details.',
      },
    },
  },
  argTypes: {
    events: {
      control: {
        type: "object"
      }
    },
    next: {
      control: {
        type: "function"
      }
    },
    isComplete: {
      control: {
        type: "boolean"
      }
    },
    
  }
};
export default argTypes;

const Template = (args) => <History {...args} />;

/**
 * Use Case #1
 * Multiple events, next() to have more.
 */
export const Case1 = Template.bind({});
Case1.args = historyMocks(5)

/**
 * Use Case #2
 * Multiple events, no more
 */
export const Case2 = Template.bind({});
Case2.args = {
  ...historyMocks(5),
  next: null
}

/**
 * Use Case #3
 * isComplete is true
 */
export const Case3 = Template.bind({});
Case3.args = {
  ...historyMocks(5),
  isComplete: false
}

/**
 * Use Case #4
 * No Event
 */
export const Case4 = Template.bind({});
Case4.args = {
  isComplete:false,
  next: ()=>{}
}

/**
 * Use Case #5
 * No detail
 */
//  export const Case5 = Template.bind({});
//  Case5.args = historyMocks(5)

/**
 * Use Case #6
 * Crashing
 */
export const Case6 = Template.bind({});
Case6.args = null
