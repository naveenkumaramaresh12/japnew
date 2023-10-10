import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useCartInfo = () => {
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const [deliveryCharge, setDeliveryCharges] = useState(0); // New state to store delivery charges
  const cartItems = useSelector((state) => state.cart.cartProducts);
  const couponResponse = useSelector((state) => state.cart.couponResponse); // Get the coupon response from Redux store

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      const cart = cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity, discount } = cartItem; // Assuming each cartItem has a discount field
          const itemTotal = price * quantity;
          const discountedPrice = calculateDiscountedPrice(price, discount); // Function to calculate discounted price
          cartTotal.total += discountedPrice * quantity;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      if (couponResponse) {
        setTotal(couponResponse.total_price_with_gst); // Set total without delivery charges from coupon response
        setDeliveryCharges(couponResponse.delivery_charges); // Set delivery charges from coupon response
      } else {
        setTotal(cart.total);
        setDeliveryCharges(0); // Set delivery charges to 0 if not available
      }

      setQuantity(cart.quantity);
    } else {
      setTotal(0);
      setQuantity(0);
      setDeliveryCharges(0); // Set delivery charges to 0 if cart is empty
    }
  }, [cartItems, couponResponse]);

  // Function to calculate discounted price based on the discount field
  const calculateDiscountedPrice = (price, discount) => {
    if (discount) {
      // Assuming discount is a percentage value (e.g., 10 for 10% discount)
      const discountedAmount = (discount / 100) * price;
      return price - discountedAmount;
    } else {
      return price; // Return the original price if no discount is available
    }
  };

  return {
    quantity,
    total,
    deliveryCharge,
  };
};

export default useCartInfo;
