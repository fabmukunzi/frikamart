import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axiosInstance';

export const getAllProducts = createAsyncThunk(
  'products/fetchAll',
  async ({ page }, { rejectWithValue }) => {
    console.log(page,'pageeeeee')
    try {
      const response = await axios.get(`/products/page/${page}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  products: [],
  isLoading: false,
};

export const getProductsSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllProducts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.products = payload;
      state.errorMessage = null;
    },
    [getAllProducts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export default getProductsSlice.reducer;
