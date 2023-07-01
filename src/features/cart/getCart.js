import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axiosInstance';

export const getCart = createAsyncThunk(
  'cart/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/user/cart/view');
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  cart: [],
  isLoading: false,
};

export const getCartSlice = createSlice({
  name: 'cart',
  initialState,
  extraReducers: {
    [getCart.pending]: (state) => {
      state.isLoading = true;
    },
    [getCart.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.cart = payload;
      state.errorMessage = null;
    },
    [getCart.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload?.error;
    },
  },
});

export default getCartSlice.reducer;
