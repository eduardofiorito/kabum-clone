import * as S from './styles';

type SkipNavigation = {
  text?: string;
};

export function SkipNavigation({
  text = 'Ir para o contéudo principal',
}: SkipNavigation) {
  return <S.SkipNavigation href="#main-content">{text}</S.SkipNavigation>;
}
