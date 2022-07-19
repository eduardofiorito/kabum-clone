import styled, { css } from 'styled-components';

export const SkipNavigation = styled.a`
  ${({ theme }) => css`
    left: -999px;
    position: absolute;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: -999;

    &:focus,
    &:active {
      color: ${theme.colors.secondary300};
      background-color: ${theme.colors.black};
      font-weight: ${theme.font.weight.bold};
      left: auto;
      top: auto;
      width: 30%;
      height: auto;
      overflow: auto;
      margin: 10px 35%;
      padding: 0.25rem;
      border-radius: 0.25rem;
      border: 4px solid ${theme.colors.black};
      text-align: center;
      font-size: 1.5rem;
      z-index: 999;
    }
  `}
`;
