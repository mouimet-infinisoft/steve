import { generateId } from "@/helpers/generateid.js";
import React from "react";
import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import History from './src/core'

const argTypes = {
  title: "Microapps/History",
  component: History,

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
    }
  }
};
export default argTypes;

const Template = (args) => <History {...args} />;

/**
 * Possible use cases
 * 1. Multiple events, next() to have more.
 * 2. Multiple events, no more
 * 3. isComplete
 * 4. No Event
 * 5. No detail
 * 6. Crashing
 */

/**
 * Use Case #1
 * Multiple events, next() to have more.
 */
export const Case1 = Template.bind({});
Case1.args = {
  events: {
    [generateId()]: {
      seperator: <AccessTimeTwoToneIcon />,
      content: (
        <>
          <h1>Title</h1>
          <p>Description</p>
        </>
      ),
      opposite: <h2>{new Date().toLocaleTimeString()}</h2>
    },
    details: {
      header: {},
      description: {}
    }
  },
  next: () => null,
  isComplete: true
};
