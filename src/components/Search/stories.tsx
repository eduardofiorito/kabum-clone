import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Search } from '.';

export default {
  title: 'Components/Search',
  component: Search,
  onSubmit: console.log('Enviado'),
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Default = Template.bind({});
export const WithoutButton = Template.bind({});

Default.args = {
  placeholder: 'Busque aqui',
  haveButton: true,
  ariaLabel: 'Buscar produtos',
  minCharacters: 2,
  maxCharacters: 200,
};

WithoutButton.args = {
  ariaLabel: 'Buscar produtos',
  placeholder: 'Busque aqui',
  haveButton: false,
};
