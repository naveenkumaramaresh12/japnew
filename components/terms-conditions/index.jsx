import React from 'react';
import FooterThree from '../../layout/footers/footer-three';
import HeaderThree from '../../layout/headers/header-two';

import TermsData from './terms-data';



const index = () => {
    return (
        <>
        <HeaderThree />
            <main>
                <TermsData />
               
              
            </main>
            <FooterThree />
        </>
    );
};

export default index;