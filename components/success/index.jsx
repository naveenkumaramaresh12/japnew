import React from 'react';
import FooterThree from '../../layout/footers/footer-three';
import HeaderThree from '../../layout/headers/header-two';
import Breadcrumb from '../common/breadcrumb';
import Success from './success';

const index = () => {
    return (
        <>
        <HeaderThree />
            <main>
                <Breadcrumb breadHome={'Home'} breadMenu={'success'} />
                <Success />
            </main>
            <FooterThree />
        </>
    );
};

export default index;