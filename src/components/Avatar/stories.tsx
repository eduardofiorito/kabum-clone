import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from '.';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
export const Authenticated = Template.bind({});

Default.args = {
  src: 'assets/avatar-default.svg',
  alt: 'Avatar',
};

Authenticated.args = {
  src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=36&q=80',
  alt: 'Avatar',
};
