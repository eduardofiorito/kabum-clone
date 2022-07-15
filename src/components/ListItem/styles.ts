import styled, { css } from 'styled-components';

export const ListItem = styled.li`
  ${({ theme }) => css`
    margin: ${theme.spacings.xs} 0;
  `}
  display: flex;
  align-items: center;
  scroll-snap-stop: normal;
  scroll-snap-align: end;
`;

export const ListLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    padding: ${theme.spacings.xs} ${theme.spacings.xlarge};
    height: 2rem;

    &:hover,
    &focus {
      background-color: ${theme.colors.primary600};
    }

    @media (min-width: ${theme.breakpoints.lg}) {
      padding: ${theme.spacings.none} ${theme.spacings.xlarge};
    }
  `}

  width: 100%;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;

  span {
    ${({ theme }) => css`
      font-size: ${theme.font.sizes.sm};
      font-weight: ${theme.font.weight.regular};
    `}
    line-height: 1em;
    flex: 1;
  }

  svg {
    width: 1.25rem;
  }
`;
