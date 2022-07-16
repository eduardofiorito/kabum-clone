import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu } from '.';

export default {
  title: 'Components/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const isAuthenticated = Template.bind({});

isAuthenticated.args = {
  isAuthenticated: true,
  user: 'Eduardo',
};
