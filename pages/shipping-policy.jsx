import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import shippingMain from '../components/shipping-policy';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Shipping Policy'} />
      <shippingMain />
    </Wrapper>
  );
};

export default index;