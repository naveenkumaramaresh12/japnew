import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  product: {},
  priceFilter: null,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    single_product: (state, { payload }) => {
      state.product = state.products.find((product) => product.id === payload);
    },
    
    specific_product: (state, { payload }) => {
      state.product = state.products
        .flatMap((item) => item.product)
        .find((item) => item.id === payload);
    },
    
    getSingleProduct: (state, { payload }) => {
      state.product = payload;
    },
    fetchProductsSuccess: (state, { payload }) => {
      state.products = payload;
    },
  },
});

export const {
  single_product,
  priceFilter,
  specific_product,
  getSingleProduct,
  fetchProductsSuccess,
} = productSlice.actions;

export const selectProducts = (state) => state.products.products;
export const selectProduct = (state) => state.products.product;
export const fetchSingleProduct = (slug) => async (dispatch) => {
  try {
    const response = await axios.get(`https://jap.digisole.in/api/v1/product/main/detail/${slug}`);
    const productData = response.data.product;
    dispatch(getSingleProduct(productData));
  } catch (error) {
    console.error('Failed to fetch the single product:', error);
  }
};


export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await fetch('https://jap.digisole.in/api/v1/product/main/paginate');
    const data = await response.json();
    dispatch(fetchProductsSuccess(data.data));
  } catch (error) {
    console.log('Failed to fetch products:', error);
  }
};

export default productSlice.reducer;
