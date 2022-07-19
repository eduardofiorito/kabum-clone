import styled, { css } from 'styled-components';

export const BannerLink = styled.a`
  ${({ theme }) => css`
    display: block;
    width: 100%;
    color: ${theme.colors.white};
    text-decoration: none;
    transition: filter ease-in-out 0.3s;
    z-index: 1;

    &:hover {
      filter: grayscale(0.1);
    }

    &:focus-visible {
      border: 2px solid ${theme.colors.white};
    }

    @media (min-width: ${theme.container2}) {
      max-width: ${theme.container2};
      margin: 0 auto;
    }

    img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
    }
  `}
`;
