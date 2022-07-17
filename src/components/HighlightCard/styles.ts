import styled, { css } from 'styled-components';

export const Link = styled.a`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.gray700};
    display: flex;
    line-height: 1;
    flex-direction: column;
    text-decoration: none;
    overflow: hidden;
    max-width: 22rem;
    transition: filter ease-in 0.2s;

    &:hover {
      box-shadow: rgb(40 41 61 / 4%) 0px 4px 8px,
        rgb(96 97 112 / 16%) 0px 8px 16px;
      filter: grayscale(0.1);
    }

    @media (min-width: ${theme.breakpoints.cm1}) {
      max-width: 24rem;
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xs};
    border-top: 0.663366px solid ${theme.colors.gray200};
    border-left: 0.663366px solid ${theme.colors.gray200};
    border-right: 0.663366px solid ${theme.colors.gray200};

    @media (min-width: ${theme.breakpoints.cm1}) {
      padding: ${theme.spacings.xlarge};
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.xs};
    line-height: 1rem;
    color: inherit;
    text-transform: uppercase;

    @media (min-width: ${theme.breakpoints.cm1}) {
      font-size: ${theme.font.sizes.sm};
      line-height: 1.125rem;
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxs};
    line-height: ${theme.spacings.xlarge};
    color: inherit;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    max-height: 9rem;
    object-fit: cover;
    object-position: center;

    @media (min-width: ${theme.breakpoints.cm1}) {
      max-height: 10.4375rem;
    }
  `}
`;
