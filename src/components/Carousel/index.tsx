import { forwardRef } from 'react';
import Slick, { Settings } from 'react-slick';

import * as S from './styles';

export type CarouselProps = {
  children: React.ReactNode;
  settings: Settings;
};

const Carousel: React.ForwardRefRenderFunction<Slick, CarouselProps> = (
  { children, settings },
  ref,
) => (
  <S.CarouselWrapper>
    <Slick ref={ref} {...settings}>
      {children}
    </Slick>
  </S.CarouselWrapper>
);

export default forwardRef(Carousel);
