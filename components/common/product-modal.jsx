import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cart_product, decrease_quantity } from '../../redux/features/cart-slice';
import { add_to_wishlist } from '../../redux/features/wishlist-slice';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Controller, Navigation } from "swiper";
import 'swiper/css/bundle';
import axios from 'axios';

const ProductModal = ({ item }) => {
    const { product } = useSelector(state => state.products);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [productList, setProductList] = useState([]);
    const [singleProduct, setSingleProduct] = useState({});


    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('https://jap.digisole.in/api/v1/product/main/paginate');
          setProductList(response.data);
          console.log("dsf",response.data)
        } catch (error) {
          console.error('Failed to fetch products:', error);
        }
      };
  
      fetchProducts();
    }, []);
  
  //   const { slug } = item.slug; // Extracting the slug from the item prop
  
  useEffect(() => {
      const fetchProductDetails = async (slug) => {
        try {
          const response = await axios.get(`https://jap.digisole.in/api/v1/product/main/detail/${slug}`);
          setSingleProduct(response.data.product);
          console.log("single",response.data.product);
        } catch (error) {
          console.error('Failed to fetch product details:', error);
        }
      };
    
      if (item && item.slug) {
          fetchProductDetails(item.slug)
        }
      }, [item]);
      
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
  const handleAddToWishlist = (item) => {
    dispatch(add_to_wishlist(item));
  };
      
    const dispatch = useDispatch();
    return (
        <div className="product__modal-sm modal fade" id="productmodal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className='product__modal'>
                        <div className="product__modal-wrapper p-relative">
                            <button type="button" className="close product__modal-close" data-bs-dismiss="modal" aria-label="Close">
                                <i className="fal fa-times"></i>
                            </button>
                            <div className="modal__inner">
                                <div className="bd__shop-details-inner">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="product-details__thumb-inner p-relative">
                                                <div className="bd__shop-details-img-gallery mb-30">
                                                <div className="product-details-active swiper-container">
                                                        <div className="swiper-wrappers">
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
                                                                {productList && productList.data && productList.data.map((item, index) => {
                                                                    return (
                                                                        <SwiperSlide key={index}>
                                                                            <div className="swiper-slides">
                                                                                <div className="bd-product__details-large-img w-img">
                                                                                    <img src={product?.featured_image_link} alt="product-details-img" />
                                                                                </div>
                                                                            </div>
                                                                        </SwiperSlide>
                                                                    )
                                                                })
                                                                }
                                                            </Swiper>
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
                                                                {productList && productList.data && productList.data.map((item, index) => (
                                                                    <SwiperSlide key={index}>
                                                                        <div className="swiper-slides m-img">
                                                                            <div className="product-small__img">
                                                                                <img src={product?.featured_image_link} alt="product-thumb" />
                                                                            </div>
                                                                        </div>
                                                                    </SwiperSlide>
                                                                ))}
                                                            </Swiper>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="modal-product-info modal-product__details-content">
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className={product?.ratingA}></i></a></li>
                                                        <li><a href="#"><i className={product?.ratingB}></i></a></li>
                                                        <li><a href="#"><i className={product?.ratingC}></i></a></li>
                                                        <li><a href="#"><i className={product?.ratingD}></i></a></li>
                                                        <li><a href="#"><i className={product?.ratingE}></i></a></li>
                                                        <li className="review-total"> <a href="#"> ( 95 Reviews )</a></li>
                                                    </ul>
                                                </div>
                                                <h3>{product?.name}</h3>
                                                <div className="product-price">
                                                    <span>Rs.{product?.discounted_price}</span>
                                                    <del>Rs.{product?.price}</del>
                                                </div>
                                                <div className="modal-product-meta bd__product-details-menu-1">
                                                    <ul>
                                                        <li>
                                                            <strong>Products:</strong>
                                                            <span>
                                                                <Link href="/shop"><a>Vegetabledsfghf</a></Link>
                                                                <Link href="/shop"><a>Fruits</a></Link>
                                                                <Link href="/shop"><a>Dairy Milk</a></Link>
                                                                <Link href="/shop"><a>Bakery</a></Link>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="product-quantity-cart mb-25" key={item}>
                                                    <button
                                                        type="button"
                                                        className="cart-btn bd-fill__btn"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Add to Cart"
                                                        onClick={() => {
                                                            console.log(product); // Check the contents of the product object
                                                            dispatch(cart_product(product));
                                                          }} >
                                                        <i className="fal fa-cart-arrow-down"></i>Add to Cart
                                                    </button>
                                                    </div>
                                                <div className="bd__product-details-menu-3">
                                                    <ul>
                                                        <li>
                                                            <span className="wishlist-btn" title="Wishlist" onClick={() => dispatch(add_to_wishlist(product))}>
                                                                <i className="far fa-heart"></i>
                                                                <span>Add to Wishlist</span>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span className="wishlist-btn cart-btn" title="Compare">
                                                                <i className="fas fa-exchange-alt"></i>
                                                                <span>Compare</span>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="bd__social-media">
                                                    <ul>
                                                        <li>Share:</li>
                                                        <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
                                                        <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="bd__safe-checkout">
                                                    <h5>Guaranteed Safe Checkout</h5>
                                                    <a href="#"><img src="/assets/img/icon/discover.png" alt="Payment Image" /></a>
                                                    <a href="#"><img src="/assets/img/icon/mastercard.png" alt="Payment Image" /></a>
                                                    <a href="#"><img src="/assets/img/icon/paypal.png" alt="Payment Image" /></a>
                                                    <a href="#"><img src="/assets/img/icon/visa.png" alt="Payment Image" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;