import { HomeProps, HomeTemplate } from 'templates/Home/Home';
import { data } from 'data/mockHome';

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

export async function getStaticProps() {
  return {
    props: data,
  };
}
