import * as S from './styles';

export type BannerProps = {
  link: string;
  alt: string;
  srcSet: {
    xs: string;
    md: string;
    lg: string;
    xxl: string;
    full: string;
  };
};

export function Banner({ link, alt, srcSet }: BannerProps) {
  return (
    <S.BannerLink href={link} title={alt}>
      <img
        width={1360}
        height={338}
        alt=""
        srcSet={
          srcSet.xs +
          ' 360w,' +
          srcSet.md +
          ' 768w,' +
          srcSet.lg +
          ' 1024w,' +
          srcSet.xxl +
          ' 1400w,' +
          srcSet.full +
          ' 1920w,'
        }
        src={srcSet.full}
        sizes="100vw"
      />
    </S.BannerLink>
  );
}
