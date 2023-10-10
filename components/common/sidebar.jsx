import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import useGlobalContext from '../../hooks/use-context';
import CartIcon from '../elements/icons/cart-icon';
import WishlistIcon from '../elements/icons/wishlist-icon';

const Sidebar = () => {
    const {showSidebar, setShowSidebar} = useGlobalContext();
    const [home, setHome] = useState(false);
    const [shop, setShop] = useState(false);
    const [productPages, setProductPages] = useState(false);
    const [otherPages, setOtherPages] = useState(false);
    const [blog, setBlog] = useState(false);

    const handleMenuDropDown = (page) => {
        if (page === 'home') {
            setHome(!home)
            setShop(false)
            setProductPages(false)
            setOtherPages(false);
            setBlog(false)
        }

        if (page === 'shop') {
            setHome(false)
            setShop(!shop)
            setProductPages(false)
            setOtherPages(false)
            setBlog(false)
        }

        if (page === 'product-pages') {
            setHome(false)
            setShop(false)
            setProductPages(!productPages)
            setOtherPages(false)
            setBlog(false)
        }

        if (page === 'other-pages') {
            setHome(false)
            setShop(false)
            setProductPages(false)
            setOtherPages(!otherPages)
            setBlog(false)
        }

        if (page === 'blog') {
            setHome(false)
            setShop(false)
            setProductPages(false)
            setOtherPages(false)
            setBlog(!blog)
        }
    }
    const handleLogout = () => {
    // Clear the access token from local storage
    localStorage.removeItem('accessToken');
    
    // Perform additional cleanup or actions if needed
    // For example, you can reset the state or navigate to the login page
    
    // Redirect to the login page
    window.location.href = '/login'; // Replace '/login' with the actual URL of your login page
    };

      const accessToken = localStorage.getItem('accessToken');
      const loggedIn = !!accessToken; // Check if the access token exists
    return (
        <>
            <div className="fix">
                <div className={`side-info ${showSidebar ? 'info-open' : ''}`}>
                    <div className="side-info-content">
                        <div className="modals-content">
                            <div className="offcanvas__wrapper">
                                <div className="offcanvas__content">
                                    <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
                                        <div className="offcanvas__logo logo">
                                            <Link href="/"><a><img src="/assets/img/logo/logo-2.png" alt="logo" style={{ width: '150px' }}/></a></Link>
                                        </div>
                                        <div className="offcanvas__close">
                                            <button className="offcanvas__close-btn" onClick={() => setShowSidebar(false)}>
                                                <i className="fal fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="bd-utilize__buttons mb-25 d-none">
                                        <div className="bd-action__item">
                                            <div className="bd-action__cart d-none">
                                                <div className="bd-action__cart-icon">
                                                    <span className='bd-cart-mini-btn' >
                                                        <CartIcon />
                                                    </span>
                                                    <span className="bd-action__item-number cart-count">0</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bd-action__item d-none">
                                            <div className="bd-action__wishlist">
                                                <div className="bd-action__wistlist-icon">
                                                    <span className='bd-cart-mini-btn'>
                                                        <WishlistIcon />
                                                    </span>
                                                    <span className="bd-action__item-number wishlist-count">0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="offcanvas__search mb-25">
                                        <form action="#">
                                            <input type="text" placeholder="What are you searching for?" />
                                            <button type="submit" ><i className="far fa-search"></i></button>
                                        </form>
                                    </div>
                                    <nav className="side-mobile-menu d-block d-xl-none mm-menu">
                                        <ul>
                                            <li className={`menu-item-has-children has-droupdown ${home ? 'active' : ''}`}>
                                                <a onClick={() => handleMenuDropDown('home')}>Home</a >
                                                <ul onClick={() => setShowSidebar(false)} className={`sub-menu ${home ? 'active' : ''}`}>
                                                    <li><Link href="/"><a>Home Style 1</a></Link></li>
                                                    <li><Link href="/home-2"><a>Home Style 2</a></Link></li>
                                                    <li><Link href="/home-3"><a>Home Style 3</a></Link></li>
                                                </ul>
                                            </li>
                                            <li className={`menu-item-has-children has-droupdown ${productPages ? 'active' : ''}`}>
                                                <a onClick={() => handleMenuDropDown('product-pages')}>Shop</a>
                                                <ul onClick={() => setShowSidebar(false)} className={`sub-menu ${productPages ? 'active' : ''}`}>
                                                    <li><Link href="/shop"><a>Shop</a></Link></li>
                                                    <li><Link href="/shop-details"><a>Shop Details</a></Link></li>
                                                    <li><Link href="/wishlist"><a>Wishlist</a></Link></li>
                                                    <li><Link href="/cart"><a>Shopping Cart</a></Link></li>
                                                    <li><Link href={`/checkout`}><a>Checkout</a></Link></li>
                                                </ul>
                                            </li>
                                            <li className={`menu-item-has-children has-droupdown ${blog ? 'active' : ''}`}>
                                                <a onClick={() => handleMenuDropDown('blog')}>Blog</a>
                                                <ul onClick={() => setShowSidebar(false)} className={`sub-menu ${blog ? 'active' : ''}`}>
                                                    <li><Link href="/blog"><a>Blog</a></Link></li>
                                                    <li><Link href="/blog-grid"><a>Blog Grid</a></Link></li>
                                                    <li><Link href="/blog-details"><a>Blog Details</a></Link></li>
                                                </ul>
                                            </li>
                                            <li className={`menu-item-has-children has-droupdown ${otherPages ? 'active' : ''}`}>
                                                <a onClick={() => handleMenuDropDown('other-pages')}>Pages</a>
                                                <ul onClick={() => setShowSidebar(false)} className={`sub-menu ${otherPages ? 'active' : ''}`}>
                                                    <li><Link href="/about"><a>About</a></Link></li>
                                                    <li><Link href="/team"><a>Team</a></Link></li>
                                                    <li><Link href="/team-details"><a>Team Details</a></Link></li>
                                                    <li><Link href="/faq"><a>FAQ</a></Link></li>
                                                    <li><Link href="/registration"><a>Register</a></Link></li>
                                                    <li><Link href="/login"><a>Login</a></Link></li>
                                                    <li><Link href="/error"><a>404 Page</a></Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="/contact"><a>Contact</a></Link></li>
                                            {loggedIn && (
                    <div className="sidebar__item">
                      <button onClick={handleLogout} className="sidebar__link">
                        Logout
                      </button>
                    </div>
                  )}
                                        </ul>
                                    </nav>
                                    <div className="offcanvas__contact mt-30 mb-20">
                                        <h4>Contact Info</h4>
                                        <ul>
                                            <li className="d-flex align-items-center">
                                                <div className="offcanvas__contact-icon mr-15">
                                                    <i className="fal fa-map-marker-alt"></i>
                                                </div>
                                                <div className="offcanvas__contact-text">
                                                    <Link href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"><a target="_blank">12/A, Mirnada City Tower, NYC</a></Link>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <div className="offcanvas__contact-icon mr-15">
                                                    <i className="far fa-phone"></i>
                                                </div>
                                                <div className="offcanvas__contact-text">
                                                    <a href="tel:+088889797697">+088889797697</a>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <div className="offcanvas__contact-icon mr-15">
                                                    <i className="fal fa-envelope"></i>
                                                </div>
                                                <div className="offcanvas__contact-text">
                                                    <a href="tel:+012-345-6789"><span className="mailto:support@mail.com">support@mail.com</span></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="offcanvas__social">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div onClick={() => setShowSidebar(false)} className={`offcanvas-overlay ${showSidebar ? 'overlay-open' : ''}`}></div>
        </>
    );
};

export default Sidebar;