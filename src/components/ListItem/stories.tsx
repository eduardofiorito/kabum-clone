import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListItem } from '.';

export default {
  title: 'Components/ListItem',
  component: ListItem,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => (
  <ListItem {...args} />
);

export const User = Template.bind({});

User.args = {
  link: '/',
  icon: 'user',
  text: 'Meu Perfil',
};

export const Heart = Template.bind({});

Heart.args = {
  link: '/',
  icon: 'heart',
  text: 'Favoritos',
};

export const Pix = Template.bind({});

Pix.args = {
  link: '/',
  icon: 'pix',
  text: 'Pix',
};

export const Tag = Template.bind({});

Tag.args = {
  link: '/',
  icon: 'tag',
  text: 'Playstation 5',
};

export const Credit = Template.bind({});

Credit.args = {
  link: '/',
  icon: 'credit',
  text: 'Pagamento',
};
