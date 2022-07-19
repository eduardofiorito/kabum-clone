import styled, { css } from 'styled-components';

export const Section = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    max-width: ${theme.container2};
    margin: 0 auto 6rem;
  `}
`;

export const SectionHeader = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    padding: ${theme.spacings.xlarge};
    color: ${theme.colors.white};
    display: flex;
    gap: ${theme.spacings.xs};
    align-items: center;
    justify-content: space-between;

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
    color: inherit;

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

export const EndsIn = styled.span`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakpoints.cm1}) {
      font-weight: ${theme.font.weight.bold};
      font-size: ${theme.font.sizes.base};
      color: inherit;
      display: block;
      line-height: 1.75rem;
      text-transform: uppercase;
      margin-left: auto;
    }
  `}
`;

export const Date = styled.span`
  ${({ theme }) => css`
    color: inherit;
    font-size: ${theme.font.sizes.sm};
    line-height: 1rem;
    font-weight: ${theme.font.weight.bold};
    text-transform: uppercase;

    @media (min-width: ${theme.breakpoints.cm1}) {
      font-size: ${theme.font.sizes.xxl};
    }
  `}
`;

export const CarouselWrapper = styled.section`
  ${({ theme }) => css`
    overflow: hidden;
    padding: ${theme.spacings.xxxlarge} ${theme.spacings.xlarge};
    background: ${theme.colors.gray200};

    @media (min-width: ${theme.breakpoints.cm1}) {
      padding: ${theme.spacings.xxxxlarge} 3.25rem 3.25rem;
    }
  `}
`;

export const HighlightWrapper = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxxlarge} ${theme.spacings.xlarge};

    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      align-items: center;
    }

    @media (min-width: ${theme.breakpoints.cm1}) {
      padding: ${theme.spacings.xxxxlarge} 4.5rem 4.5rem;

      ul {
        flex-direction: row;
        gap: ${theme.spacings.xxxxlarge};
        justify-content: center;
      }
    }

    li {
      width: 100%;
      max-width: 31.25rem;

      @media (min-width: ${theme.breakpoints.cm1}) {
        max-width: 24rem;
      }
    }
  `}
`;

export const StoryBook = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.gray200};
    display: flex;
    justify-content: center;
    align-self: center;
    padding: 3rem 3rem;

    @media (min-width: ${theme.breakpoints.cm1}) {
      padding: 4.5rem 4.5rem;
    }
  `}
`;

export const StoryBookLink = styled.a`
  display: block;

  img {
    width: 100%;
    height: auto;
  }
`;
