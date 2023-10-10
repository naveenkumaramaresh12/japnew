import React from 'react';
import FooterThree from '../../layout/footers/footer-three';
import HeaderThree from '../../layout/headers/header-two';
import Breadcrumb from '../common/breadcrumb';
import B2B from './b2bregistration-section';

function index() {
    return (
        <>
            <HeaderThree />
            <main>
                <Breadcrumb breadHome={'Home'} breadMenu={'B2B Registration'} />
                <B2B />
            </main>
            <FooterThree />
        </>
    );
}

export default index;