// Redux cart slice file (redux_features_cart_slice.js)

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add_to_cart: (state, action) => {
      state.push(action.payload);
    },
    // other reducer functions...
  },
});

export const { add_to_cart } = cartSlice.actions;

export default cartSlice.reducer;
