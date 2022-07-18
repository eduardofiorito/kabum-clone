import { Banner } from 'components/Banner';
import { ProductCarousel } from 'components/Carousel/ProductCarousel';
import { Header } from 'components/Header';
import { HighlightCard } from 'components/HighlightCard';
import Head from 'next/head';

import mock from 'components/Carousel/ProductCarousel/mock';

import * as S from './styles';
import { Timer } from 'components/Icons/Timer';

export function HomeTemplate() {
  return (
    <>
      <Head>
        <title>
          KaBuM! | Maior E-commerce de Tecnologia e Games da América Latina
        </title>
        <meta
          name="description"
          content="Encontre as melhores ofertas em Tecnologia e Games aqui no KaBuM!. Confira nossa linha de Hardware, Smartphones, Computadores, Eletrônicos e mais. Acesse!"
        />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <Header isAuthenticated={true} />
      <main>
        <Banner />
        <S.Section aria-label="Seção de produtos na Black friday">
          <S.SectionHeader>
            <S.SectionTitle>Black friday</S.SectionTitle>
            <S.EndsIn>Termina em:</S.EndsIn>
            <Timer size={22} />
            <S.Date>13d 18:15:56</S.Date>
          </S.SectionHeader>

          <S.CarouselWrapper>
            <ProductCarousel items={mock} />
          </S.CarouselWrapper>

          <S.HighlightWrapper>
            <ul aria-label="produtos">
              {/* ITERAR */}
              <li>
                <HighlightCard
                  link="/"
                  title="Venda o seu produto"
                  description="Venda o seu produto usado em nosso marketplace."
                  img={{ src: '/assets/highlight1.jpg', alt: 'Intel core i7' }}
                />
              </li>
              <li>
                <HighlightCard
                  link="/"
                  title="Conheça os produtos prime"
                  description="Fique por dentro de todos os nossoa benefícios."
                  img={{ src: '/assets/highlight2.jpg', alt: 'Ninja do Kabum' }}
                />
              </li>
              <li>
                <HighlightCard
                  link="/"
                  title="Conheça nossos produtos de leilão"
                  description="As melhores oportunidades de compra."
                  img={{
                    src: '/assets/highlight3.jpg',
                    alt: 'Laptop razer com tampa semi-aberta',
                  }}
                />
              </li>
            </ul>
          </S.HighlightWrapper>
        </S.Section>
      </main>
    </>
  );
}
