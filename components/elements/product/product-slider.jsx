import Link from 'next/link';
import React from 'react';
import TabIconFive from '../icons/tab-icon-five';
import TabIconFour from '../icons/tab-icon-four';
import TabIconOne from '../icons/tab-icon-one';
import TabIconThree from '../icons/tab-icon-three';
import TabIconTwo from '../icons/tab-icon-two';
import { Scrollbar, A11y, Autoplay, Navigation, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import ProductModal from '../../common/product-modal';
import { cart_product } from '../../../redux/features/cart-slice';
import { add_to_wishlist } from '../../../redux/features/wishlist-slice';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct, selectProducts, fetchSingleProduct } from '../../../redux/features/product-slice';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ProductSlider = () => {
    const products = useSelector(selectProducts);
    const [productList, setProductList] = useState([]);

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get('https://jap.digisole.in/api/v1/product/main/paginate');
            setProductList(response.data);
          } catch (error) {
            console.error('Failed to fetch products:', error);
          }
        };
    
        fetchProducts();
      }, []);

      // const handleAddToCart = (product) => {
      //   try {
      //     // Check if the user is logged in
      //     const accessToken = localStorage.getItem('accessToken');
      
      //     if (accessToken) {
      //       // User is logged in, dispatch the cart_product action with the product
      //       dispatch(cart_product(product));
      //     } else {
      //       // User is not logged in, update the temporary cart in localStorage
      //       const cartItems = JSON.parse(localStorage.getItem('temporaryCart')) || [];
      
      //       cartItems.push(product);
      //       localStorage.setItem('temporaryCart', JSON.stringify(cartItems));
      //       dispatch(cart_product(product));
      //     }
      //   } catch (error) {
      //     console.error('Failed to add item to cart:', error);
      //   }
      // };
      
      const handleAddToCart = (item) => {
        try {
          // Check if the user is logged in
          const accessToken = localStorage.getItem('accessToken');
      
          if (accessToken) {
            // User is logged in, dispatch the cart_product action with the product
            dispatch(cart_product(item));
          } else {
            // User is not logged in, update the temporary cart in localStorage
            const cartItems = JSON.parse(localStorage.getItem('temporaryCart')) || [];
      
            cartItems.push(item);
            localStorage.setItem('temporaryCart', JSON.stringify(cartItems));
            dispatch(cart_product(item));
          }
        } catch (error) {
          console.error('Failed to add item to cart:', error);
        }
      };
      
      

  const handleQuickView = (slug) => {
    dispatch(fetchSingleProduct(slug));
  };
         
    return (
        <>
            <section className="bd-product__area pt-125 pb-95">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-4">
                            <div className="bd-section__title-wrapper mb-60">
                                <span className="bd-sub__title">Organic Products</span>
                                <h2 className="bd-section__title mb-30">Featured Product</h2>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-8">
                            {/* <div className="bd-bananna-nav mb-60">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button className="nav-link active" id="nav-product-1-tab" data-bs-toggle="tab" data-bs-target="#nav-product-1" type="button" role="tab" aria-controls="nav-product-1" aria-selected="true">Show All<TabIconOne /></button>
                                        <button className="nav-link" id="nav-product-2-tab" data-bs-toggle="tab" data-bs-target="#nav-product-2" type="button" role="tab" aria-controls="nav-product-2" aria-selected="false">Vegetable<TabIconTwo /></button>
                                        <button className="nav-link" id="nav-product-3-tab" data-bs-toggle="tab" data-bs-target="#nav-product-3" type="button" role="tab" aria-controls="nav-product-3" aria-selected="false">Fruit & Food<TabIconThree /></button>
                                        <button className="nav-link" id="product-4-tab" data-bs-toggle="tab" data-bs-target="#product-4" type="button" role="tab" aria-controls="product-4" aria-selected="false">Dairy & Bakery<TabIconFour /></button>
                                        <button className="nav-link" id="product-5-tab" data-bs-toggle="tab" data-bs-target="#product-5" type="button" role="tab" aria-controls="product-5" aria-selected="false">Grocery & Major<TabIconFive /></button>
                                    </div>
                                </nav>
                            </div> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-12">
                            {productList &&
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-product-1" role="tabpanel" aria-labelledby="nav-product-1-tab">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="bd-product__wrapper p-relative">
                                                    <div className="bd-product__active swiper-container">
                                                        <div className="swiper-wrappers">
                                                            <Swiper
                                                                modules={[Navigation, Scrollbar, A11y, Autoplay]}
                                                                spaceBetween={30}
                                                                slidesPerView={1}
                                                                autoplaydisableoninteraction={"false"}
                                                                loop={true}
                                                                observer={true}
                                                                observeParents={true}
                                                                autoplay={{
                                                                    delay: 5000,
                                                                    disableOnInteraction: true
                                                                }}
                                                                navigation={{
                                                                    clickable: true,
                                                                    nextEl: '.product-button-next',
                                                                    prevEl: '.product-button-prev',
                                                                }}
                                                                breakpoints={{
                                                                    500: {
                                                                        slidesPerView: 2,
                                                                    },
                                                                    768: {
                                                                        slidesPerView: 3,
                                                                    },
                                                                    992: {
                                                                        slidesPerView: 4,
                                                                    },
                                                                    1200: {
                                                                        slidesPerView: 4,
                                                                    }
                                                                }}
                                                            >
                                                                {productList && productList.data && productList.data.map((item, index) => {
                                                                    return (
                                                                        <SwiperSlide key={index}>
                                                                            <div className="swiper-slides">
                                                                                <div className="bd-product__item text-center p-relative mb-30">
                                                                                    <div className="bd-product__thumb w-img">
                                                                                        <Link href={`/shop-details/${item.slug}`}><a><img src={item.featured_image_link} alt="product-img" /></a></Link>
                                                                                        <div className="bd-product__action">
                                                                                            <span className="cart-btn" data-toggle="tooltip" data-placement="top" title="Quick Shop" onClick={() => dispatch(cart_product(item))}><i className={'fal fa-cart-arrow-down ${item.cartIcon}'} ></i></span>
                                                                                            <span data-toggle="tooltip" data-placement="top" title="Quick View" data-bs-toggle="modal" data-bs-target="#productmodal" onClick={() => handleQuickView(item.slug)}><i className={'fal fa-eye ${item.cartEye}'}></i></span>
                                                                                            <span className="wishlist-btn" data-toggle="tooltip" data-placement="top" title="Quick Wishlist" onClick={() => dispatch(add_to_wishlist(item))}><i className={'fal fa-heart ${item.cartHeart}'}></i></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="bd-product__content">
                                                                                        <h4 className="bd-product__title" ><Link href={`/shop-details/${item.slug}`}><a>{item.name}</a></Link></h4>
                                                                                        <div className="bd-product__price">
                                                                                            <span className="bd-product__old-price"><del>Rs.{item.price}</del></span><span className="bd-product__new-price" >Rs.{item.discounted_price}</span>
                                                                                        </div>
                                                                                        <div className="bd-product__icon">
                                                                                            <i className={item.ratingA}></i>
                                                                                            <i className={item.ratingB}></i>
                                                                                            <i className={item.ratingC}></i>
                                                                                            <i className={item.ratingD}></i>
                                                                                            <i className={item.ratingE}></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="bd-product__tag">
                                                                                        {item.badgeNew && <span className="tag-text theme-bg">{item.badge}</span>}
                                                                                        {item.badgeDiscount && <span className="tag-text danger-bg">{item.badge}</span>}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </SwiperSlide>
                                                                    )
                                                                })}
                                                            </Swiper>
                                                        </div>
                                                    </div>
                                                    <div className="bd-product__nav">
                                                        <button className="product-button-prev"><i className="fa-regular fa-angle-left"></i></button>
                                                        <button className="product-button-next"><i className="fa-regular fa-angle-right"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
            <ProductModal />

        </>
    );
};

export default ProductSlider;