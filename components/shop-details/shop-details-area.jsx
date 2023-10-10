import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Breadcrumb from '../common/breadcrumb';
import TrendingProductSlider from '../elements/product/trending-product-slider';
import ShopDetailsReview from './shop-details-review';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Controller, Navigation } from "swiper";
import 'swiper/css';
import { useDispatch, useSelector } from 'react-redux';
import { cart_product, decrease_quantity } from '../../redux/features/cart-slice';
import { add_to_wishlist } from '../../redux/features/wishlist-slice';
import axios from 'axios';
import { useRouter } from 'next/router';

const ShopDetailsArea = ({ item }) => {
  const { product } = useSelector(state => state.products.product);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [quantity, setQuantity] = useState(item?.quantity || 0);
  const dispatch = useDispatch();
  const { cartProducts } = useSelector(state => state.cart.cartProducts);
  const [productList, setProductList] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://jap.digisole.in/api/v1/product/main/paginate');
        setProductList(response.data);
        console.log("dsf", response.data)
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  //   const { slug } = item.slug; // Extracting the slug from the item prop

  const router = useRouter();
  useEffect(() => {
    const fetchProductDetails = async (slug) => {
      try {
        const response = await axios.get(`https://jap.digisole.in/api/v1/product/main/detail/${slug}`);
        setSingleProduct(response.data.product);
        console.log("single", response.data.product);
      } catch (error) {
        console.error('Failed to fetch product details:', error);
      }
    };
  
    // Extract the slug from the query parameter in the URL
    const { query } = router;
    const productSlug = query.slug; // Make sure 'slug' matches the query parameter name in the URL
  
    if (productSlug) {
      fetchProductDetails(productSlug);
    }
  }, [router.query.slug]);
  
  

  const handleShareFacebook = () => {
    const shareUrl = window.location.href;
    const message = `Check out this product: ${singleProduct.name} - ${shareUrl}`;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(message)}`);
  };

  const handleShareLinkedIn = () => {
    const shareUrl = window.location.href;
    const message = `Check out this product: ${singleProduct.name} - ${shareUrl}`;
    window.open(`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}&summary=${encodeURIComponent(message)}`);
  };

  const handleShareInstagram = () => {
    const shareUrl = window.location.href;
    const message = `Check out this product: ${singleProduct.name} - ${shareUrl}`;
    alert("To share on Instagram, open the app and paste the following text in a new post:\n\n" + message);
  };

  const handleShareWhatsApp = () => {
    const shareUrl = window.location.href;
    const message = `Check out this product: ${singleProduct.name} - ${shareUrl}`;

    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      window.open(`whatsapp://send?text=${encodeURIComponent(message)}`);
    } else {
      window.open(`https://web.whatsapp.com/send?text=${encodeURIComponent(message)}`);
    }
  };

  return (
    <>
      <main>
        <Breadcrumb breadHome={'Home'} breadMenu={'Shop Details'} />
        <div className="bd__shop-details-area pt-115 pb-75">
          <div className="container small-container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="bd__shop-details-inner mb-55">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="product-details__thumb-inner p-relative">
                        <div className="bd__shop-details-img-gallery mb-30">
                          <div className="product-details-active swiper-container">
                            <div className="swiper-wrappers">
                              {singleProduct && (
                                <Swiper
                                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                  loop={true}
                                  spaceBetween={0}
                                  slidesPerView={1}
                                  freeMode={false}
                                  watchSlidesProgress={true}
                                  modules={[Navigation, Controller, FreeMode, Thumbs]}
                                  navigation={{
                                    clickable: true,
                                    nextEl: '.product-details__button-next',
                                    prevEl: '.product-details__button-prev',
                                  }}
                                >
                                  <SwiperSlide>
                                    <div className="swiper-slides">
                                      <div className="bd-product__details-large-img w-img">
                                        <img src={singleProduct.featured_image_link} alt="product-details-img" />
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                </Swiper>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="bd-product__details-small-img">
                          <div className="swiper-container product-details-nav">
                            <div className="swiper-wrappers">
                              <Swiper
                                loop={true}
                                spaceBetween={0}
                                slidesPerView={5}
                                onSwiper={setThumbsSwiper}
                                modules={[Controller, FreeMode, Thumbs]}
                                watchSlidesProgress={false}
                              >
                                {singleProduct && (
                                  <SwiperSlide>
                                    <div className="swiper-slides m-img">
                                      <div className="product-small__img">
                                        {/* Access the image directly from 'singleProduct' */}
                                        <img src={singleProduct.featured_image_link} alt="product-thumb" />
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                )}
                              </Swiper>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="modal-product-info modal-product__details-content">
                        <h3>{singleProduct.name}</h3>
                        <div className="product-price">
                          <span>Rs.{singleProduct.discounted_price}</span>
                          <del>Rs.{singleProduct.price}</del>
                        </div>
                          <span>Weight{singleProduct.weight}</span>

                        <div className="modal-product-meta bd__product-details-menu-1">
                          {/* <ul>
                            <li>
                              <strong>Products:</strong>
                              <span>
                                <Link href="/shop"><a>Vegetable</a></Link>
                                <Link href="/shop"><a>Fruits</a></Link>
                                <Link href="/shop"><a>Dairy Milk</a></Link>
                                <Link href="/shop"><a>Bakery</a></Link>
                              </span>
                            </li>
                          </ul> */}
                        </div>
                        <div className="product-quantity-cart mb-25" key={item}>
                          <button
                            type="button"
                            className="cart-btn bd-fill__btn"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to Cart"
                            onClick={() => dispatch(cart_product(item))}
                          >
                            <i className="fal fa-cart-arrow-down"></i>Add to Cart
                          </button>
                        </div>
                        <div className="bd__product-details-menu-3">
                          <ul>
                            <li>
                              <span className="wishlist-btn" title="Wishlist" onClick={() => dispatch(add_to_wishlist(item))}>
                                <i className="far fa-heart"></i>
                                <span>Add to Wishlist</span>
                              </span>
                            </li>
                            {/* <li>
                              <span className="wishlist-btn cart-btn" title="Compare">
                                <i className="fas fa-exchange-alt"></i>
                                <span>Compare</span>
                              </span>
                            </li> */}
                          </ul>
                        </div>
                        <div className="bd__social-media">
                          <ul>
                            <li>Share:</li>
                            <li><a title="Facebook" onClick={handleShareFacebook}><i className="fab fa-facebook-f"></i></a></li>
                            {/* <li><a title="LinkedIn" onClick={handleShareLinkedIn }><i className="fab fa-linkedin"></i></a></li> */}
                            <li><a title="Instagram" onClick={handleShareInstagram}><i className="fab fa-instagram"></i></a></li>
                            {/* <li><a title="Share" onClick={handleShareWhatsApp}><i className="fas fa-share-alt"></i></a></li> */}
                            <li><a title="Whatsapp" onClick={handleShareWhatsApp}><i className="fab fa-whatsapp"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bd-related-Product__area mb-95">
          <div className="small-container container">
            <TrendingProductSlider trending_product_title="Related Product" />
          </div>
        </div>
      </main>
    </>
  );
};

export default ShopDetailsArea;
