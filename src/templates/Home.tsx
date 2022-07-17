import { Banner } from 'components/Banner';
import { Header } from 'components/Header';
import { HighlightCard } from 'components/HighlightCard';
import Head from 'next/head';

import * as S from './styles';

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
        <S.Section>
          <S.SectionHeader>
            <S.SectionTitle>Black friday</S.SectionTitle>
          </S.SectionHeader>
          <S.CarouselWrapper>
            <h2 style={{ fontSize: '3rem' }}>Carrossel</h2>
          </S.CarouselWrapper>
          <S.HighlightWrapper>
            <ul aria-label="produtos">
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
