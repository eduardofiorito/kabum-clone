import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Search } from '.';

export default {
  title: 'Components/Search',
  component: Search,
  onSubmit: console.log('Enviado'),
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  ariaLabel: 'Buscar produtos',
  placeholder: 'Busque aqui',
  minCharacters: 2,
  maxCharacters: 200,
};
