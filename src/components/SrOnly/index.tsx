import * as S from './styles';

type SrOnlyProps = {
  content: string;
};

export function SrOnly({ content }: SrOnlyProps) {
  return <S.Content>{content}</S.Content>;
}
