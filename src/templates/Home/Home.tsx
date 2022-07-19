import { Banner, BannerProps } from 'components/Banner';
import { ProductCarousel } from 'components/Carousel/ProductCarousel';
import { Header, HeaderProps } from 'components/Header';
import { HighlightCard, HighlightCardProps } from 'components/HighlightCard';
import Head from 'next/head';
import { ProductCardProps } from 'components/ProductCard';

import * as S from './styles';
import { Timer } from 'components/Icons/Timer';
import { Meta } from 'components/Meta';

export type HomeProps = {
  pageInfo: {
    title: string;
    description: string;
    ogImage: string;
  };
  header: HeaderProps;
  banner: BannerProps;
  mainSection: {
    title: string;
    date: string;
  };
  productsSection: {
    label: string;
    products: ProductCardProps[];
  };
  highlightsSection: {
    label: string;
    highlights: ({ id: string } & HighlightCardProps)[];
  };
};

export function HomeTemplate({
  pageInfo,
  header,
  banner,
  mainSection,
  productsSection,
  highlightsSection,
}: HomeProps) {
  return (
    <>
      <Head>
        <title>{pageInfo.title}</title>

        <Meta
          title={pageInfo.title}
          description={pageInfo.description}
          ogImage={pageInfo.ogImage}
        />
      </Head>

      <Header user={header.user} departments={header.departments} />
      <main>
        <Banner link={banner.link} alt={banner.alt} srcSet={banner.srcSet} />

        <S.Section>
          <S.SectionHeader>
            <S.SectionTitle>{mainSection.title}</S.SectionTitle>
            <S.EndsIn>Termina em:</S.EndsIn>
            <Timer size={22} />
            <S.Date>{mainSection.date}</S.Date>
          </S.SectionHeader>

          <S.CarouselWrapper aria-label={productsSection.label}>
            <ProductCarousel items={productsSection.products} />
          </S.CarouselWrapper>

          <S.HighlightWrapper aria-label={highlightsSection.label}>
            <ul>
              {highlightsSection.highlights.map((highlight) => (
                <li key={highlight.id}>
                  <HighlightCard
                    link={highlight.link}
                    title={highlight.title}
                    description={highlight.description}
                    img={highlight.img}
                  />
                </li>
              ))}
            </ul>
          </S.HighlightWrapper>
        </S.Section>
      </main>
    </>
  );
}
