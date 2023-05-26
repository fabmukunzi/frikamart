import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axiosInstance';

export const removeCartItem = createAsyncThunk(
  'cart/delete',
  async ({id}, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/user/cart/remove/${id}`);
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

export const removeCartItemSlice = createSlice({
  name: 'cart',
  initialState,
  extraReducers: {
    [removeCartItem.pending]: (state) => {
      state.isLoading = true;
    },
    [removeCartItem.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.cart = payload;
      state.errorMessage = null;
    },
    [removeCartItem.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload?.error;
    },
  },
});

export default removeCartItemSlice.reducer;
