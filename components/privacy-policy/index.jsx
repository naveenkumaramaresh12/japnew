import React from 'react';
import FooterThree from '../../layout/footers/footer-three';
import HeaderThree from '../../layout/headers/header-two';

import PrivacyData from './privacy-data';



const index = () => {
    return (
        <>
        <HeaderThree />
            <main>
                <PrivacyData />
               
              
            </main>
            <FooterThree />
        </>
    );
};

export default index;