import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    position: relative;
    color: ${theme.colors.white};
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: ${theme.container};
    padding: 0 ${theme.spacings.lg};
    box-sizing: content-box;

    @media (min-width: ${theme.breakpoints.sm}) {
      padding: 0 ${theme.spacings.xlarge};
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.lg} 0;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    @media (min-width: ${theme.breakpoints.cm1}) {
      box-sizing: content-box;
      align-items: center;
      padding: 0;
      height: 7rem;
      gap: 2rem;
    }
  `}
`;

type SearchWrapperSProps = {
  isAuthenticated: boolean;
};

export const SearchWrapper = styled.div<SearchWrapperSProps>`
  ${({ theme, isAuthenticated }) => css`
    flex: 1;

    @media (min-width: ${theme.breakpoints.cm1}) {
      max-width: 35.125rem;
      margin-top: ${isAuthenticated ? '1.5rem' : '0'};
      margin-left: auto;
    }
  `}
`;

export const User = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakpoints.cm1}) {
      display: flex;
      flex-shrink: 0;
      gap: ${theme.spacings.xs};
      margin-right: auto;
    }
  `}
`;

export const UserContent = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xs};
    line-height: ${theme.font.sizes.lg};
    opacity: 0.8;
  `}
`;

export const Username = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.bold};
  `}
`;

export const LinkPrimary = styled.button`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.bold};
    text-decoration: none;
    color: inherit;
    font-family: inherit;

    &:hover {
      text-decoration: underline;
    }
  `}
`;

export const LinksAuth = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xs};
  `}
`;

export const LinkSecondary = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: inherit;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Icons = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;

    .notifications,
    .favorite {
      display: none;
    }

    .shopping {
      display: block;
    }

    @media (min-width: ${theme.breakpoints.cm1}) {
      .notifications,
      .favorite {
        display: block;
      }
    }
  `}
`;

export const IconLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 2rem;
    height: 2rem;
    padding: 0.25rem;
    opacity: 0.8;
    position: relative;

    &:hover,
    &focus {
      background-color: ${theme.colors.primary600};
      border-radius: ${theme.spacings.xxs};
    }
  `}
`;

export const CartBadge = styled.span`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xs};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -8px;
    right: -4px;
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 50%;
    opacity: 1;
    font-weight: bold;
    animation: opacity ease-in-out 0.3;
  `}
`;

export const NavWrapper = styled.div`
  ${({ theme }) => css`

    display: none;

    @media (min-width: ${theme.breakpoints.cm1}) {
      background: ${theme.colors.secondary};
      display: block;
  `}
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.bold};
    height: 1.75rem;
    display: flex;
    flex: 1;
    align-items: center;
    height: 1.75rem;
  `}
`;

export const NavListItem = styled.li`
  border-right: 1px solid #ff8f4966;
  min-width: 13.125rem;
`;

export const ButtonDropdown = styled.button`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xlarge};
    gap: ${theme.spacings.xlarge};
    font-size: ${theme.font.sizes.sm};
    font-weight: ${theme.font.weight.bold};
    background: ${theme.colors.secondary800};
    display: flex;
    align-items: center;
    font-family: inherit;
    color: inherit;
    height: 1.75rem;
    line-height: 1.125rem;
  `}
`;

export const NavLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.sm};
    font-weight: ${theme.font.weight.bold};
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    height: 1.75rem;
    width: 100%;
    line-height: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      background: ${theme.colors.secondary800};
    }
  `}
`;

type IconWrapperProps = {
  isShown: boolean;
};

export const ArrowDownIconWrapper = styled.span<IconWrapperProps>`
  ${({ isShown }) => css`
    width: 1.5rem;
    svg {
      transform: ${isShown ? 'rotate(180deg)' : 'none'};
    }
  `}
`;

type ShippingSProps = {
  hideOnMobo: boolean;
};

export const Shipping = styled.div<ShippingSProps>`
  ${({ theme, hideOnMobo }) => css`
    padding: ${theme.spacings.lg};
    gap: ${theme.spacings.xs};
    border-top: 1px solid ${theme.colors.primary200};
    font-size: ${theme.font.sizes.xs};
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0.8;
    display: ${hideOnMobo ? 'none' : 'flex'};

    @media (min-width: ${theme.breakpoints.sm}) {
      justify-content: flex-start;
      padding: ${theme.spacings.lg} ${theme.spacings.xlarge};
    }

    @media (min-width: ${theme.breakpoints.cm1}) {
      display: ${hideOnMobo ? 'flex' : 'none'};
      padding: ${theme.spacings.xs} 0 0 0;
      opacity: 1;
      border-top: none;
    }
  `}
`;

export const LocationIconWrapper = styled.span`
  display: flex;
  align-items: center;
  width: 1rem;
`;

export const ArrowRightIconWrapper = styled(LocationIconWrapper)`
  ${({ theme }) => css`
    width: 1.5rem;
    height: 1.5rem;

    @media (min-width: ${theme.breakpoints.cm1}) {
      transform: rotate(90deg);
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    line-height: ${theme.font.sizes.base};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    span {
      font-weight: ${theme.font.weight.semiBold};
    }

    @media (min-width: ${theme.breakpoints.cm1}) {
      line-height: ${theme.font.sizes.lg};

      span {
        font-weight: ${theme.font.weight.bold};
      }
    }
  `}
`;

export const Dropdown = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    border-radius: 0 0 ${theme.spacings.xxs} ${theme.spacings.xxs};
    display: flex;
    justify-content: flex-start;
    position: absolute;
  `}
`;

export const DropdownList = styled.ul`
  width: 15.75rem;
  li {
    padding: 0.25rem 0;

    &:first-child {
      padding-top: 0px;
    }

    &:last-child {
      padding-bottom: 0px;
    }
  }
`;

export const DropdownLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.gray700};
    font-size: ${theme.font.sizes.sm};
    font-weight: ${theme.font.weight.regular};

    text-decoration: none;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      background: ${theme.colors.gray200};
    }

    span {
      width: 1.5rem;
      height: 1.5rem;
    }
  `}
`;
