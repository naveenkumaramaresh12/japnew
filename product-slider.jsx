import React, { useReducer, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useCartInfo from '../../hooks/use-cart-info';
import axios from 'axios';

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

const CheckoutSection = () => {
    const { cartProducts } = useSelector(state => state.cart);
    const { total } = useCartInfo();
    
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, []);
    
    const placeOrder = async () => {
        // Collect user input from form or input fields
        const billingFirstName = document.getElementById('billing-first-name');
        const billingLastName = document.getElementById('billing-last-name');
        const billingEmail = document.getElementById('billing-email');
        const billingPhone = document.getElementById('billing-phone');
        const billingCountry = document.getElementById('billing-country');
        const billingState = document.getElementById('billing-state');
        const billingCity = document.getElementById('billing-city');
        const billingPin = document.getElementById('billing-pin');
        const billingAddress1 = document.getElementById('billing-address1');
        const modeOfPayment = document.getElementById('mode-of-payment');
        const product1Id = document.getElementById('product1-id');
        const product1Quantity = document.getElementById('product1-quantity');
        const product2Id = document.getElementById('product2-id');
        const product2Quantity = document.getElementById('product2-quantity');
        const couponCode = document.getElementById('coupon-code');

          // Validate the input fields
        if (billingFirstName === '' || billingLastName === '' || billingEmail === '' ||billingPhone === '' || billingCountry === '' || billingState === '' || billingCity === '' || billingPin === '' || billingAddress1 === '') {
            alert('Please fill in all required fields.');
            return;
        }
      
        // Create the order data object
        const orderData = {
          billing_first_name: billingFirstName,
          billing_last_name: billingLastName,
          billing_email: billingEmail,
          billing_phone: billingPhone,
          billing_country: billingCountry,
          billing_state: billingState,
          billing_city: billingCity,
          billing_pin: billingPin,
          billing_address_1: billingAddress1,
          mode_of_payment: modeOfPayment,
          order: [
            { product_id: parseInt(product1Id), quantity: parseInt(product1Quantity) },
            { product_id: parseInt(product2Id), quantity: parseInt(product2Quantity) }
          ],
          coupon_code: couponCode
        };
      
        try {
          const response = await axios.post('https://jap.digisole.in/api/v1/order/place', orderData);
      
          // Handle successful API response
          console.log('Order placed successfully:', response.data);
          // Optionally, you can reset the form or navigate to a success page
        } catch (error) {
          // Handle error
          console.error('Failed to place order:', error);
        }
      };
    

    const displayRazorpay = async () => {
      const options = {
        key: 'rzp_test_IAd5ShSekzTlHC',
        amount: total * 100, // Replace with the actual amount to be paid
        currency: 'INR',
        name: 'Your Store',
        description: 'Purchase Description',
        image: '/assets/img/logo/japlogo.png',
        handler: (response) => {
          // Handle the successful payment response
          console.log('Payment Successful!', response);
          // Call your placeOrder() function or perform other actions here
        },
        prefill: {
          email: 'customer@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#528FF0',
        },
        modal: {
            ondismiss: () => {
              // Handle the cancellation event here
              console.log('Payment cancelled');
              // Close the Razorpay payment window manually if required
              const paymentBox = document.querySelector('.razorpay-payment-box');
              if (paymentBox) {
                paymentBox.style.display = 'none';
              }
              // Scroll to a desired position on cancellation
              window.scrollTo(0, 0);
            },
          },
      };
  
      const rzp = new window.Razorpay(options);
      rzp.open();
    };
    const handlePayment = () => {
        if (placeOrder()) {
          displayRazorpay();
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
                                                    <input className="e-check-input" id="cbox" type="checkbox"/>
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
                                                <input type="text" placeholder="Coupon Code" id="coupon-code"/>
                                                <button className="bd-fill__btn" type="submit">Apply Coupon</button>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="checkout-area pb-100">
                <div className="container small-container">
                    <form action="#">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="checkbox-form">
                                    <h3>Billing Details</h3>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="country-select">
                                                <label>Country <span className="required">*</span></label>
                                                <select id='billing-country'>
                                                    <option defaultValue="volvo">Bangladesh</option>
                                                    <option defaultValue="saab">Algeria</option>
                                                    <option defaultValue="mercedes">Afghanistan</option>
                                                    <option defaultValue="audi">Ghana</option>
                                                    <option defaultValue="audi2">Albania</option>
                                                    <option defaultValue="audi3">Bahrain</option>
                                                    <option defaultValue="audi4">Colombia</option>
                                                    <option defaultValue="audi5">Dominican Republic</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>First Name <span className="required">*</span></label>
                                                <input type="text" placeholder="" id='billing-first-name'/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Last Name <span className="required">*</span></label>
                                                <input type="text" placeholder="" id='billing-last-name'/>
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
                                                <input type="text" placeholder="Street address" id="billing-address1"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <label>Town / City <span className="required">*</span></label>
                                                <input type="text" placeholder="Town / City" id="billing-city"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>State / County <span className="required">*</span></label>
                                                <input type="text" placeholder="" id="billing-state"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Postcode / Zip <span className="required">*</span></label>
                                                <input type="text" placeholder="Postcode / Zip" id="billing-pin"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Email Address <span className="required">*</span></label>
                                                <input type="email" placeholder="" id='billing-email'/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Phone <span className="required">*</span></label>
                                                <input type="text" placeholder="Phone" id='billing-phone'/>
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
                                                    <div className="country-select">
                                                        <label>Country <span className="required">*</span></label>
                                                        <select id='billing-country'>
                                                            <option defaultValue="volvo">Bangladesh</option>
                                                            <option defaultValue="saab">Algeria</option>
                                                            <option defaultValue="mercedes">Afghanistan</option>
                                                            <option defaultValue="audi">Ghana</option>
                                                            <option defaultValue="audi2">Albania</option>
                                                            <option defaultValue="audi3">Bahrain</option>
                                                            <option defaultValue="audi4">Colombia</option>
                                                            <option defaultValue="audi5">Dominican Republic</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>First Name <span className="required">*</span></label>
                                                        <input type="text" placeholder="" id='billing-first-name'/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>Last Name <span className="required">*</span></label>
                                                        <input type="text" placeholder="" id='billing-last-name'/>
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
                                                        <input type="text" placeholder="Street address" id="billing-address1"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="checkout-form-list">
                                                        <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="checkout-form-list">
                                                        <label>Town / City <span className="required">*</span></label>
                                                        <input type="text" placeholder="Town / City" id="billing-city"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>State / County <span className="required">*</span></label>
                                                        <input type="text" placeholder="" id="billing-state"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>Postcode / Zip <span className="required">*</span></label>
                                                        <input type="text" placeholder="Postcode / Zip" id="billing-pin"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>Email Address <span className="required">*</span></label>
                                                        <input type="email" placeholder="" id='billing-email'/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>Phone <span className="required">*</span></label>
                                                        <input type="text" placeholder="Phone" id='billing-phone'/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="order-notes">
                                            <div className="checkout-form-list">
                                                <label>Order Notes</label>
                                                <textarea id="checkout-mess" cols="30" rows="10"
                                                    placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
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
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartProducts.map((item, index) => (
                                                    <tr className="cart_item" key={index}>
                                                        <td className="product-name">
                                                            {item.productTitle} <strong className="product-quantity"> × {item?.quantity}</strong>
                                                        </td>
                                                        <td className="product-total">
                                                            <span className="amount">Rs.{item?.quantity * item.price}</span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                            <tfoot>
                                                <tr className="cart-subtotal">
                                                    <th>Cart Subtotal</th>
                                                    <td><span className="amount">Rs.{parseFloat(total)}</span></td>
                                                </tr>
                                                <tr className="order-total">
                                                    <th>Order Total</th>
                                                    <td><strong><span className="amount">Rs.{parseFloat(total)}</span></strong>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                    
                                    <div className="payment-method">
                                        <div className="accordion" id="checkoutAccordion">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="paypalThree">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#paypal" aria-expanded="false" aria-controls="paypal">
                                                        PayPal
                                                    </button>
                                                </h2>
                                                <div id="paypal" className="accordion-collapse collapse" aria-labelledby="paypalThree"
                                                    data-bs-parent="#checkoutAccordion">
                                                    <div className="accordion-body">
                                                        Pay via PayPal; you can pay with your credit card if you don’t have
                                                        a
                                                        PayPal account.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="order-button-payment mt-20">
                                            <button type="submit" className="bd-fill__btn" onClick={handlePayment}>
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