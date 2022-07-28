import React from 'react';
import ListKeyTag from './list-key-tag.js';

export default {
  title: 'Components/Descriptions/ListKeyTag',
  component: ListKeyTag,
  argTypes: {
    // avatar: {
    //   name: 'avatar',
    //   description: 'Simple Avatar',
    //   table: {
    //     type: {
    //       summary: '`{<Avatar />}`'
    //     },
    //     defaultValue: {
    //       summary: `sx={{ width: 64, height: 64 }}
    //       src={avatar ?? defaultAvatar}
    //       aria-label={subtitle}`
    //     }
    //   },
    //   control: {
    //     type: null
    //   }
    // },
    // title: {
    //   name: 'title',
    //   description: 'Avatar Title',
    //   table: {
    //     type: {
    //       summary: '{<Typography>{subtitle}</Typography>}'
    //     },
    //     defaultValue: {
    //       summary: `variant='subtitle1'`
    //     }
    //   },
    //   control: {
    //     type: 'object'
    //   }
    // },
    // subheader: {
    //   name: 'subheader',
    //   description: 'Avatar Title',
    //   table: {
    //     type: {
    //       summary: '{<Typography>{description}</Typography>}'
    //     },
    //     defaultValue: {
    //       summary: `variant='body1' color='text.secondary'`
    //     }
    //   },
    //   control: {
    //     type: 'object'
    //   }
    // }
  }
};



const Template = (args) => (
  <ListKeyTag {...args} />
);

export const List = Template.bind({});
List.args = {

}
