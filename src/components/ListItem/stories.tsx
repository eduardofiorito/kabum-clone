import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListItem } from '.';

export default {
  title: 'Components/ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => (
  <ListItem {...args} />
);

export const Default = Template.bind({});

Default.args = {};
