import styled, { css } from 'styled-components';

export const ProductCarouselWrapper = styled.section`
  ${({ theme }) => css`
    .slick-disabled {
      display: none !important;
    }

    .slick-track {
      display: flex;
      gap: ${theme.spacings.xs};
      margin-left: -${theme.spacings.xs};
    }

    .slick-slider {
      @media (min-width: ${theme.breakpoints.cm1}) {
        padding: 0 ${theme.spacings.xxlarge};
      }
    }

    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.gray700};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 1.8rem;
      height: 1.8rem;
      padding: 0;
      transform: translate(0, -50%);
    }

    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }

    .slick-next {
      right: -${theme.spacings.xxlarge};
    }
  `}
`;
