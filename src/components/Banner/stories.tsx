import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Banner } from '.';

export default {
  title: 'Components/Banner',
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const Default = Template.bind({});

Default.args = {
  link: '/',
  alt: 'Quinzema atômica, são quinze dias de descontos arrasadores. Até 47% de desconto. Aproveite.',
  srcSet: {
    xs: 'assets/banner360-min.jpg',
    md: 'assets/banner768-min.jpg',
    lg: 'assets/banner1024-min.jpg',
    xxl: 'assets/banner1400-min.jpg',
    full: 'assets/banner1920-min.jpg',
  },
};

Default.parameters = {
  layout: 'fullscreen',
};

export const Other = Template.bind({});

Other.args = {
  link: '/',
  alt: 'Vem pro game. Concorra a um Loot gamer ninja. A cada 300R$ em compras, ganha 1 cupom. Aproveite.',
  srcSet: {
    xs: 'https://themes.kabum.com.br/conteudo/layout/2657/banner_img.jpg',
    md: 'https://themes.kabum.com.br/conteudo/layout/2657/banner_img.jpg',
    lg: 'https://themes.kabum.com.br/conteudo/layout/2657/banner_img.jpg',
    xxl: 'https://themes.kabum.com.br/conteudo/layout/2657/banner_img.jpg',
    full: 'https://themes.kabum.com.br/conteudo/layout/2657/banner_img.jpg',
  },
};
