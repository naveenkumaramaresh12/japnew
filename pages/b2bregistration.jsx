import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import B2B from '../components/b2b-registration';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'B2B Registration'} />
      <B2B />
    </Wrapper>
  );
};

export default index;