import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SkipNavigation } from '.';

export default {
  title: 'Components/SkipNavigation',
  component: SkipNavigation,
} as ComponentMeta<typeof SkipNavigation>;

const Template: ComponentStory<typeof SkipNavigation> = (args) => (
  <SkipNavigation {...args} />
);

export const Default = Template.bind({});

Default.args = {
  text: 'Só aparece quando recebe o foco (tab)',
};
