import React, { useReducer, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useCartInfo from '../../hooks/use-cart-info';
import axios from 'axios';
import { clear_cart, setAppliedCoupon } from '../../redux/features/cart-slice';
import { useRouter } from 'next/router';
import CryptoJS from 'crypto-js';
import { Link } from 'react-router-dom';

const initialState = {
    isActive: true,
    isActiveA: true,
    isActiveB: true,
    isActiveC: true
}
const reducer = (state, action) => {
    switch (action) {
        case "returnCustomer":
            return {
                ...state,
                isActive: !state.isActive,
            };
        case "coupon":
            return {
                ...state,
                isActiveA: !state.isActiveA,
            };
        case "account":
            return {
                ...state,
                isActiveB: !state.isActiveB,
            };
        case "address":
            return {
                ...state,
                isActiveC: !state.isActiveC,
            };
        default:
            throw new Error("Unexpected action");
    }
};

const CheckoutSection = (item) => {
    const { cartProducts } = useSelector(state => state.cart);
    const { total } = useCartInfo();
    const [couponResponse, setCouponResponse] = useState(null); // State variable for coupon response
    const [couponCode, setCouponCode] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);
    const dispatchs = useDispatch();

    const router = useRouter();
    const deliveryCharge = parseFloat(router.query.deliveryCharge || 0);
    const { appliedCoupon } = useSelector((state) => state.cart);
    const { couponId } = router.query; // Get the applied coupon ID from the query parameters


    const [billingFirstName, setBillingFirstName] = useState('');
    const [billingLastName, setBillingLastName] = useState('');
    const [billingEmail, setBillingEmail] = useState('');
    const [billingPhone, setBillingPhone] = useState('');
    const [billingAddress1, setBillingAddress1] = useState('');
    const [billingAddress2, setBillingAddress2] = useState('');
    const [billingCity, setBillingCity] = useState('');
    const [billingState, setBillingState] = useState('');
    const [billingPin, setBillingPin] = useState('');
    const [billingCountry, setBillingCountry] = useState('');
    const [shippingFirstName, setShippingFirstName] = useState('');
    const [shippingLastName, setShippingLastName] = useState('');
    const [shippingEmail, setShippingEmail] = useState('');
    const [shippingPhone, setShippingPhone] = useState('');
    const [shippingAddress1, setShippingAddress1] = useState('');
    const [shippingAddress2, setShippingAddress2] = useState('');
    const [shippingCity, setShippingCity] = useState('');
    const [shippingState, setShippingState] = useState('');
    const [shippingPin, setShippingPin] = useState('');
    const [shippingCountry, setShippingCountry] = useState('');
    const [orders, setOrders]=useState('');
    const [paymentMethod, setPaymentMethod] = useState(''); // State variable for payment method
    let orderData = {};
    const [error, setError] = useState(null);
    const [errorcoupon, setErrorcoupon] = useState(null);
    const [errorpin, setErrorpin] = useState(null);

    const totalWithDelivery = parseFloat(total) + parseFloat(deliveryCharge);

    
    const placeOrder = async () => {
        // Create the order data object
        const orderData = {
          billing_first_name: billingFirstName,
          billing_last_name: billingLastName,
          billing_email: billingEmail,
          billing_phone: billingPhone,
          billing_country: 'India',
          billing_state: 'Karnataka',
          billing_city: 'Bangalore',
          billing_pin: billingPin,
          billing_address_1: billingAddress1,
          billing_address_2: billingAddress2,
          shipping_first_name: shippingFirstName,
          shipping_last_name: shippingLastName,
          shipping_email: shippingEmail,
          shipping_phone: shippingPhone,
          shipping_country: 'India',
          shipping_state: 'Karnataka',
          shipping_city: 'Bangalore',
          shipping_pin: shippingPin,
          shipping_address_1: shippingAddress1,
          shipping_address_2: shippingAddress2,
          order_notes:orders,
          mode_of_payment: paymentMethod === 'Cash On Delivery' ? 'Cash On Delivery' : 'Online',
          order: cartProducts.map((item) => ({
            product_id: item.id,
            quantity: item?.quantity,
          })),
          coupon_code: couponCode,
        };
        console.log("orderdata", orderData)
      
        try {
          const accessToken = localStorage.getItem('accessToken');
          if (!accessToken) {
            throw new Error('User not logged in');
          }
      
          const response = await axios.post(
            'https://jap.digisole.in/api/v1/order/place/',
            orderData,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
              },
            }
          );
          // Handle successful API response 
          console.log('Order placed successfully:', response.data);
          return response.data; // Return the response data from the placeOrder function
        } catch (error) {
            if (error.response) {
              // Check if the error is related to PIN code validation
              if (error.response.data.message.includes('Products are not deliverable for the given pincode')) {
                // Handle PIN code validation error
                console.error(error.response.data.message);
                setErrorpin(error.response.data.message);
              } else {
                console.error('ERROR:', error.response.data);
                setError('ERROR: ' + error.response.data.message);
              }
            } else {
              console.error('ERROR:', error.message);
              setError('ERROR: ' + error.message);
            }
          }
        };
        
    const displayRazorpay = (razorpay_order_id, receiptId) => {
    return new Promise(async (resolve, reject) => {
        try {
        // const orderResponse = await placeOrder();
        const amount = couponResponse ? parseFloat(couponResponse.total_price_with_coupon_dicount) * 100 : totalWithDelivery * 100;
        // const razorpay_order_id = orderResponse.order.razorpay_order_id;
        console.log("razorpay_order_id 111", razorpay_order_id);
        // const receiptId = orderResponse.order.receipt;
        // console.log(receiptId)
    
        // Generate the Razorpay signature
        function generateRazorpaySignature() {
            const data = razorpay_order_id + '|' + amount + '|INR'; // Concatenate order_id, amount, and currency using '|'
            const secret = '69unAv9G1o0izHpG8uD43VXy'; // Replace with your actual Razorpay API secret
    
            const hmac = CryptoJS.HmacSHA256(data, secret);
            const razorpay_signature = hmac.toString(CryptoJS.enc.Hex);
            return razorpay_signature;
        }
    
        const options = {
        //   key: 'rzp_test_h3JBBlCZKqfz3j',
            key:'rzp_test_C6y0UqyRMkEWqB',
            amount: amount,
            currency: 'INR',
            name: 'Your Store',
            description: 'Purchase Description',
            image: '/assets/img/logo/japlogo.png',
            order_id: razorpay_order_id,
            // Rest of the code remains the same...
            handler: async function (response) {
                try {
                  // Handle the Razorpay response
                  if (response.razorpay_payment_id) {
                    // Payment successful, now verify the payment
                    const paymentVerificationData = {
                      razorpay_order_id: razorpay_order_id,
                      razorpay_payment_id: response.razorpay_payment_id,
                      razorpay_signature: response.razorpay_signature,
                      // Add any other data needed for verification
                    };
                    console.log("Payment Verification Data:", paymentVerificationData);
              
                    const accessToken = localStorage.getItem('accessToken');
              
                    // Make a POST request to your verify payment API
                    const verifyPaymentResponse = await axios.post(
                      'https://jap.digisole.in/api/v1/order/verify-payment',
                      paymentVerificationData,
                      {
                        headers: {
                          Authorization: `Bearer ${accessToken}`,
                          "Content-Type": "application/json",
                        },
                      }
                    );
              
                    // Check the response from the verify payment API
                    console.log("Verify Payment Response:", verifyPaymentResponse.data);
                    if (verifyPaymentResponse.data.message === 'Payment done successfully.') {
                      // Payment verified successfully
                      console.log('Payment Verified:', verifyPaymentResponse.data);
                    //   // Clear the cart
                    //   // Redirect to success page for Cash on Delivery with receipt ID as a query parameter
                    window.location.href = `/success?receipt_id=${receiptId}`;
                    dispatchs(clear_cart());
                    //   // Resolve the promise with the success response
                      resolve(response);
                    } else {
                      // Payment verification failed
                      console.error('Payment Verification Failed:', verifyPaymentResponse.data);
              
                      // Reject the promise with the error response
                      reject(verifyPaymentResponse);
                    }
                  } else {
                    // Payment failed or canceled
                    console.error('Payment Failed or Canceled:', response);
                    // Reject the promise with the error response
                    reject(response);
                  }
                } catch (error) {
                  console.error('Error verifying payment:', error.message);
                  // Reject the promise with the error response
                  reject(error);
                }
              },              
        };
    
        const rzp = new window.Razorpay(options);
    
        // Generate the Razorpay signature
        const razorpay_signature = generateRazorpaySignature();
    
        // Set the signature in the options
        options.razorpay_signature = razorpay_signature;
    
        rzp.open();
        } catch (error) {
        console.error('Error initializing Razorpay:', error.message);
        // Reject the promise with the error response
        reject(error);
        }
    });
    };      
      
    useEffect(() => {
        // Store the previous page (checkout page) in the session storage
        sessionStorage.setItem('previousPage', '/checkout');
    }, []);
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    
    useEffect(() => {
        // If couponId is present in the URL, set it as the couponCode state
        if (couponId) {
            setCouponCode(couponId);
        }
    }, [couponId]);
    // console.log("couponid", couponId)

    const handleApplyCoupon = async (event) => {
        event.preventDefault();
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            // User is not logged in, display an error message or redirect to the login page
            setErrorcoupon('You need to log in to apply a coupon.');
            // Alternatively, you can redirect to the login page using Next.js router
            // router.push('/login');
            return;
          }
        try {
            const response = await axios.post('https://jap.digisole.in/api/v1/cart/apply-coupon', {
                coupon_code: couponCode,
            }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            console.log('Coupon applied successfully:', response.data.cart);
            // Handle success response
            setCouponResponse(response.data.cart); // Set the coupon response in state
        } catch (error) {
            if (error.response) {
                console.error('Coupon application failed:', error.response.data);
                // Handle error response
                setErrorcoupon('Failed to apply the coupon. Please try again.');

            } else {
                console.error('Coupon application failed:', error.message);
            }
        }
    };

    const handlePayment = async (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Check if the user is logged in
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            // User is not logged in, redirect to the login page
            window.location.href = '/login?from=checkout';
            return;
        }

        // Validate the form fields
        const form = document.getElementById('checkout-form');
        const isValid = form.checkValidity();
        if (!isValid) {
            form.reportValidity();
            return;
        }

        try {
            // Place the order
            let orderData = {
                billing_first_name: billingFirstName,
                billing_last_name: billingLastName,
                billing_email: billingEmail,
                billing_phone: billingPhone,
                billing_country: 'India',
                billing_state: 'Karnataka',
                billing_city: 'Bangalore',
                billing_pin: billingPin,
                billing_address_1: billingAddress1,
                billing_address_2: billingAddress2,
                shipping_first_name: shippingFirstName,
                shipping_last_name: shippingLastName,
                shipping_email: shippingEmail,
                shipping_phone: shippingPhone,
                shipping_country: 'India',
                shipping_state: 'Karnataka',
                shipping_city: 'Bangalore',
                shipping_pin: shippingPin,
                shipping_address_1: shippingAddress1,
                shipping_address_2: shippingAddress2,
                mode_of_payment: paymentMethod === 'Cash On Delivery' ? 'Cash On Delivery' : 'Online',
                order: cartProducts.map((item) => ({
                    product_id: item.id,
                    quantity: item?.quantity,
                })),
                coupon_code: couponCode,
            };

            if (paymentMethod === 'Cash On Delivery') {
                // Set the mode_of_payment for Cash On Delivery
                orderData.mode_of_payment = 'Cash On Delivery';
                
                // Place the order for Cash On Delivery
                const placeOrderResponse = await placeOrder(orderData);
                
                const receiptId = placeOrderResponse.order.receipt;
                console.log("111",receiptId);
          
                // Redirect to success page for Cash on Delivery with receipt ID as a query parameter
                window.location.href = `/success?receipt_id=${receiptId}`;
                dispatchs(clear_cart());
              } else {
                // For Online payment, place the order and then display Razorpay
                const placeOrderResponse = await placeOrder(orderData);
                const receiptId = placeOrderResponse.order.receipt;
                const razorpayOrderId = placeOrderResponse.order.razorpay_order_id; // Get razorpay_order_id
                console.log("razorpay_order_id 222", razorpayOrderId);
                console.log("22",receiptId);
                
                // Display Razorpay
                try {
                  const razorpayResponse = await displayRazorpay(razorpayOrderId, receiptId);
                  if (razorpayResponse.razorpay_payment_id) {
                    // Payment is successful
                    console.log('Razorpay payment successful:', razorpayResponse);
                    // Clear the cart
                    dispatchs(clear_cart());
                    // Redirect to success page for online payment with receipt ID as a query parameter
                    window.location.href = `/success?receipt_id=${receiptId}`;
                  } else {
                    // Payment is not successful
                    console.error('Razorpay payment failed:', razorpayResponse);
                    // Handle any Razorpay payment errors if needed
                  }
                } catch (error) {
                  // Handle any Razorpay payment errors if needed
                  console.error('Razorpay payment error:', error);
                }
              }
            } catch (error) {
              console.error('Failed to place order:', error.message);
              // Handle any other errors during order placement if needed
            }
          };

    return (
        <>
            <section className="coupon-area pt-115 pb-30">
                <div className="container small-container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="coupon-accordion">
                                <h3>Returning customer? <span id="showlogin" onClick={() => dispatch("returnCustomer")}>Click here to login</span></h3>
                                <div id="checkout-login" className={`coupon-content ${state.isActive ? "danger" : "d-block"}`}>
                                    <div className="coupon-info">
                                        <p className="coupon-text">Quisque gravida turpis sit amet nulla posuere lacinia. Cras
                                            sed est
                                            sit amet ipsum luctus.</p>
                                        <form action="#">
                                            <p className="form-row-first">
                                                <label>Username or email <span className="required">*</span></label>
                                                <input type="text" />
                                            </p>
                                            <p className="form-row-last">
                                                <label>Password <span className="required">*</span></label>
                                                <input type="text" />
                                            </p>
                                            <p className="form-row d-flex">
                                                <button className="bd-fill__btn" type="submit">Login</button>
                                                <label>
                                                    <input className="e-check-input" id="cbox" type="checkbox" />
                                                    Remember me
                                                </label>
                                            </p>
                                            <p className="lost-password">
                                                <a href="#">Lost your password?</a>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="coupon-accordion">
                                <h3>Have a coupon? <span id="showcoupon" onClick={() => dispatch("coupon")}>Click here to enter your code</span></h3>
                                <div id="checkout_coupon" className={`coupon-checkout-content ${state.isActiveA ? "danger" : "d-block"}`}>
                                    <div className="coupon-info">
                                        <form action="#">
                                            <p className="checkout-coupon">
                                                <input
                                                    id="coupon_code"
                                                    className="input-text"
                                                    name="coupon_code"
                                                    placeholder="Coupon code"
                                                    type="text"
                                                    value={couponCode}
                                                    onChange={(e) => setCouponCode(e.target.value)}
                                                />
                                                <button
                                                    className="bd-border__btn"
                                                    name="apply_coupon"
                                                    type="submit"
                                                    onClick={handleApplyCoupon}
                                                >

                                                    Apply coupon
                                                </button>
                                            </p>
                                            {/* Coupon status messages */}
                                            {couponResponse && (
                                                <div className="coupon-applied-message">
                                                <p>Coupon applied successfully!</p>
                                                {/* You can also display details about the applied coupon here */}
                                                <p>Coupon Code: {couponResponse.coupon.code}</p>
                                                <p>Coupon Discount: Rs.{couponResponse.coupon_discount.toFixed(2)}</p>
                                                </div>
                                            )}

                                            {errorcoupon && (
                                                <div className="coupon-error-message">
                                                <p>Error: {errorcoupon}</p>
                                                </div>
                                            )}
                                        </form>
                                        {couponId && <p>Applied Coupon ID: {couponId}</p>}
                                        {errorcoupon && <p style={{ color: 'red' }}>{errorcoupon} <Link href="/login">Login!!</Link></p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="checkout-area pb-100">
                <div className="container small-container">
                    <form action="#" id='checkout-form' onSubmit={handlePayment}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="checkbox-form">
                                    <h3>Billing Details</h3>
                                    <div className="row">
                                        <div className="col-md-12">
                                            {error && <div style={{ color: 'red' }}>{error}</div>}
                                            <div className="checkout-form-list">
                                                <label>Country <span className="required">*</span></label>
                                                <input
                                                    type="text"
                                                    id="billing-country"
                                                    value="India"
                                                    onChange={(e) => setBillingCountry(e.target.value)}
                                                    required
                                                    disabled // Disable the input field so the user can't edit it
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>First Name <span className="required">*</span></label>
                                                <input type="text" placeholder="" id='billing-first-name' value={billingFirstName} onChange={(e) => { setBillingFirstName(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Last Name <span className="required">*</span></label>
                                                <input type="text" placeholder="" id='billing-last-name' value={billingLastName} onChange={(e) => { setBillingLastName(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <label>Company Name</label>
                                                <input type="text" placeholder="" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <label>Address <span className="required">*</span></label>
                                                <input type="text" placeholder="Street address" id="billing-address1" value={billingAddress1} onChange={(e) => { setBillingAddress1(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <input type="text" placeholder="Apartment, suite, unit etc. (optional)" id="billing-address2" value={billingAddress2} onChange={(e) => { setBillingAddress2(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <label>Town / City <span className="required">*</span></label>
                                                <input type="text" placeholder="Town / City" id="billing-city" value="Bangalore" onChange={(e) => { setBillingCity(e.target.value) }} required disabled />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>State / County <span className="required">*</span></label>
                                                <input type="text" placeholder="" id="billing-state" value="Karnataka" onChange={(e) => { setBillingState(e.target.value) }} required disabled/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Postcode / Zip <span className="required">*</span></label>
                                                <input type="text" placeholder="Postcode / Zip" id="billing-pin" value={billingPin} onChange={(e) => { setBillingPin(e.target.value) }} required />
                                            </div>
                                        {errorpin && <p style={{ color: 'red' }}>{errorpin}</p>} {/* Render the error message if present */}
                                        </div>

                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Email Address <span className="required">*</span></label>
                                                <input type="email" placeholder="" id='billing-email' value={billingEmail} onChange={(e) => { setBillingEmail(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Phone <span className="required">*</span></label>
                                                <input type="text" placeholder="Phone" id='billing-phone' value={billingPhone} onChange={(e) => { setBillingPhone(e.target.value) }} required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list create-acc d-flex align-content-center">
                                                <label onClick={() => dispatch("account")}>Create an account?</label>
                                            </div>
                                            <div id="cbox_info" className={`checkout-form-list create-account ${state.isActiveB ? "danger" : "d-block"}`}>
                                                <p>Create an account by entering the information below. If you are a
                                                    returning customer please login at the top of the page.</p>
                                                <label>Account password <span className="required">*</span></label>
                                                <input type="password" placeholder="password" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="different-address">
                                        <div className="ship-different-title">
                                            <label onClick={() => dispatch("address")}>Ship to a different address?</label>
                                        </div>
                                        <div id="ship-box-info" className={`${state.isActiveC ? "danger" : "d-block"}`}>
                                            <div className="row">
                                                <div className="col-md-12">
                                                <div className="checkout-form-list">
                                                <label>Country <span className="required">*</span></label>
                                                <input
                                                    type="text"
                                                    id="billing-country"
                                                    value="India"
                                                    onChange={(e) => setBillingCountry(e.target.value)}
                                                    disabled // Disable the input field so the user can't edit it
                                                />
                                            </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>First Name <span className="required">*</span></label>
                                                        <input type="text" placeholder="" id="shipping-first-name" value={shippingFirstName} onChange={(e) => { setShippingFirstName(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>Last Name <span className="required">*</span></label>
                                                        <input type="text" placeholder=""  id="shipping-last-name" value={shippingLastName} onChange={(e) => { setShippingLastName(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="checkout-form-list">
                                                        <label>Company Name</label>
                                                        <input type="text" placeholder="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="checkout-form-list">
                                                        <label>Address <span className="required">*</span></label>
                                                        <input type="text" placeholder="" id='shipping-address_1' value={shippingAddress1} onChange={(e) => { setShippingAddress1(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="checkout-form-list">
                                                        <input type="text" placeholder="Apartment, suite, unit etc. (optional)" id='shipping-address_1' value={shippingAddress2} onChange={(e) => { setShippingAddress2(e.target.value) }}  />

                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="checkout-form-list">
                                                        <label>Town / City <span className="required">*</span></label>
                                                        <input type="text" placeholder="Town / City" id="billing-city" value="Bangalore" onChange={(e) => { setBillingCity(e.target.value) }} disabled />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>State / County <span className="required">*</span></label>
                                                        <input type="text" placeholder="" id="billing-state" value="Karnataka" onChange={(e) => { setBillingState(e.target.value) }} disabled/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>Postcode / Zip <span className="required">*</span></label>
                                                        <input type="text" placeholder="Postcode / Zip" id="shipping-pin" value={shippingPin} onChange={(e) => { setShippingPin(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>Email Address <span className="required">*</span></label>
                                                        <input type="email" placeholder="" id="shipping-email" value={shippingEmail} onChange={(e) => { setShippingEmail(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>Phone <span className="required">*</span></label>
                                                        <input type="text" placeholder="Phone" id="shipping-phone" value={shippingPhone} onChange={(e) => { setShippingPhone(e.target.value) }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="order-notes">
                                            <div className="checkout-form-list">
                                                <label>Order Notes</label>
                                                <textarea  cols="30" rows="10"
                                                    placeholder="Notes about your order, e.g. special notes for delivery."  id="orders" value={orders} onChange={(e) => { setOrders(e.target.value) }}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="your-order mb-30 ">
                                    <h3>Your order</h3>
                                    <div className="your-order-table table-responsive">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="product-name">Product</th>
                                                    <th className="product-total">Total</th>
                                                    <th className="product-total">Weight</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartProducts.map((item, index) => (
                                                    <tr className="cart_item" key={index}>
                                                        <td className="product-name">
                                                            {item.name} <strong className="product-quantity"> × {item?.quantity}</strong>
                                                        </td>
                                                        <td className="product-total">
                                                            <span className="amount">Rs.{item?.quantity * item.price.toFixed(2)}</span>
                                                        </td>
                                                        <td className="product-name">
                                                            {item.weight}
                                                        </td>
                                                    </tr>
                                                ))}
                                                {/* {orderData.order.push({ product_id: item.id, quantity: item.quantity })} */}
                                            </tbody>
                                            <tfoot>
                                                {couponResponse ? (
                                                    <>
                                                        <tr className="border-bottom-1 w-100">
                                                            <td className="text-left tr-price">Total Items:</td>
                                                            <td className="text-right tr-price">{couponResponse.total_items}</td>
                                                        </tr>
                                                        <tr className="border-bottom-1 w-100">
                                                            <td className="text-left tr-price">Sub Total:</td>
                                                            <td className="text-right tr-price">Rs. {couponResponse.sub_total.toFixed(2)}</td>
                                                        </tr>
                                                        <tr className="border-bottom-1 w-100">
                                                            <td className="text-left tr-price">Total Discount:</td>
                                                            <td className="text-right tr-price">- Rs. {couponResponse.total_discount.toFixed(2)}</td>
                                                        </tr>
                                                        <tr className="border-bottom-1 w-100">
                                                            <td className="text-left tr-price">GST:</td>
                                                            <td className="text-right tr-price">+ Rs. {couponResponse.gst_charge.toFixed(2)}</td>
                                                        </tr>
                                                        <tr className="border-bottom-1 w-100">
                                                            <td className="text-left tr-price">Delivery Charge:</td>
                                                            <td className="text-right tr-price">+ Rs. {couponResponse.delivery_charge.toFixed(2)}</td>
                                                        </tr>
                                                        <tr className="border-bottom-1 w-100">
                                                            <td className="text-left tr-price font-bold">Cumulative Total:</td>
                                                            <td className="text-right tr-price font-bold">Rs. {(couponResponse.total_price_with_gst_delivery_charge.toFixed(2))}</td>
                                                        </tr>
                                                        <tr className="border-bottom-1 w-100">
                                                            <td className="text-left tr-price">Coupon Discount:</td>
                                                            <td className="text-right tr-price">- Rs. {couponResponse.coupon_discount.toFixed(2)}</td>
                                                        </tr>
                                                        <tr className="border-bottom-1 w-100 total-bg-table-tr">
                                                            <td className="text-left tr-price font-bold">Total:</td>
                                                            <td className="text-right tr-price font-bold">Rs. {couponResponse.total_price_with_coupon_dicount.toFixed(2)}</td>
                                                        </tr>
                                                    </>
                                                ) : (

                                                    <>
                                                        <tr className="cart-subtotal">
                                                            <th>Cart Subtotal</th>
                                                            <td><span className="amount">Rs.{(total.toFixed(2))}</span></td>
                                                        </tr>
                                                        <tr className="border-bottom-1 w-100">
                                                            <td className="text-left tr-price">Delivery Charges:</td>
                                                            <td className="text-right tr-price">+ Rs. {deliveryCharge.toFixed(2)}</td>
                                                        </tr>
                                                        <tr className="order-total">
                                                            <th>Order Total</th>
                                                            <td><strong><span className="amount">Rs.{(totalWithDelivery.toFixed(2))}</span></strong></td>
                                                        </tr>
                                                    </>
                                                )}
                                            </tfoot>
                                        </table>
                                    </div>
                                    <div className="payment-method">
                                        <select id="mode_of_payment" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                                            <option value="Online">Online</option>
                                            <option value="Cash On Delivery">Cash on Delivery</option>
                                        </select>

                                        <div className="order-button-payment mt-20">
                                            <button type="submit" className="bd-fill__btn" >
                                                Place order
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </section>
        </>
    );
};

export default CheckoutSection;