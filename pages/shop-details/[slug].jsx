import { useEffect, useState } from 'react';
import axios from 'axios';
import Breadcrumb from '../../components/common/breadcrumb';
import SEO from '../../components/seo';
import ShopDetailsArea from '../../components/shop-details/shop-details-area';
import FooterThree from '../../layout/footers/footer-three';
import HeaderThree from '../../layout/headers/header-three';

const ShopDetails = () => {
  const [productList, setProductList] = useState([]);
  const [shop, setShop] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://jap.digisole.in/api/v1/product/main/paginate');
        const productListFromAPI = response.data.data;
        setProductList(productListFromAPI);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (productList.length === 0) return;

    const { pathname } = window.location;
    const slug = pathname.replace('/shop-details/', '');
    const foundShop = productList.find((item) => item.slug === slug);

    if (foundShop) {
      setShop(foundShop);
    }
  }, [productList]);

  return (
    <>
      <SEO pageTitle={'Shop Details'} />
      <HeaderThree />
      <main>
        {shop ? (
          <ShopDetailsArea item={shop} />
        ) : (
          <p>Loading...</p>
        )}
      </main>
      <FooterThree />
    </>
  );
};

export default ShopDetails;
