import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    position: relative;

    @media (min-width: ${theme.breakpoints.cm1}) {
      margin-right: 41px;
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    padding: ${theme.spacings.lg} ${theme.spacings.xxxxlarge}
      ${theme.spacings.lg} ${theme.spacings.xlarge};
    background: ${theme.colors.white};
    color: ${theme.colors.gray700};
    border-radius: ${theme.spacings.xxs};
    font-family: ${theme.font.family};

    height: 2.25rem;
    z-index: 1;
    position: relative;
    line-height: 1.5em;
    width: 100%;

    @media (min-width: ${theme.breakpoints.cm1}) {
      border-radius: 0 9rem 9rem 0;
    }

    &:focus {
      outline: 1px solid ${theme.colors.secondary};
    }

    &:focus + ul {
      display: none;
    }
  `}
`;

export const List = styled.ul`
  display: none;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.sm}) {
      display: flex;
      position: absolute;
      right: 2rem;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
      gap: 11px;
    }
  `}
`;
export const ListItem = styled.li``;

export const ListLink = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxs};
    background: ${theme.colors.gray300};
    color: ${theme.colors.gray700};
    text-decoration: none;
    text-transform: uppercase;
    padding: 2px 4px;
    transition: background ease-in 0.2s;

    &:hover {
      background: ${theme.colors.gray200};
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.gray600};
    width: ${theme.spacings.xxlarge};
    height: ${theme.spacings.xxlarge};
    padding: ${theme.spacings.xxs};

    box-sizing: content-box;
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
    z-index: 2;
    display: block;

    svg {
      &:first-child {
        display: block;
      }

      &:last-child {
        display: none;
      }
    }

    @media (min-width: ${theme.breakpoints.cm1}) {
      width: 67px;
      height: 44px;
      right: -43px;
      padding: 0;

      svg {
        &:first-child {
          display: none;
        }

        &:last-child {
          display: block;
        }
      }
    }
  `}
`;
