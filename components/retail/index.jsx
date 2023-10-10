import React from 'react';
import FooterThree from '../../layout/footers/footer-three';
import HeaderThree from '../../layout/headers/header-two';

import RetailPagetitle from './retail-pagetitle';
import RetailSection from './retail-section';


const index = () => {
    return (
        <>
        <HeaderThree />
            <main>
                <RetailPagetitle />
                <RetailSection />
                {/* <AboutFactSection />
                <AboutTestSlider />
                <TeamSection /> */}
            </main>
            <FooterThree />
        </>
    );
};

export default index;