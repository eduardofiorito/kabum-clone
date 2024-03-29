import styled, { css, DefaultTheme } from 'styled-components';

import { ButtonProps } from '.';

const sizeModifier = {
  small: (theme: DefaultTheme) => css`
    height: 2.375rem;
    font-size: ${theme.font.sizes.xs};
    font-weight: ${theme.font.weight.bold};
  `,
  large: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.lg};
    font-weight: ${theme.font.weight.semiBold};
  `,
};

const variantModifier = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};

    &:hover {
      background: ${theme.colors.primary600};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};

    &:hover {
      background: ${theme.colors.secondary700};
    }
  `,
};

type ButtonSProps = Pick<ButtonProps, 'size' | 'variant'>;

export const Button = styled.button<ButtonSProps>`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: background ease-in 0.1s;
  width: 100%;

  ${({ theme, size, variant }) => css`
    font-family: ${theme.font.family};
    border-radius: ${theme.spacings.xxs};
    gap: ${theme.spacings.xs};
    padding: ${theme.spacings.xs};

    ${!!size && sizeModifier[size](theme)};
    ${!!size && variantModifier[variant](theme)};

    span {
      display: flex;
      width: ${size === 'small' ? '1rem' : '1.25rem'};
      height: ${size === 'small' ? '1rem' : '1.25rem'};
    }
  `}
`;
