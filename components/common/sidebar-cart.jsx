import Link from 'next/link';
import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useCartInfo from '../../hooks/use-cart-info';
import { cart_product, decrease_quantity, remove_cart_product, setCartProducts } from '../../redux/features/cart-slice';
import axios from 'axios';

const SidebarCart = ({ openCart, setOpenCart }) => {
  const { cartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { total } = useCartInfo();
  const handleChange = (e) => {};
  const [deliveryCharge, setDeliveryCharge] = useState(0);

  const handleFetchCartProducts = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken'); // Get the authentication token from local storage
      const cartIsEmpty = cartProducts&&cartProducts.length === 0;
  
      if (cartIsEmpty) {
        const response = await axios.get('https://jap.digisole.in/api/v1/cart', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const { products } = response.data.cart;
        console.log('Cart products fetched successfully:', products);
        // Handle success response and store the products in your Redux store or state
        dispatch(setCartProducts(products)); // Dispatch the action to set the cart products
        // const deliveryCharge = response.data.cart.delivery_charge;
        // console.log('Delivery Charge:', deliveryCharge);
        // setDeliveryCharge(deliveryCharge); 
      }
    } catch (error) {
      if (error.response) {
        console.error('Failed to fetch cart products:', error.response.data);
        // Handle error response
      } else {
        console.error('Failed to fetch cart products:', error.message);
      }
    }
  };
  useEffect(() => {
    handleFetchCartProducts();
    // handleAddToCart();
  }, []); // Empty dependency array to fetch cart products only once

  useEffect(() => {
    // if (cartProducts&&cartProducts.length > 0) {
      // Send cart products to the API
      sendCartProductsToAPI();
    // }
  }, [cartProducts]); // Trigger the effect whenever cartProducts change

  const sendCartProductsToAPI = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken'); // Get the authentication token from local storage

      const payload = {
        data: cartProducts.map((product) => ({
          product_id: product.id,
          quantity: product.quantity,
        })),
      };

      if (cartProducts.length === 0) {
        payload = {};
      }
        console.log(payload)
      const response = await axios.post(
        'https://jap.digisole.in/api/v1/cart',
        payload,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
        console.log(response.data)
      // Handle the API response if needed
      const deliveryCharge = response.data.cart.delivery_charge;
        console.log('Delivery Charge:', deliveryCharge);
        setDeliveryCharge(deliveryCharge);
    } catch (error) {
      console.error('Failed to send cart products to API:', error.response?.data);
      // Handle the error if needed
    }    
  };

  const totalWithDelivery = parseFloat(total) + parseFloat(deliveryCharge);

  return (
    <>
      <div className="fix">
        <div className={`sidebar-action sidebar-cart ${openCart ? 'cart-open' : ''}`}>
          <div className="cartmini__wrapper">
            <div className="cartmini__title">
              <h4>Shopping Cart</h4>
              {cartProducts && cartProducts.length === 0 && <h5>Your cart is empty</h5>}
            </div>
            <div className="cartmini__close">
              <button type="button" className="cartmini__close-btn" onClick={() => setOpenCart(false)}>
                <i className="fal fa-times"></i>
              </button>
            </div>
            <div className="cartmini__widget">
              {cartProducts && cartProducts.length >= 1 && (
                <>
                  <div className="cartmini__inner">
                    <ul>
                      {cartProducts.map((item, index) => (
                        <li key={index}>
                          <div className="cartmini__thumb">
                            <Link href={`/shop-details/${item.slug}`}>
                              <a>
                                <img src={item.featured_image_link} alt="" />
                              </a>
                            </Link>
                          </div>
                          <div className="cartmini__content">
                            <h5>
                              <Link href={`/shop-details/${item.slug}`}>
                                <a>{item.name} </a>
                              </Link>
                            </h5>
                            <div className="product-quantity mt-10 mb-10">
                              <span className="cart-minus" onClick={() => dispatch(decrease_quantity(item))}>
                                -
                              </span>
                              <input className="cart-input" type="text" onChange={handleChange} value={item?.quantity} />
                              <span className="cart-plus" onClick={() => dispatch(cart_product(item))}>
                                +
                              </span>
                            </div>
                            <div className="product__sm-price-wrapper">
                              <span className="product__sm-price">Rs.{item.price}</span>
                            </div>
                          </div>
                          <span className="cartmini__del" onClick={() => dispatch(remove_cart_product(item))}>
                            <i className="fal fa-times"></i>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="cartmini__checkout">
                  <ul className="mb-20">
                      <li>
                        Subtotal <span>Rs.{parseFloat(total.toFixed(2))}</span>
                      </li>
                      <li>
                        Delivery Charge <span>Rs.{parseFloat(deliveryCharge.toFixed(2))}</span>
                      </li>
                      <li>
                        Total <span>Rs.{totalWithDelivery.toFixed(2)}</span>
                      </li>
                    </ul>
                    <div className="cartmini__checkout-btn">
                      <Link href="/cart" onClick={() => handlegetToCart(item)}>
                        <a className="bd-fill__btn w-100">View cart</a>
                      </Link>
                      <Link href={`/checkout?deliveryCharge=${deliveryCharge}`}>
                        <a className="bd-unfill__btn w-100">Checkout</a>
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div onClick={() => setOpenCart(false)} className={`offcanvas-overlay ${openCart ? 'overlay-open' : ''}`}></div>
    </>
  );
};

export default SidebarCart;
