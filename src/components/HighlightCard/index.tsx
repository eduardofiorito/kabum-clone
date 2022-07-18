import * as S from './styles';

export type HighlightCardProps = {
  link: string;
  title: string;
  description: string;
  img: {
    src: string;
    alt: string;
  };
};

export function HighlightCard({
  link,
  title,
  description,
  img,
}: HighlightCardProps) {
  return (
    <S.Link href={link} aria-label={title}>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Wrapper>
      <S.Image src={img.src} alt={img.alt} loading="lazy" />
    </S.Link>
  );
}
