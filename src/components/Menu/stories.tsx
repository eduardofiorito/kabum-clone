import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu } from '.';

export default {
  title: 'Components/Menu',
  args: {
    isAuthenticated: true,
  },
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Default = Template.bind({});

Default.args = {
  username: 'Eduardo',
  avatar: {
    src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=36&q=80',
    alt: 'Avatar',
  },
};
