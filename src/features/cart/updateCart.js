import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axiosInstance';

export const updateCart = createAsyncThunk(
  'cart/update',
  async ({id,count}, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/user/cart/update/${id}`,{count:count});
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

export const updateCartSlice = createSlice({
  name: 'updateCart',
  initialState,
  extraReducers: {
    [updateCart.pending]: (state) => {
      state.isLoading = true;
    },
    [updateCart.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.cart = payload;
      state.errorMessage = null;
    },
    [updateCart.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload?.error;
    },
  },
});

export default updateCartSlice.reducer;
