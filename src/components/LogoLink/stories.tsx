import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LogoLink } from '.';

export default {
  title: 'Components/LogoLink',
  component: LogoLink,
} as ComponentMeta<typeof LogoLink>;

const Template: ComponentStory<typeof LogoLink> = (args) => (
  <LogoLink {...args} />
);

export const Default = Template.bind({});

Default.args = {
  url: '/',
  title: 'Ir para a página inicial do Kabum',
};
