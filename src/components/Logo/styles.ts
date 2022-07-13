import styled, { css } from 'styled-components';

export const MobileLogo = styled.svg`
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.lg}) {
      display: none;
    }
  `}
`;

export const DesktopLogo = styled.svg`
  display: none;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.lg}) {
      display: inline-block;
    }
  `}
`;
