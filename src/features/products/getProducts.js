import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axiosInstance'

export const getAllProducts = createAsyncThunk(
  'products/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/');
      console.log(response)
      return response.data;
      
    } catch (error) {
      return rejectWithValue(error.response);
    }
  },
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