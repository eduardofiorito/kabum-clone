import * as S from './styles';

type AvatarProps = {
  src?: string;
  alt?: string;
};

export function Avatar({
  src = 'assets/avatar-default.svg',
  alt = 'Avatar',
}: AvatarProps) {
  return (
    <>
      <S.Avatar src={src} alt={alt} />
    </>
  );
}
