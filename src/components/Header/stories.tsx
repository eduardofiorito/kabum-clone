import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '.';

export default {
  title: 'Components/Header',
  component: Header,
  args: {
    user: {
      name: 'João Manoel',
      adress: 'Rua Joaquim Augusto Santos, 188 - Vila Olímpia - SP',
      avatar: {
        src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&q=80',
        alt: '',
      },
    },
    departments: [
      { id: 1, name: 'Hardware', link: '/hardware' },
      { id: 2, name: 'Periféricos', link: '/perifericos' },
      { id: 3, name: 'Games', link: '/games' },
      { id: 4, name: 'Computadores', link: '/computadores' },
      { id: 5, name: 'Tv', link: '/tv' },
      { id: 6, name: 'Celular & Smartphone', link: '/celular' },
      { id: 7, name: 'Escritório', link: '/escritorio' },
    ],
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  user: {
    name: 'Pedro Henrique',
    adress: 'Rua das Hortências, 295 - Boa Vista - Limeira SP',
    avatar: {
      src: 'assets/avatar-default.svg',
      alt: 'Avatar',
    },
  },
};

Default.parameters = {
  layout: 'fullscreen',
};
