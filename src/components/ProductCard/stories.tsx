import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProductCard } from '.';

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

export const Processor = Template.bind({});

Processor.args = {
  link: '/',
  evaluation: 4,
  imgSrc:
    'https://images0.kabum.com.br/produtos/fotos/112990/processador-intel-core-i5-10400-cache-12mb-2-9ghz-lga-1200-bx8070110400_1589200167_m.jpg',
  manufacturer: 'Intel',
  name: 'Processador Intel Core i5-10400, Cache 12MB, 2.9GHz (4.3GHz Max Turbo), LGA 1200 - BX8070110400',
  oldPrice: 1529.29,
  price: 889.99,
  freeShipping: false,
  openBox: false,
};

export const Memory = Template.bind({});

Memory.args = {
  link: '/',
  evaluation: 2,
  imgSrc:
    'https://images7.kabum.com.br/produtos/fotos/155567/memoria-xpg-gammix-d30-8gb-3200mhz-ddr4-cl19-ax4u32008g16a-sb30_1622639642_m.jpg',
  manufacturer: 'XPG',
  name: 'Memória XPG Gammix D30, 8GB, 3200MHz, DDR4, CL19 - AX4U32008G16A-SB30',
  oldPrice: 388.12,
  price: 291.99,
  freeShipping: false,
  openBox: true,
};

export const Printer = Template.bind({});

Printer.args = {
  link: '/',
  evaluation: 5,
  imgSrc:
    'https://images8.kabum.com.br/produtos/fotos/103328/multifuncional-hp-laserjet-pro-laser-colorida-wi-fi-110v-m479fdw-_multifuncional-hp-laserjet-pro-laser-colorida-wi-fi-110v-m479fdw-_1565810263_m.jpg',
  manufacturer: 'HP',
  name: 'Multifuncional HP LaserJet Pro, Laser, Colorida, Wi-Fi, 110V - M479fdw ',
  oldPrice: 5555.44,
  price: 4499.99,
  freeShipping: true,
  openBox: false,
};
