import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import ReturnMain from '../components/return-refund';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Return & Refund Policy'} />
      <ReturnMain />
    </Wrapper>
  );
};

export default index;