import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axiosInstance';

export const searchProducts = createAsyncThunk(
  'products/search',
  async ({ product }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/products/search/${product}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  products: [],
  isLoading: false,
};

export const searchProductsSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: {
    [searchProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [searchProducts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.products = payload;
      state.errorMessage = null;
    },
    [searchProducts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export default searchProductsSlice.reducer;
