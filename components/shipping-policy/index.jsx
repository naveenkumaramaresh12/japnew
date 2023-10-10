import React from 'react';
import FooterThree from '../../layout/footers/footer-three';
import HeaderThree from '../../layout/headers/header-two';

import ShippingData from './shipping-data';



const index = () => {
    return (
        <>
        <HeaderThree />
            <main>
                <ShippingData />
               
              
            </main>
            <FooterThree />
        </>
    );
};

export default index;