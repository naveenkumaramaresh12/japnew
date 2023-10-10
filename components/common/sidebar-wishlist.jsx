import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useCartInfo from '../../hooks/use-cart-info';
import { cart_product, decrease_quantity, remove_cart_product } from '../../redux/features/cart-slice';
import { add_to_wishlist } from '../../redux/features/wishlist-slice';

const SidebarWishlist = ({ openWishlist, setOpenWishlist }) => {
    const { cartProducts } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const { total } = useCartInfo();
    const handleChange = (e) => {}
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
    return (
        <>
            <div className="fix">
                <div className={`sidebar-action sidebar-cart ${openWishlist ? 'cart-open' : ''}`}>
                    <div className='cartmini__wrapper'>
                        <div className="cartmini__title">
                            <h4>Wishlist</h4>
                            {cartProducts && cartProducts.length === 0 && <h5>Your Wishlist is empty</h5>}
                        </div>
                        <div className="cartmini__close">
                            <button type="button" className="cartmini__close-btn" onClick={() => setOpenWishlist(false)}><i className="fal fa-times"></i></button>
                        </div>
                        <div className='cartmini__widget'>
                            {cartProducts && cartProducts.length >= 1 && <>
                                <div className="cartmini__inner">
                                    <ul>
                                        {cartProducts.map((item, index) => (
                                            <li key={index}>
                                                <div className="cartmini__thumb">
                                                    <Link href={`/shop-details/${item.slug}`}><a><img src={item.productImg} alt="" /></a></Link>
                                                </div>
                                                <div className="cartmini__content">
                                                    <h5><Link href={`/shop-details/${item.slug}`}><a>{item.productTitle} </a></Link></h5>
                                                    <div className="product-quantity mt-10 mb-10">
                                                        <span className="cart-minus" onClick={() => dispatch(decrease_quantity(item))}>-</span>
                                                        <input className="cart-input" type="text" onChange={handleChange} value={item?.quantity} />
                                                        <span className="cart-plus" onClick={() => dispatch(cart_product(item))}>+</span>
                                                    </div>
                                                    <div className="product__sm-price-wrapper">
                                                        <span className="product__sm-price">${item.price}</span>
                                                    </div>
                                                </div>
                                                <a href="#" className="cartmini__del" onClick={() => dispatch(remove_cart_product(item))}><i className="fal fa-times"></i></a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="cartmini__checkout">
                                    <div className="cartmini__checkout-title mb-30">
                                        <h4>Subtotal:</h4>
                                        <span className="subtotal-price">${parseFloat(total)}</span>
                                    </div>
                                    <div className="cartmini__checkout-btn">
                                        <Link href="/wishlist">
                                            <a className="bd-fill__btn w-100" onClick={() => handlegetToWishlist(item)}>
                                                View Wishlist
                                            </a>
                                        </Link>
                                        <Link href="/checkout"><a className="bd-unfill__btn w-100">Checkout</a></Link>
                                    </div>
                                </div>
                            </>}
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => setOpenWishlist(false)} className={`offcanvas-overlay ${openWishlist ? 'overlay-open' : ''}`}></div>
        </>
    );
};

export default SidebarWishlist;