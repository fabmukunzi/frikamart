import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axiosInstance'

export const getSingleProduct = createAsyncThunk(
  'products/singleProduct',
  async ({productId}, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/?uid=${productId}`);
      console.log(response)
      return response.data;
      
    } catch (error) {
      return rejectWithValue(error.response);
    }
  },
);

const initialState = {
  product:{},
  isLoading: false,
};

export const getProductsSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: {
    [getSingleProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [getSingleProduct.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.product = payload;
      state.errorMessage = null;
    },
    [getSingleProduct.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export default getProductsSlice.reducer;