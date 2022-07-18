import Carousel from 'components/Carousel';
import { ProductCard, ProductCardProps } from 'components/ProductCard';
import { Settings } from 'react-slick';
import * as S from './styles';

import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos';

const settings: Settings = {
  arrows: true,
  speed: 300,
  slidesToShow: 5.2,
  draggable: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        slidesToShow: 5.1,
        draggable: false,
      },
    },
    {
      breakpoint: 1070,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        draggable: true,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 950,
      settings: {
        arrows: false,
        draggable: true,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 645,
      settings: {
        arrows: false,
        draggable: true,
        slidesToShow: 1.15,
      },
    },
    {
      breakpoint: 440,
      settings: {
        arrows: false,
        draggable: true,
        slidesToShow: 1.125,
      },
    },
    {
      breakpoint: 390,
      settings: {
        arrows: false,
        draggable: true,
        slidesToShow: 1,
      },
    },
  ],
  nextArrow: <ArrowRight />,
  prevArrow: <ArrowLeft />,
};

export type ProductCarouselProps = {
  items: ProductCardProps[];
};

export function ProductCarousel({ items }: ProductCarouselProps) {
  return (
    <S.ProductCarouselWrapper>
      <Carousel settings={settings}>
        {items.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </Carousel>
    </S.ProductCarouselWrapper>
  );
}
