import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '.';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Authenticated = Template.bind({});
export const Unauthenticated = Template.bind({});

Authenticated.args = {
  isAuthenticated: true,
  adress: 'Rua das Hortências, 295 - Boa Vista - Limeira SP',
};

Authenticated.parameters = {
  layout: 'fullscreen',
};

Unauthenticated.args = {
  isAuthenticated: false,
};

Unauthenticated.parameters = {
  layout: 'fullscreen',
};
