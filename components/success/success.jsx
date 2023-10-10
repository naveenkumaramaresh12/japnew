import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import axios from 'axios';
import { clear_cart } from '../../redux/features/cart-slice';

const Success = () => {
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState(null);
  const { receipt_id } = router.query;
  const dispatchs = useDispatch();
  
  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken'); // Get the access token from the localStorage or wherever it's stored
    
        // Make a GET request to fetch the order details using the receipt ID and include the access token in the headers
        const response = await axios.get(
          `https://jap.digisole.in/api/v1/order/placed/detail/${receipt_id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
    
        // Assuming the API response returns the order details in the 'data' property
        setOrderDetails(response.data.order);
        console.log("order detail",response.data.order);
      } catch (error) {
        console.error('Failed to fetch order details:', error.response.data);
      }
    };

    if (receipt_id) {
      fetchOrderDetails();
    }
  }, [receipt_id]);

  useEffect(() => {
    dispatchs(clear_cart());
  })
  return (
    <div className="bd-register__area pt-115 pb-130">
      <div className="container small-container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="signup-form-wrapper">
              <div className="bd-postbox__contact">
                <h2>Thank you for shopping with us!</h2>
                {orderDetails ? (
                  <div>
                    <h3>Order Details</h3>
                    <p>Billing First Name: {orderDetails.billing_first_name}</p>
                    <p>Billing Last Name: {orderDetails.billing_last_name}</p>
                    <p>Billing Email: {orderDetails.billing_email}</p>
                    <p>Billing Phone: {orderDetails.billing_phone}</p>
                    <p>Billing Address Line 1: {orderDetails.billing_address_1}</p>
                    <p>Billing Address Line 2: {orderDetails.billing_address_2}</p>
                    <p>Billing City: {orderDetails.billing_city}</p>
                    <p>Billing State: {orderDetails.billing_state}</p>
                    <p>Billing Country: {orderDetails.billing_country}</p>
                    <p>Billing PIN: {orderDetails.billing_pin}</p>
                    <p>Mode of Payment: {orderDetails.mode_of_payment}</p>
                    <p>Order Status: {orderDetails.order_status}</p>
                    <p>Payment Status: {orderDetails.payment_status}</p>
                    {/* Display product details */}
                    {orderDetails.products.map((product) => (
                      <div key={product.id}>
                        <p>Product Name: {product.name}</p>
                        <p>Product Price: {product.price}</p>
                        <p>Product Quantity: {product.quantity}</p>
                        <p>Product Weight: {product.weight}</p>
                      </div>
                    ))}
                    <p>Sub Total: {orderDetails.sub_total}</p>
                    <p>Total Discount: {orderDetails.total_discount}</p>
                    <p>GST Charge: {orderDetails.gst_charge}</p>
                    <p>Delivery Charge: {orderDetails.delivery_charge}</p>
                    <p>Total Price: {orderDetails.total_price_with_coupon_dicount}</p>
                    
                      </div>
                    ) : (
                      <p>Loading order details...</p>
                    )}
                </div>
              {/* Check if a coupon is applied before displaying coupon details */}
            {orderDetails?.coupon && (
              <div>
                <h3>Coupon Applied</h3>
                <p>Coupon Name: {orderDetails.coupon.name}</p>
                <p>Coupon Code: {orderDetails.coupon.code}</p>
                <p>Coupon Discount: {orderDetails.coupon.discount}</p>
                {/* Add other coupon details as needed */}
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
