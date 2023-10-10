import Link from 'next/link';
import React from 'react';
import { add_to_wishlist } from '../../redux/features/wishlist-slice';
import { cart_product } from '../../redux/features/cart-slice';

const FooterOne = () => {
    const handlegetToWishlist = async (item) => {
        try {
          // Fetch the access token from wherever it is stored (e.g., local storage)
          const accessToken = localStorage.getItem('accessToken');
      
          // Make the POST request to add the item to the wishlist
          const response = await axios.get(
            'https://jap.digisole.in/api/v1/wishlist',
            item,
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
      
          // Handle the response and dispatch actions as needed
          console.log('Item added to wishlist:', response.data);
          // Dispatch the add_to_wishlist action with the updated wishlist data
          dispatch(add_to_wishlist(item));
        } catch (error) {
          console.error('Failed to add item to wishlist:', error);
        }
      };
      const handlegetToCart = async (item) => {
        try {
          // Fetch the access token from wherever it is stored (e.g., local storage)
          const accessToken = localStorage.getItem('accessToken');
      
          // Make the POST request to add the item to the cart
          const response = await axios.get(
            'https://jap.digisole.in/api/v1/cart',
            item,
            {
            
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
      
          // Handle the response and dispatch actions as needed
          console.log('Item added to cart:', response.data);
          // Dispatch the add_to_cart action with the updated cart data
          dispatch(cart_product(item));
        } catch (error) {
          console.error('Failed to add item to cart:', error);
        }
      };
    return (
        <footer>
            <section className="bd-footer__area grey-bg pt-100 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="bd-footer__widget footer-col-1 mb-60">
                                <div className="bd-footer__info">
                                    <div className="bd-footer__logo">
                                        <Link href="/"><a><img src="/assets/img/logo/japlogo.png" alt="footer-logo"/></a></Link>
                                    </div>
                                    <p>JVK Organics takes pride in delivering a wide variety of fresh and certified organic vegetables, fruits, eggs, and meats right to your doorstep. </p>
                                    <div className="bd-footer__contact">
                                        <span><a href="mailto:Info@example.com"><i className="fa-regular fa-envelope"></i>info@jap.bio</a></span>
                                        <span><i className="fa-regular fa-house-chimney"></i>Jaivik Avam Prakrutik Producer Company Ltd., Salivaram post, Denkanikottai, Krishnagiri, Tamil Nadu - 635107, India

</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="bd-footer__widget footer-col-2 mb-60">
                                <div className="bd-footer__widget-title">
                                    <h4>Quick Links</h4>
                                </div>
                                <div className="bd-footer__link">
                                    <ul>
                                        <li><Link href="/about"><a>About Our Company</a></Link></li>
                                        <li><Link href="/wishlist" onClick={() => handlegetToWishlist(item)}><a>Wishlist</a></Link></li>
                                        <li><Link href="/cart" onClick={() => handlegetToCart(item)}><a>Cart</a></Link></li>
                                        <li><Link href="/shipping-policy"><a>Shipping Policy</a></Link></li>
                                        <li><Link href="/terms-conditions"><a>Terms & Condition</a></Link></li>
                                        <li><Link href="/privacy-policy"><a>Privacy Policy</a></Link></li>
                                        <li><Link href="/return-refund"><a>Return & Refund Policy</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="bd-footer__widget footer-col-3 mb-60">
                                <div className="bd-footer__widget-title">
                                    <h4>Categories</h4>
                                </div>
                                <div className="bd-footer__link">
                                    <ul>
                                        <li><Link href="/shop"><a>Cuts & Sprouts</a></Link></li>
                                        <li><Link href="/shop"><a>Exotic Fruits & Veggies</a></Link></li>
                                        <li><Link href="/shop"><a>Fresh Fruits</a></Link></li>
                                        <li><Link href="/shop"><a>Fresh Vegetables</a></Link></li>
                                        <li><Link href="/shop"><a>Herbs & Seasoning</a></Link></li>
                                        <li><Link href="/shop"><a>Collectionss</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="bd-footer__widget mb-60">
                                <div className="bd-footer__widget-title">
                                    <h4>Newsletter</h4>
                                </div>
                                <div className="bd-footer__subcribe p-relative mb-40">
                                    <form action="#">
                                        <input type="text" placeholder="Enter Your Email"/>
                                            <button className="bd-footer__s-btn"><i className="fa-solid fa-arrow-right-long"></i></button>
                                    </form>
                                </div>
                                <div className="bd-footer__support-wrapper">
                                    <div className="bd-fotter__support-icon">
                                        <img src="/assets/img/icon/support.png" alt="support-img"/>
                                    </div>
                                    <div className="bd-footer__support-inner">
                                        <span>8:30 AM - 9:30 PM</span>
                                        <h4><a href="tel:+58569502352"> 080 - 26561151</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bd-sub__fotter">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="bd-footer__copyright">
                                <ul>
                                    <li>All Rights Reserved</li>
                                    <li>Copyrighted by ©2023 <span><a href="#">JAP</a></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            
                        </div>
                    </div>
                </div>
            </div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
            <a href="https://wa.me/2348100000000" class="whatsapp_float" target="_blank" rel="noopener noreferrer"> <i class="fa fa-whatsapp whatsapp-icon"></i>
    </a>
        </footer>
        
    );
};

export default FooterOne;