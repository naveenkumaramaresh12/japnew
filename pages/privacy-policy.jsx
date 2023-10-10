import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import PolicyMain from '../components/privacy-policy';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Priavcy Policy'} />
      <PolicyMain />
    </Wrapper>
  );
};

export default index;