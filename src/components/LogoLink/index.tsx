import { Logo } from 'components/Logo';
import * as S from './styles';

type LogoLinkProps = {
  url?: string;
  title?: string;
};

export function LogoLink({
  url = '/',
  title = 'Ir para a página inicial do kabum',
}: LogoLinkProps) {
  return (
    <S.Link href={url} title={title}>
      <Logo />
    </S.Link>
  );
}
