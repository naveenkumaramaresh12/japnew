import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import TermsMain from '../components/terms-conditions';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Terms & Coditions'} />
      <TermsMain />
    </Wrapper>
  );
};

export default index;