import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '.';

import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material/ShoppingCart';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Botão primário',
  variant: 'primary',
  size: 'large',
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: 'Botão secundário',
  variant: 'secondary',
  size: 'large',
};

export const Small = Template.bind({});

Small.args = {
  children: 'Botão pequeno',
  variant: 'primary',
  size: 'small',
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  children: 'Botão',
  variant: 'primary',
  size: 'large',
  icon: <ShoppingCartIcon size={20} />,
};
