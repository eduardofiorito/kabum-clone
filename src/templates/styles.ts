import styled, { css } from 'styled-components';

export const Section = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    max-width: ${theme.container2};
    margin: 0 auto 20rem;
  `}
`;

export const SectionHeader = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    padding: ${theme.spacings.xlarge};

    @media (min-width: ${theme.container2}) {
      padding: 1.125rem 4.5rem;
    }
  `}
`;

export const SectionTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    line-height: ${theme.font.sizes.xxl};

    font-weight: ${theme.font.weight.extraBold};
    text-transform: uppercase;
    color: ${theme.colors.white};

    @media (min-width: ${theme.breakpoints.cm1}) {
      font-size: ${theme.font.sizes.xl};
      line-height: ${theme.font.sizes.xxxl};
    }

    @media (min-width: ${theme.breakpoints.xxl}) {
      font-size: ${theme.font.sizes.xl};
      line-height: ${theme.font.sizes.xxxl};
    }
  `}
`;

export const CarouselWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gray100};
    display: flex;
    gap: 1rem;
    overflow: hidden;
    padding: ${theme.spacings.xxxlarge} ${theme.spacings.xlarge} 4.5rem;

    @media (min-width: ${theme.breakpoints.cm1}) {
      padding: ${theme.spacings.xxxxlarge} ${theme.spacings.xlarge} 4.5rem;
    }
  `}
`;

export const HighlightWrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxxlarge} ${theme.spacings.xlarge};

    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    @media (min-width: ${theme.breakpoints.cm1}) {
      padding: ${theme.spacings.xxxxlarge} ${theme.spacings.xlarge} 4.5rem;

      ul {
        flex-direction: row;
        gap: ${theme.spacings.xxxxlarge};
        justify-content: center;
      }
    }
  `}
`;
