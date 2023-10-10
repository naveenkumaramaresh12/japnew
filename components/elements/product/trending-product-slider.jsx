import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Scrollbar, A11y, Autoplay, Navigation, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import productList from '../../../data/products';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct, selectProducts, fetchSingleProduct } from '../../../redux/features/product-slice';
import { cart_product } from '../../../redux/features/cart-slice';
import { add_to_wishlist } from '../../../redux/features/wishlist-slice';
import ProductModal from '../../common/product-modal';
import axios from 'axios';

const TrendingProductSlider = ({ trending_product_title }) => {
    const products = useSelector(selectProducts);
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true); // Add a loading state

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://jap.digisole.in/api/v1/product/main/paginate');
                setProductList(response.data);
                setLoading(false); // Set loading to false after data is fetched

            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToWishlist = (item) => {
        dispatch(add_to_wishlist(item));
    };
    const handleAddToCart = async (productId) => {
        try {
            // Retrieve access token from localStorage
            const accessToken = localStorage.getItem('accessToken');

            // Check if the access token exists
            if (!accessToken) {
                console.error('Access token not found in localStorage');
                const product = productList.data.find(item => item.id === productId);
                if (product) {
                    // Add the product to the temporary cart in localStorage
                    const cartItems = JSON.parse(localStorage.getItem('temporaryCart')) || [];
                    cartItems.push(product);
                    localStorage.setItem('temporaryCart', JSON.stringify(cartItems));

                    // Dispatch the addToTemporaryCart action with the product data
                    dispatch(cart_product(product));
                }
                // Show a success message or perform any further actions as needed
                toast.success('Product added to temporary cart');
                return;
            }
            const temporaryCartItems = JSON.parse(localStorage.getItem('temporaryCart')) || [];
            if (temporaryCartItems.length === 0) {
                console.log('No items in the temporary cart');
                return;
            }
            const productIds = productList.data.map(item => item.id); // Array of product IDs from productList

            const payload = {
                data: [],
            };

            productIds.forEach((productId) => {
                const product = {
                    product_id: productId,
                    quantity: 1, // You can set the quantity as needed
                };
                payload.data.push(product);
            });


            // Add access token to the request headers
            const headers = {
                Authorization: `Bearer ${accessToken}`,
            };

            // Make the API request
            const response = await axios.post('https://jap.digisole.in/api/v1/cart', payload, {
                headers: headers,
            });

            dispatch(cart_product(response.data));
            // Handle any further actions or updates based on the response if required
            // ...
        } catch (error) {
            console.error('Failed to add item to cart:', error);
        }
    };
    const handleQuickView = (slug) => {
        dispatch(fetchSingleProduct(slug));
    };
    return (
        <> 
        {loading ? (
            <div>Loading...</div>
        ) : (
        <>
            <div className="row">
                <div className="col-xxl-4 col-xl-5 col-lg-4">
                    <div className="bd-section__title-wrapper mb-40">
                        <div className="bd-sm__section-title">
                            <h3>{trending_product_title ? trending_product_title : 'You May Missed'}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-8 col-xl-7 col-lg-8">
                    <div className="bd-trending__tab-wrapper mb-40 p-relative">
                        <div className="bd-tending-nav">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-tab-1-tab" data-bs-toggle="tab" data-bs-target="#nav-tab-1" type="button" role="tab" aria-controls="nav-tab-1" aria-selected="true">View All</button>
                                    <button className="nav-link" id="nav-tab-2-tab" data-bs-toggle="tab" data-bs-target="#nav-tab-2" type="button" role="tab" aria-controls="nav-tab-2" aria-selected="false">New Arrival</button>
                                    <button className="nav-link" id="nav-tab-3-tab" data-bs-toggle="tab" data-bs-target="#nav-tab-3" type="button" role="tab" aria-controls="nav-tab-3" aria-selected="false">Best Sale</button>
                                    <button className="nav-link" id="nav-tab-4-tab" data-bs-toggle="tab" data-bs-target="#nav-tab-4" type="button" role="tab" aria-controls="nav-tab-4" aria-selected="false">Featured</button>
                                </div>
                            </nav>
                        </div>
                        <div className="bd-trending__navigation">
                            <button className="trending-button-prev"><i className="fa-regular fa-angle-left"></i></button>
                            <button className="trending-button-next"><i className="fa-regular fa-angle-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bd-trending__item-wrapper">
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-tab-1" role="tabpanel" aria-labelledby="nav-tab-1-tab">
                        <div className="bd-trending-active swiper-container">
                            <div className="swiper-wrappers">
                                <Swiper
                                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    loop={true}
                                    observer={true}
                                    observeParents={true}
                                    navigation={{
                                        clickable: true,
                                        nextEl: '.trending-button-next',
                                        prevEl: '.trending-button-prev',
                                    }}
                                    breakpoints={{
                                        500: {
                                            slidesPerView: 2,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        992: {
                                            slidesPerView: 2,
                                        },
                                        1200: {
                                            slidesPerView: 3,
                                        },
                                        1400: {
                                            slidesPerView: 4,
                                        },
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
                    </div>
                </div>
            </div>
            <ProductModal />
        </>
         )}
         </>
    );
};

export default TrendingProductSlider;