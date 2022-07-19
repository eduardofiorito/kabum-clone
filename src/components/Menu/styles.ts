import styled, { css } from 'styled-components';

type ButtonMenuSProps = {
  isAuthenticated: boolean;
};

export const ButtonMenu = styled.button<ButtonMenuSProps>`
  ${({ theme, isAuthenticated }) => css`
    color: ${theme.colors.white};
    border-radius: ${theme.spacings.xxs};

    min-width: ${theme.spacings.xxxxlarge};
    min-height: ${theme.spacings.xxxxlarge};
    opacity: 0.8;
    display: block;
    order: 1;
    flex-shrink: 1;

    &:hover,
    &focus {
      background-color: ${theme.colors.primary600};
    }

    @media (min-width: ${theme.breakpoints.cm1}) {
      order: 0;
      min-width: 2.5rem;
      min-height: 2.5rem;
      opacity: 1;

      ${!isAuthenticated && 'display: none'}
    }
  `}
`;

type MenuProps = {
  itsOpen: boolean;
  isAuthenticated: boolean;
};

export const Menu = styled.aside<MenuProps>`
  ${({ theme, itsOpen, isAuthenticated }) => css`
    background: ${theme.colors.primary};
    opacity: ${itsOpen ? 1 : 0};
    pointer-events: ${itsOpen ? 'all' : 'none'};
    visibility: ${itsOpen ? 'visible' : 'hidden'};
    left: ${itsOpen ? '0' : '-100%'};
    padding: ${theme.spacings.xs} ${theme.spacings.xs} ${theme.spacings.xlarge}
      ${theme.spacings.xs};
    height: ${isAuthenticated ? 'calc(100vh - 109px)' : 'calc(100vh - 60px)'};
  `}
  transition: opacity 0.2s ease-in-out, left 0.2s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  max-width: 100vw;
  width: 100%;
  z-index: 10;
  overscroll-behavior: contain;
  top: 100%;
  position: absolute;

  ${({ theme }) => css`
    /* greater than 350px px*/
    @media (min-width: ${theme.breakpoints.xsm}) {
      padding: ${theme.spacings.xlarge} ${theme.spacings.xlarge}
        ${theme.spacings.xxxxlarge} ${theme.spacings.xlarge};
    }

    /* greater than 1024 px*/
    @media (min-width: ${theme.breakpoints.cm1}) {
      max-width: 20.5rem;
      height: 100vh;
      top: 0px;
      position: fixed;
      transition: opacity 0.2s ease-in-out, left 0.1s ease-out;
    }
  `}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Welcome = styled.strong`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.lg};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.white};

    @media (min-width: ${theme.breakpoints.xsm}) {
      font-size: ${theme.font.sizes.xl};
    }

    line-height: 1.5em;

    button {
      color: inherit;
      text-decoration: none;
      font-family: inherit;

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`;

export const Content = styled.section`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xxxxlarge} 0 ${theme.spacings.xxs};
  `}

  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  margin-bottom: auto;

  ::-webkit-scrollbar {
    width: 0.375rem;
  }

  ::-webkit-scrollbar-track {
    ${({ theme }) => css`
      background: ${theme.colors.primary200};
    `}
  }

  ::-webkit-scrollbar-thumb {
    border-width: 0.1875rem 0.09375rem;
    border-style: solid;
    ${({ theme }) => css`
      border-color: ${theme.colors.primary200};
      background: ${theme.colors.primary100};
    `}
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Diviser = styled.span`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.primary100};
    opacity: 0.35;
  `}

  margin: 0.75rem 0px;
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    gap: ${theme.spacings.xlarge};
    padding: ${theme.spacings.xs};
    padding: ${theme.spacings.xlarge};

    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;

    /* greater than 350px px*/
    @media (max-width: ${theme.breakpoints.xsm}) {
      padding: ${theme.spacings.xs};

      a {
        height: 2rem;
      }
    }
  `}
`;

export const Overlay = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.overlay};
    z-index: 5;
    display: none;

    @media (min-width: ${theme.breakpoints.cm1}) {
      position: fixed;
      display: block;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
  `}
`;

export const CloseOverlayWrapper = styled.button`
  ${({ theme }) => css`
    width: ${theme.spacings.xxxxlarge};
    height: ${theme.spacings.xxxxlarge};
    left: calc(20.5rem + ${theme.spacings.xlarge});
    top: ${theme.spacings.xxxlarge};
    color: ${theme.colors.white};
    background: transparent;
    position: absolute;
    z-index: 10;

    display: none;

    @media (min-width: ${theme.breakpoints.cm1}) {
      display: block;
  `}
`;
