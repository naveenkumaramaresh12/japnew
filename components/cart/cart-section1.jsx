import Link from 'next/link';
import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useCartInfo from '../../hooks/use-cart-info';
import { cart_product, clear_cart, decrease_quantity, remove_cart_product ,initialState, setCartProducts} from '../../redux/features/cart-slice';
import { useState } from 'react';
import axios from 'axios';

const CartSection = () => {
  const { cartProducts } = useSelector((state) => state.cart);
  const [couponCode, setCouponCode] = useState('');
  const dispatch = useDispatch();
  const [couponResponse, setCouponResponse] = useState(null); // State variable for coupon response
  const { total } = useCartInfo();
  const [deliveryCharge, setDeliveryCharge] = useState(0);


  const handleChange = (e) => {};

  const handleApplyCoupon = async (event) => {
    event.preventDefault();
    const accessToken = localStorage.getItem('accessToken');
  
    try {
      const payload = {
        coupon_code: couponCode,
      };
  
      const response = await axios.post(
        'https://jap.digisole.in/api/v1/cart/apply-coupon',
        payload,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
  
      console.log('Coupon applied successfully:', response.data.cart);
      // Handle success response
      setCouponResponse(response.data.cart); // Set the coupon response in state
    } catch (error) {
      if (error.response) {
        console.error('Coupon application failed:', error.response.data);
        // Handle error response
      } else {
        console.error('Coupon application failed:', error.message);
      }
    }
  };
  
  
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
    if (cartProducts&&cartProducts.length > 0) {
      // Send cart products to the API
      sendCartProductsToAPI();
    }
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
        console.log("MAIN CART",response.data.cart)
         // Assuming the API response contains the delivery_charge property
        const deliveryCharge = response.data.cart.delivery_charge;
        console.log('Delivery Charge:', deliveryCharge);
        setDeliveryCharge(deliveryCharge);        
    } catch (error) {
      console.error('Failed to send cart products to API:', error.response?.data);
      // Handle the error if needed
    }    
  };  
  
  const totalWithDelivery = parseFloat(total) + parseFloat(deliveryCharge);

const handleClearCart = () => {
  dispatch(clear_cart());
  sendCartProductsToAPI();

};
    return (
        <>
            {cartProducts && cartProducts.length === 0 &&
                <div className="container">
                    <div className="empty-text pt-100 pb-100 text-center">
                        <h3>Your cart is empty</h3>
                    </div>
                </div>
            }
            {cartProducts && cartProducts.length >= 1 && (
                <section className="cart-area pt-115 pb-130">
                    <div className="container small-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="table-content table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Images</th>
                                                <th className="cart-product-name">Product</th>
                                                <th className="product-price">Unit Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-subtotal">Total</th>
                                                <th className="product-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {cartProducts&&cartProducts.map((item, index) => (
                                            <tr key={index}>
                                            <td className="product-thumbnail">
                                                <Link href={`/shop-details/${item.slug}`}>
                                                <a>
                                                    <img src={item.featured_image_link} alt="" />
                                                </a>
                                                </Link>
                                            </td>
                                            <td className="product-name">
                                                <Link href={`/shop-details/${item.slug}`}>
                                                <a>{item.name}</a>
                                                </Link>
                                            </td>
                                            <td className="product-price">
                                                <span className="amount">Rs.{item.price}</span>
                                            </td>
                                            <td className="product-quantity text-center">
                                                <div className="product-quantity mt-10 mb-10">
                                                <div className="product-quantity-form">
                                                    <form onSubmit={e => e.preventDefault()}>
                                                    <button
                                                        type='button'
                                                        className="cart-minus"
                                                        onClick={() => dispatch(decrease_quantity(item))}
                                                    >
                                                        <i className="far fa-minus"></i>
                                                    </button>
                                                    <input
                                                        className="cart-input"
                                                        type="text"
                                                        onChange={handleChange}
                                                        value={item?.quantity}
                                                    />
                                                    <button
                                                        type='button'
                                                        className="cart-plus"
                                                        onClick={() => dispatch(cart_product(item))}
                                                    >
                                                        <i className="far fa-plus"></i>
                                                    </button>
                                                    </form>
                                                </div>
                                                </div>
                                            </td>
                                            <td className="product-subtotal">
                                                <span className="amount">Rs.{item?.quantity * item.price}</span>
                                            </td>
                                            <td
                                                className="product-remove"
                                                onClick={() => dispatch(remove_cart_product(item))}
                                            >
                                                <i className="fa fa-times"></i>
                                            </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="coupon-all">
                                            <div className="coupon d-flex align-items-center">
                                                <input id="coupon_code" className="input-text" name="coupon_code" placeholder="Coupon code" type="text" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
                                                <button className="bd-border__btn" name="apply_coupon" type="submit" onClick={handleApplyCoupon}>Apply coupon</button>
                                            </div>
                                            <div className="coupon2">
                                            <button className="bd-border__btn" name="update_cart" type="submit" onClick={handleClearCart}>Clear cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5 ml-auto">
                                        <div className="cart-page-total">
                                            <h2>Cart totals</h2>
                                            {couponResponse && (
                                                <div className="container">
                                                <ul className="mb-20">
                                                    <h4>Coupon Response:</h4>
                                                    <li>Coupon Discount: Rs.{couponResponse.coupon_discount}</li>
                                                    <li>Delivery Charge: Rs.{couponResponse.delivery_charge}</li>
                                                    <li>GST Charge: Rs.{couponResponse.gst_charge}</li>
                                                    <li>Subtotal: Rs.{couponResponse.sub_total}</li>
                                                    <li>Total Discount: Rs.{couponResponse.total_discount}</li>
                                                    <li>Total Items: {couponResponse.total_items}</li>
                                                    <li>Total Price with Coupon Discount: Rs.{couponResponse.total_price_with_coupon_dicount}</li>
                                                    <li>Total Price with GST and Delivery Charge: Rs.{couponResponse.total_price_with_gst_delivery_charge}</li>
                                                    <li>Total Price without GST and Delivery Charge: Rs.{couponResponse.total_price_without_gst_delivery_charge}</li>
                                                    <li>Total Quantity: {couponResponse.total_quantity}</li>
                                                </ul>
                                                </div>
                                            )}

                                            {/* Render Subtotal and Total */}
                                            {!couponResponse && (
                                              <ul className="mb-20">
                                                <li>
                                                  Subtotal <span>Rs.{parseFloat(total)}</span>
                                                </li>
                                                <li>
                                                  Delivery Charge <span>Rs.{parseFloat(deliveryCharge)}</span>
                                                </li>
                                                <li>
                                                  Total <span>Rs.{totalWithDelivery}</span>
                                                </li>
                                              </ul>
                                            )}
                                            <Link href={`/checkout?deliveryCharges=${deliveryCharge}`}>
                                                <a className="bd-border__btn">Proceed to checkout</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default CartSection;
