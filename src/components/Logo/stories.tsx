import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo } from '.';

export default {
  title: 'Components/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});

Default.args = {
  textAlternative: 'Kabum',
};
