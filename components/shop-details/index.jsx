import React from 'react';
import productList from '../../data/products';
import FooterThree from '../../layout/footers/footer-three';

import ShopDetailsArea from './shop-details-area';
import HeaderTwo from '../../layout/headers/header-two';

const item = productList[0]

const index = () => {
    return (
        <>
        <HeaderTwo />
            <main>
                <ShopDetailsArea item={item} />
            </main>
            <FooterThree />
        </>
    );
};

export default index;