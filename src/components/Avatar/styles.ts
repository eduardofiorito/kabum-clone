import styled, { css } from 'styled-components';

export const Avatar = styled.img`
  ${({ theme }) => css`
    height: ${theme.font.sizes.xxxxxl};
    width: ${theme.font.sizes.xxxxxl};
    border: 3px solid ${theme.colors.avatar};
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
