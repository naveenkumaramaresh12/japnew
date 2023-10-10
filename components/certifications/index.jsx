import React from 'react';
import FooterThree from '../../layout/footers/footer-three';
import HeaderThree from '../../layout/headers/header-two';

import CertiPagetitle from './certi-pagetitle';
import CertiSection from './certi-section';


const index = () => {
    return (
        <>
        <HeaderThree />
            <main>
                <CertiPagetitle />
                <CertiSection />
                {/* <AboutFactSection />
                <AboutTestSlider />
                <TeamSection /> */}
            </main>
            <FooterThree />
        </>
    );
};

export default index;