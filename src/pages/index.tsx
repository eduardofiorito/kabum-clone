import { HomeProps, HomeTemplate } from 'templates/Home/Home';
import { GetStaticProps } from 'next';
import { api } from 'services/api';
import { mock } from 'data/mockHome';
import { ProductCardProps } from 'components/ProductCard';

export default function Home({
  pageInfo,
  header,
  banner,
  mainSection,
  productsSection,
  highlightsSection,
}: HomeProps) {
  return (
    <HomeTemplate
      pageInfo={pageInfo}
      header={header}
      banner={banner}
      mainSection={mainSection}
      productsSection={productsSection}
      highlightsSection={highlightsSection}
    />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let products = [] as ProductCardProps[];

  try {
    const response = await api.get('products');
    products = response.data;
  } catch (error) {
    console.log('error fetch', error);
  }

  const {
    pageInfo,
    header,
    banner,
    mainSection,
    productsSection,
    highlightsSection,
  } = mock;

  return {
    props: {
      pageInfo,
      header,
      banner,
      mainSection,
      productsSection: {
        label: productsSection.label,
        products: products,
      },
      highlightsSection,
    },
    revalidate: 40, //40 seconds
  };
};
