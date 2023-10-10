import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import RetailMain from '../components/retail';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Retail'} />
      <RetailMain />
    </Wrapper>
  );
};

export default index;