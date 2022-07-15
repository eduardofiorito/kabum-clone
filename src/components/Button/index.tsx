import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonLinkTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  variant: 'primary' | 'secondary';
  size: 'small' | 'large';
  icon?: JSX.Element;
  as?: React.ElementType;
} & ButtonLinkTypes;

export function Button({
  children,
  variant,
  size,
  icon,
  ...props
}: ButtonProps) {
  return (
    <S.Button variant={variant} size={size} {...props}>
      {icon}
      {children}
    </S.Button>
  );
}
