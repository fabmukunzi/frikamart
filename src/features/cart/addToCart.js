import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axiosInstance';

export const addToCart = createAsyncThunk(
  'cart/add',
  async ({ cart }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/user/cart/add', cart);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  data: [],
  isLoading: false,
};

export const addToCartSlice = createSlice({
  name: 'addToCart',
  initialState,
  extraReducers: {
    [addToCart.pending]: (state) => {
      state.isLoading = true;
    },
    [addToCart.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
      state.errorMessage = null;
    },
    [addToCart.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload?.error;
    },
  },
});

export default addToCartSlice.reducer;
