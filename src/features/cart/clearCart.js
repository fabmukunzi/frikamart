import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axiosInstance';

export const clearCart = createAsyncThunk(
  'cart/clear',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post('/user/cart/clear');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  cart: [],
  isLoading: false,
};

export const clearCartSlice = createSlice({
  name: 'cart',
  initialState,
  extraReducers: {
    [clearCart.pending]: (state) => {
      state.isLoading = true;
    },
    [clearCart.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.cart = payload;
      state.errorMessage = null;
    },
    [clearCart.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload?.error;
    },
  },
});

export default clearCartSlice.reducer;
