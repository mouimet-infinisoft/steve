import React from 'react';
import Tags from './inside.js';

export default {
  title: 'Components/Crud-Chip-List/Tags',
  component: Tags,
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
  <Tags {...args} />
);

export const Inside = Template.bind({});
Inside.args = {

}

