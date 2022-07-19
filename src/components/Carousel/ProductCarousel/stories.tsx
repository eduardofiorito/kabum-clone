import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProductCarousel } from '.';
import mock from './mock';

export default {
  title: 'Components/ProductCarousel',
  component: ProductCarousel,
} as ComponentMeta<typeof ProductCarousel>;

const Template: ComponentStory<typeof ProductCarousel> = (args) => (
  <ProductCarousel {...args} />
);

export const Default = Template.bind({});

Default.args = {
  items: mock,
};

Default.parameters = {
  backgrounds: { default: 'light' },
};
