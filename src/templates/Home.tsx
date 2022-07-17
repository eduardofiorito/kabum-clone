import { Banner } from 'components/Banner';
import { Header } from 'components/Header';
import { HighlightCard } from 'components/HighlightCard';
import { ProductCard } from 'components/ProductCard';
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
            <ProductCard
              link={'/'}
              evaluation={4}
              imgSrc={
                'https://images0.kabum.com.br/produtos/fotos/112990/processador-intel-core-i5-10400-cache-12mb-2-9ghz-lga-1200-bx8070110400_1589200167_m.jpg'
              }
              manufacturer={'Intel'}
              name={
                'Processador Intel Core i5-10400, Cache 12MB, 2.9GHz (4.3GHz Max Turbo), LGA 1200 - BX8070110400'
              }
              oldPrice={1529.29}
              price={889.99}
              freeShipping={false}
              openBox={false}
            />
            <ProductCard
              link={'/'}
              evaluation={2}
              imgSrc={
                'https://images7.kabum.com.br/produtos/fotos/155567/memoria-xpg-gammix-d30-8gb-3200mhz-ddr4-cl19-ax4u32008g16a-sb30_1622639642_m.jpg'
              }
              manufacturer={'XPG'}
              name={
                'Memória XPG Gammix D30, 8GB, 3200MHz, DDR4, CL19 - AX4U32008G16A-SB30'
              }
              oldPrice={388.12}
              price={291.99}
              freeShipping={false}
              openBox={true}
            />
            <ProductCard
              link={'/'}
              evaluation={3}
              imgSrc={
                'https://images8.kabum.com.br/produtos/fotos/103328/multifuncional-hp-laserjet-pro-laser-colorida-wi-fi-110v-m479fdw-_multifuncional-hp-laserjet-pro-laser-colorida-wi-fi-110v-m479fdw-_1565810263_m.jpg'
              }
              manufacturer={'HP'}
              name={
                'Multifuncional HP LaserJet Pro, Laser, Colorida, Wi-Fi, 110V - M479fdw'
              }
              oldPrice={5555.44}
              price={4499.99}
              freeShipping={true}
              openBox={false}
            />
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
