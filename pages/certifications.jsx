import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import CertiMain from '../components/certifications';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Certifications'} />
      <CertiMain />
    </Wrapper>
  );
};

export default index;