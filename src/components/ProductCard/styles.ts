import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 13.625rem;
    background: ${theme.colors.white};
    padding: ${theme.spacings.xs};
    position: relative;
    overflow: hidden;
    box-shadow: rgb(40 41 61 / 8%) 0px 0px 1px,
      rgb(96 97 112 / 16%) 0px 0.5px 2px;

    @media (min-width: ${theme.breakpoints.cm1}) {
      width: 13.375rem;
      height: 25rem;
      padding: 0;
    }
  `}
`;

export const Link = styled.a`
  ${({ theme }) => css`
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: block;
    transition: box-shadow 200ms ease 0s;

    &:hover {
      box-shadow: rgb(40 41 61 / 4%) 0px 4px 8px,
        rgb(96 97 112 / 16%) 0px 8px 16px;
    }

    &:focus-visible {
      outline: none;
      border: 2px solid ${theme.colors.black};
    }
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Header = styled.div`
  ${({ theme }) => css`
    gap: ${theme.spacings.xxs};
    margin-bottom: ${theme.spacings.xs};
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: ${theme.breakpoints.cm1}) {
      flex-direction: row-reverse;
      padding: ${theme.spacings.xs} ${theme.spacings.xs} ${theme.spacings.xxxs}
        ${theme.spacings.xs};
    }
  `}
`;

export const Stars = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    display: flex;
    align-items: center;

    svg {
      width: ${theme.spacings.lg};
    }

    @media (min-width: ${theme.breakpoints.cm1}) {
      margin-left: auto;
    }
  `}
`;

export const Evaluation = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray700};
    font-size: ${theme.font.sizes.xs};
    line-height: ${theme.font.sizes.xs};
    margin-right: auto;

    @media (min-width: ${theme.breakpoints.cm1}) {
      order: -1;
      margin-right: 0;
    }
  `}
`;

type FavoriteProps = {
  favorite: boolean;
};

export const FavoriteButton = styled.button<FavoriteProps>`
  ${({ favorite, theme }) => css`
    width: 1.5rem;
    padding: ${theme.spacings.xxxs};
    z-index: 2;
    color: ${favorite ? theme.colors.secondary : theme.colors.gray800};
    box-sizing: content-box;
    transition: color ease-out 0.2s;

    &:hover {
      color: ${theme.colors.secondary};
    }
  `}
`;

export const Main = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xs};

    @media (min-width: ${theme.breakpoints.cm1}) {
      flex-direction: column;
      gap: 0;
    }
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    height: 5.75rem;
    width: 6.6875rem;
    object-fit: contain;

    @media (min-width: ${theme.breakpoints.cm1}) {
      height: 6.625rem;
      width: 100%;
    }
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    @media (min-width: ${theme.breakpoints.cm1}) {
      padding: ${theme.spacings.xlarge} ${theme.spacings.xlarge} 0
        ${theme.spacings.xlarge};
    }
  `}
`;

export const Manufacturer = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakpoints.cm1}) {
      color: ${theme.colors.gray600};
      font-size: ${theme.font.sizes.xs};
      text-transform: uppercase;
      display: block;
    }
  `}
`;

export const ProductName = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xs};
    line-height: ${theme.font.sizes.base};
    font-weight: ${theme.font.weight.semiBold};
    color: ${theme.colors.gray800};
    height: 3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    @media (min-width: ${theme.breakpoints.cm1}) {
      font-weight: ${theme.font.weight.bold};
      font-size: ${theme.font.sizes.sm};
      line-height: ${theme.font.sizes.lg};
      margin: ${theme.spacings.xs} 0 1.75rem 0;
      height: 3.125rem;
    }
  `}
`;

export const OldPrice = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxs};
    color: ${theme.colors.gray700};
    margin-top: ${theme.spacings.lg};
    line-height: 1em;
    text-decoration: line-through;

    @media (min-width: ${theme.breakpoints.cm1}) {
      font-size: ${theme.font.sizes.xs};
      line-height: 1.125rem;
      margin-top: 0;
    }
  `}
`;

export const Price = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.base};
    color: ${theme.colors.secondary};
    line-height: 1.25rem;
    font-weight: 700;

    @media (min-width: ${theme.breakpoints.cm1}) {
      font-size: ${theme.font.sizes.xxl};
      line-height: 2.125rem;
    }
  `}
`;

export const Pix = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxs};
    color: ${theme.colors.gray700};
    line-height: 1em;

    @media (min-width: ${theme.breakpoints.cm1}) {
      font-size: ${theme.font.sizes.xs};
      line-height: 1.125rem;
      text-transform: uppercase;
    }
  `}
`;

export const Tags = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakpoints.cm1}) {
      display: flex;
      gap: ${theme.spacings.xs};
      font-size: ${theme.font.sizes.xs};
      color: ${theme.colors.gray700};
      line-height: 1.125rem;
      height: 1.125rem;
    }
  `}
`;

export const Tag = styled.span`
  ${({ theme }) => css`
    gap: ${theme.spacings.xxs};
    display: flex;
    text-transform: uppercase;
    align-items: center;

    svg {
      color: ${theme.colors.primary};
    }
  `}
`;

type CartProps = {
  cart: boolean;
};

export const Footer = styled.footer<CartProps>`
  margin-top: auto;
  z-index: 2;

  ${({ theme, cart }) => css`
    button {
      background: ${cart ? theme.colors.secondary : theme.colors.white};
      color: ${cart ? theme.colors.white : theme.colors.secondary};
      border: 2px solid ${theme.colors.secondary};

      &:hover {
        background: ${theme.colors.secondary800};
        border: 2px solid ${theme.colors.secondary800};
        color: ${theme.colors.white};
      }

      &:focus-visible {
        outline: none;
        border: 2px solid ${theme.colors.black};
      }
    }
  `}
`;
