import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartProducts: [],
  appliedCoupon: null, // New state to store the applied coupon
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cart_product: (state, { payload: item }) => {
      if (!state.cartProducts) {
        state.cartProducts = [];
      }
    
      const productIndex = state.cartProducts.findIndex(
        (product) => product.id === item.id
      );
    
      if (productIndex >= 0) {
        // If the product already exists in the cart, update its quantity
        state.cartProducts[productIndex].quantity += 1;
        toast.info('Increase Product Quantity', {
          position: 'top-left',
        });
      } else {
        // Otherwise, add the product as a new entry in the cart
        const tempProduct = { ...item, quantity: 1 };
        state.cartProducts.push(tempProduct);
        toast.success(`${tempProduct.name} added to cart`, {
          position: 'top-left',
        });
      }
    },
    
    decrease_quantity: (state, { payload: item }) => {
      if (!state.cartProducts) {
        return;
      }

      const productIndex = state.cartProducts.findIndex(
        (product) => product.id === item.id
      );
      if (productIndex >= 0 && state.cartProducts[productIndex].quantity > 1) {
        state.cartProducts[productIndex].quantity -= 1;
        toast.error('Decrease cart quantity', {
          position: 'top-left',
        });
      }
    },

    remove_cart_product: (state, { payload: item }) => {
      if (!state.cartProducts) {
        return;
      }

      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== item.id
      );
      toast.error('Remove from your cart', {
        position: 'top-left',
      });
    },

    clear_cart: () => initialState,

    setCartProducts: (state, { payload }) => {
      state.cartProducts = payload;
    },
    setAppliedCoupon: (state, { payload }) => {
      state.appliedCoupon = payload;
    },
  },
});

export const {
  cart_product,
  remove_cart_product,
  decrease_quantity,
  clear_cart,
  setCartProducts,
  setAppliedCoupon 
} = cartSlice.actions;

export const selectCartProducts = (state) => state.cart.cartProducts;

export default cartSlice.reducer;
