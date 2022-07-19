import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HighlightCard } from '.';

export default {
  title: 'Components/HighlightCard',
  component: HighlightCard,
} as ComponentMeta<typeof HighlightCard>;

const Template: ComponentStory<typeof HighlightCard> = (args) => (
  <HighlightCard {...args} />
);

export const YourProducts = Template.bind({});

YourProducts.args = {
  link: '/',
  title: 'Venda o seu produto',
  description: 'Venda o seu produto usado em nosso marketplace.',
  img: {
    src: '/assets/highlight1.jpg',
    alt: 'Intel core i7',
  },
};

export const Prime = Template.bind({});

Prime.args = {
  link: '/',
  title: 'Conheça os produtos prime',
  description: 'Fique por dentro de todos os nossoa benefícios.',
  img: {
    src: '/assets/highlight2.jpg',
    alt: 'Ninja do Kabum',
  },
};

export const Auction = Template.bind({});

Auction.args = {
  link: '/',
  title: 'Conheça nossos produtos de leilão',
  description: 'As melhores oportunidades de compra.',
  img: {
    src: '/assets/highlight3.jpg',
    alt: 'Laptop razer com tampa semi-aberta',
  },
};
