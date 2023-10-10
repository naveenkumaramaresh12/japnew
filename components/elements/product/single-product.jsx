import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { SwiperSlide } from 'swiper/react';
import axios from 'axios';
import ProductModal from '../../common/product-modal';
import { cart_product } from '../../../redux/features/cart-slice';
import { useDispatch } from 'react-redux';

const SingleProduct = ({ item }) => {
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch(); // Import the dispatch function


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://jap.digisole.in/api/v1/product/${item.id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    fetchProduct();
  }, [item.id]);


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
  
  

  return (
    <>
      <SwiperSlide key={product.id}>
        <div className="swiper-slides">
          <div className="bd-product__item text-center p-relative mb-30">
            <div className="bd-product__thumb w-img">
              <Link href={`/shop-details/Rs.${product.id}`}>
                <a>
                  <img src={item.featured_image_link} alt="product-img" />
                </a>
              </Link>
              <div className="bd-product__action">
                <span
                  className="cart-btn"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Quick Shop"
                  onClick={() => dispatch(cart_product(item))}
                >
                  <i className={'fal fa-cart-arrow-down ${product.cartIcon}'}></i>
                </span>
                <span
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Quick View"
                  data-bs-toggle="modal"
                  data-bs-target="#productmodal"
                >
                  <i className={'fal fa-eye ${product.cartEye}'}></i>
                </span>
                <span
                  className="wishlist-btn"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Quick Wishlist"
                  onClick={() => dispatch(add_to_wishlist(item))}
                >
                  <i className={'fal fa-heart ${item.cartHeart}'}></i>
                </span>
              </div>
            </div>
            <div className="bd-product__content">
              <h4 className="bd-product__title">
                <Link href={`/shop-details/Rs.${product.id}`}>
                  <a>{product?.name}</a>
                </Link>
              </h4>
              <div className="bd-product__price">
                <span className="bd-product__old-price">
                  <del>Rs.{product?.price}</del>
                </span>
                <span className="bd-product__new-price">Rs.{product?.discounted_price}</span>
              </div>
              <div className="bd-product__icon">
                {product.ratingIcons.map((icon, index) => (
                  <i key={index} className={icon}></i>
                ))}
              </div>
            </div>
            <div className="bd-product__tag">
              {product.badgeNew && (
                <span className="tag-text theme-bg">{product.badge}</span>
              )}
              {product.badgeDiscount && (
                <span className="tag-text danger-bg">{product.badge}</span>
              )}
            </div>
          </div>
        </div>
      </SwiperSlide>
      <ProductModal item={product.id} />
    </>
  );
};

export default SingleProduct;
