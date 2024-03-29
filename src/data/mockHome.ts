import { BannerProps } from 'components/Banner';
import { HeaderProps } from 'components/Header';
import { HighlightCardProps } from 'components/HighlightCard';
import { ProductCardProps } from 'components/ProductCard';

type Id = {
  id: number;
};

export type DataProps = {
  pageInfo: {
    title: string;
    description: string;
    ogImage: string;
  };
  header: Omit<HeaderProps, 'isAuthenticated'>;
  banner: BannerProps;
  mainSection: {
    title: string;
    date: string;
  };
  productsSection: {
    label: string;
    products: (Id & ProductCardProps)[];
  };
  highlightsSection: {
    label: string;
    highlights: (Id & HighlightCardProps)[];
  };
};

export const mock: DataProps = {
  pageInfo: {
    title: 'KaBuM! | Maior E-commerce de Tecnologia e Games da América Latina',
    description:
      'Encontre as melhores ofertas em Tecnologia e Games aqui no KaBuM!. Confira nossa linha de Hardware, Smartphones, Computadores, Eletrônicos e mais. Acesse!',
    ogImage:
      'https://res.cloudinary.com/dtz06cfki/image/upload/v1658160359/kabum/open-graph-home_j6bhd1.png',
  },
  header: {
    user: {
      name: 'Eduardo Fiorito',
      adress: 'Rua das Hortências, 295 - Boa Vista - Limeira SP',
      avatar: {
        src: 'https://res.cloudinary.com/dtz06cfki/image/upload/v1658162030/kabum/avatar_afqyek.png',
        alt: '',
      },
    },
    departments: [
      { id: 1, name: 'Hardware', link: '#' },
      { id: 2, name: 'Periféricos', link: '#' },
      { id: 3, name: 'Games', link: '#' },
      { id: 4, name: 'Computadores', link: '#' },
      { id: 5, name: 'Tv', link: '#' },
      { id: 6, name: 'Celular & Smartphone', link: '#' },
      { id: 7, name: 'Escritório', link: '#' },
    ],
  },
  banner: {
    link: '#',
    alt: 'Quinzema atômica, são quinze dias de descontos arrasadores, até 47% de desconto. Aproveite.',
    srcSet: {
      xs: 'https://res.cloudinary.com/dtz06cfki/image/upload/v1658149691/kabum/banner360-min_ruifvq.jpg',
      md: 'https://res.cloudinary.com/dtz06cfki/image/upload/v1658149691/kabum/banner768-min_dnw0if.jpg',
      lg: 'https://res.cloudinary.com/dtz06cfki/image/upload/v1658149691/kabum/banner1024-min_gtpopd.jpg',
      xxl: 'https://res.cloudinary.com/dtz06cfki/image/upload/v1658149691/kabum/banner1400-min_frulwk.jpg',
      full: 'https://res.cloudinary.com/dtz06cfki/image/upload/v1658149692/kabum/banner1920-min_gzfdej.jpg',
    },
  },
  mainSection: {
    title: 'Black Friday',
    date: '13d 18:15:56',
  },
  productsSection: {
    label: 'Produtos na Black Friday',
    products: [
      {
        id: 1,
        link: '#',
        evaluation: 4,
        imgSrc:
          'https://images0.kabum.com.br/produtos/fotos/112990/processador-intel-core-i5-10400-cache-12mb-2-9ghz-lga-1200-bx8070110400_1589200167_m.jpg',
        manufacturer: 'Intel',
        name: 'Processador Intel Core i5-10400, Cache 12MB, 2.9GHz (4.3GHz Max Turbo), LGA 1200 - BX8070110400',
        oldPrice: 1529.29,
        price: 889.99,
        freeShipping: false,
        openBox: false,
      },
      {
        id: 2,
        link: '#',
        evaluation: 5,
        imgSrc:
          'https://images1.kabum.com.br/produtos/fotos/102021/caixa-de-som-gamer-husky-storm-rainbow-6w-usb-cx-hst-ra_caixa-de-som-gamer-husky-storm-rainbow-6w-usb-cx-hst-ra_1565178255_m.jpg',
        manufacturer: 'Husky',
        name: 'Caixa de Som Gamer Husky Gaming Storm, Preto, 6W, USB / P2, Rainbow - HGMK000',
        oldPrice: 176.35,
        price: 69.99,
        freeShipping: true,
        openBox: false,
      },
      {
        id: 3,
        link: '#',
        evaluation: 5,
        imgSrc:
          'https://images2.kabum.com.br/produtos/fotos/368232/jogo-god-of-war-ragnar-k-ps5_1657896694_m.jpg',
        manufacturer: 'Sony',
        name: 'Jogo God of War Ragnarök, PS5',
        oldPrice: 349.99,
        price: 290.31,
        freeShipping: true,
        openBox: false,
      },
      {
        id: 4,
        link: '#',
        evaluation: 5,
        imgSrc:
          'https://images7.kabum.com.br/produtos/fotos/85197/85197_index_m.jpg',
        manufacturer: 'Kingston',
        name: 'SSD Kingston A400, 240GB, SATA, Leitura 500MB/s, Gravação 350MB/s - SA400S37/240G',
        oldPrice: 352.82,
        price: 179.99,
        freeShipping: true,
        openBox: false,
      },
      {
        id: 5,
        link: '#',
        evaluation: 5,
        imgSrc:
          'https://images9.kabum.com.br/produtos/fotos/334039/notebook-asus-amd-ryzen-5-3500u-8gb-ram-ssd-256gb-15-6-radeon-vega-8-windows-11-home-cinza-m515da-br1213w_1651244602_m.jpg',
        manufacturer: 'Asus',
        name: 'Notebook Asus AMD Ryzen 5-3500U, 8GB RAM, SSD 256GB, 15,6 - Radeon Vega 8, Windows 11 Home, Cinza - M515DA-BR1213W',
        oldPrice: 4435.29,
        price: 2899.99,
        freeShipping: true,
        openBox: true,
      },
      {
        id: 6,
        link: '#',
        evaluation: 5,
        imgSrc:
          'https://images4.kabum.com.br/produtos/fotos/81454/cadeira-gamer-alpha-gamer-vega-black_1608292452_m.jpg',
        manufacturer: 'Alpha',
        name: 'Cadeira Gamer Alpha Gamer Vega, Preto, Reclinável, com Almofadas, Cilindro de Gás Classe 4',
        oldPrice: 1789.42,
        price: 1089.99,
        freeShipping: false,
        openBox: false,
      },
      {
        id: 7,
        link: '#',
        evaluation: 5,
        imgSrc:
          'https://images0.kabum.com.br/produtos/fotos/334650/monitor-gamer-acer-27-ips-curvo-165-hz-full-hd-1ms-freesync-premium-hdr-400-99-srgb-hdmi-displayport-som-integrado-2x2w-vg271_1651606266_m.jpg',
        manufacturer: 'Acer',
        name: 'Monitor Gamer Acer 27 IPS,165 Hz, Full HD, 1ms, FreeSync Premium, HDR 400, 99%sRGB, HDMI/DisplayPort, Som Integrado 2x2w- VG271',
        oldPrice: 2190.99,
        price: 1599.92,
        freeShipping: true,
        openBox: false,
      },
      {
        id: 8,
        link: '#',
        evaluation: 2,
        imgSrc:
          'https://images9.kabum.com.br/produtos/fotos/180539/placa-de-video-gigabyte-geforce-rtx-3060-gaming-oc-12g-12-gb-gddr6-rev-2-0-ray-tracing-gv-3060gaming_1626461646_m.jpg',
        manufacturer: 'Gigabyte',
        name: 'Placa de Video Gigabyte GeForce RTX 3060 Gaming OC 12G LHR, 12 GB GDDR6, REV 2.0, Ray Tracing - GV-N3060GAMING OC-12GD',
        oldPrice: 3882.24,
        price: 3009.99,
        freeShipping: false,
        openBox: false,
      },
      {
        id: 9,
        link: '#',
        evaluation: 2,
        imgSrc:
          'https://images9.kabum.com.br/produtos/fotos/156929/notebook-gamer-lenovo-gaming-3i-intel-core-i5-10300h-gtx-1650-4gb-8gb-ram-256gb-ssd-linux-16-9-widescreen-chameleon-blue-82cgs00100_1624476897_m.jpg',
        manufacturer: 'Lenovo',
        name: 'Notebook Gamer Lenovo IdeaPad Gaming 3i Intel Core i5-10300H, GeForce GTX 1650, 8GB RAM, SSD 256GB, Tela 15.6 FHD, Linux, Azul - 82CGS00100',
        oldPrice: 6396.38,
        price: 3998.98,
        freeShipping: true,
        openBox: true,
      },
      {
        id: 10,
        link: '#',
        evaluation: 2,
        imgSrc:
          'https://images8.kabum.com.br/produtos/fotos/128678/fone-de-ouvido-bluetooth-intra-auricular-klipsch-t5ii-true-wireless-earbuds-recarregavel-resistente-a-agua-gun-metal-t5-ii-gunmetal_1601385419_m.jpg',
        manufacturer: 'Klipsch',
        name: 'Fone de Ouvido Klipsch T5 II, True Wireless, À Prova D´Água  e Poeira, GunMetal',
        oldPrice: 899.92,
        price: 349.92,
        freeShipping: false,
        openBox: true,
      },
      {
        id: 11,
        link: '#',
        evaluation: 2,
        imgSrc:
          'https://images5.kabum.com.br/produtos/fotos/168475/teclado-mecanico-gamer-redragon-kumara-rgb-switches-redragon-preto-abnt2-lunar-white-k552w-rgb-pt-black-_1624908513_m.jpg',
        manufacturer: 'Redragon',
        name: 'Teclado Mecânico Gamer Redragon Kumara RGB, Switches Redragon Preto, ABNT2, Lunar White - K552W-RGB (PT-BLACK)',
        oldPrice: 388.12,
        price: 299.99,
        freeShipping: false,
        openBox: false,
      },
      {
        id: 12,
        link: '#',
        evaluation: 2,
        imgSrc:
          'https://images7.kabum.com.br/produtos/fotos/155567/memoria-xpg-gammix-d30-8gb-3200mhz-ddr4-cl19-ax4u32008g16a-sb30_1622639642_m.jpg',
        manufacturer: 'XPG',
        name: 'Memória XPG Gammix D30, 8GB, 3200MHz, DDR4, CL19 - AX4U32008G16A-SB30',
        oldPrice: 388.12,
        price: 291.99,
        freeShipping: false,
        openBox: true,
      },
    ],
  },
  highlightsSection: {
    label: 'Destaques',
    highlights: [
      {
        id: 1,
        link: '#',
        title: 'Venda o seu produto',
        description: 'Venda o seu produto usado em nosso marketplace.',
        img: {
          src: 'https://res.cloudinary.com/dtz06cfki/image/upload/v1658210996/kabum/highlight1-min_k98vry.jpg',
          alt: 'Caixa do Intel Core i7 sob fundo alaranjado',
        },
      },
      {
        id: 2,
        link: '#',
        title: 'Conheça os produtos prime',
        description: 'Fique por dentro de todos os nossoa benefícios.',
        img: {
          src: 'https://res.cloudinary.com/dtz06cfki/image/upload/v1658210996/kabum/highlight2-min_odmosg.jpg',
          alt: 'Ninja do Kabum',
        },
      },
      {
        id: 3,
        link: '#',
        title: 'Conheça nossos produtos de leilão',
        description: 'As melhores oportunidades de compra.',
        img: {
          src: 'https://res.cloudinary.com/dtz06cfki/image/upload/v1658210996/kabum/highlights3-min_ourudh.jpg',
          alt: 'Notebook razer com tampa semiaberta',
        },
      },
    ],
  },
};
