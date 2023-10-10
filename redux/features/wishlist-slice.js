import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  wishlist: [], // Make sure the wishlist is initialized as an empty array
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    add_to_wishlist: (state, { payload }) => {
      const productIndex = state.wishlist.findIndex((item) => item.id === payload.id);
      if (productIndex >= 0) {
        toast.error(`${payload.name} already added to wishlist`, {
          position: 'top-left',
        });
      } else {
        state.wishlist.push(payload); // Using immer directly for nested updates
      }
    },

    remove_wishlist_product: (state, { payload }) => {
      state.wishlist = state.wishlist.filter((item) => item.id !== payload.id);
      toast.error('Removed from your wishlist', {
        position: 'top-left',
      });
    },
    
    clear_wishlist: (state) => {
      state.wishlist = initialState.wishlist;
    },
  },
});

export const { add_to_wishlist, remove_wishlist_product, clear_wishlist } =
  wishlistSlice.actions;

export const selectWishlistItems = (state) => state.wishlist.wishlist;

export default wishlistSlice.reducer;
