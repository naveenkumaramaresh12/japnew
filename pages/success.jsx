import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import Success from '../components/success';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'success'} />
            <Success />
        </Wrapper>
    );
};

export default index;