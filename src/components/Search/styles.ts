import styled, { css } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex: 1;
  position: relative;
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
  `}

  height: 2.25rem;
  z-index: 1;
  position: relative;
  line-height: 1.5em;
  width: 100%;
`;

export const Button = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.gray600};
    width: ${theme.spacings.xxlarge};
    height: ${theme.spacings.xxlarge};
    padding: ${theme.spacings.xxs};
  `}

  box-sizing: content-box;
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  z-index: 2;
`;
