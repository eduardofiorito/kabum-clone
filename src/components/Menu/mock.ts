type itemsProps = {
  id: number;
  link: string;
  icon:
    | 'user'
    | 'heart'
    | 'shopping'
    | 'category'
    | 'target'
    | 'lightning'
    | 'tag'
    | 'notifications'
    | 'star'
    | 'credit'
    | 'pix';
  text: string;
};

type dataProps = {
  main: itemsProps[];
  highlights: itemsProps[];
  tags: itemsProps[];
  benefits: itemsProps[];
};

export const data: dataProps = {
  main: [
    {
      id: 1,
      link: '/',
      icon: 'category',
      text: 'Departamentos',
    },
    {
      id: 2,
      link: '/',
      icon: 'user',
      text: 'Minha conta',
    },
    {
      id: 3,
      link: '/',
      icon: 'shopping',
      text: 'Meus pedidos',
    },
    {
      id: 4,
      link: '/',
      icon: 'heart',
      text: 'Favoritos',
    },
    {
      id: 5,
      link: '/',
      icon: 'notifications',
      text: 'Atendimento',
    },
  ],
  highlights: [
    {
      id: 6,
      link: '/',
      icon: 'target',
      text: 'Mais procurados',
    },
    {
      id: 7,
      link: '/',
      icon: 'lightning',
      text: 'Acabaram de chegar',
    },
  ],
  tags: [
    {
      id: 8,
      link: '/',
      icon: 'tag',
      text: 'Oferta do dia',
    },
    {
      id: 9,
      link: '/',
      icon: 'tag',
      text: 'Lançamentos',
    },
    {
      id: 10,
      link: '/',
      icon: 'tag',
      text: 'Destaques',
    },
    {
      id: 11,
      link: '/',
      icon: 'tag',
      text: 'PC Gamer',
    },
    {
      id: 12,
      link: '/',
      icon: 'tag',
      text: 'Eletrônicos',
    },
  ],
  benefits: [
    {
      id: 13,
      link: '/',
      icon: 'star',
      text: 'Seja Prime',
    },
    {
      id: 14,
      link: '/',
      icon: 'credit',
      text: 'Cartão KabuM!',
    },
    {
      id: 15,
      link: '/',
      icon: 'pix',
      text: 'PIX',
    },
  ],
};
