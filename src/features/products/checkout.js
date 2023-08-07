import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axiosInstance';

export const checkout = createAsyncThunk(
  'checkout',
  async (checkoutData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/user/orders/create-order`,checkoutData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const initialState = {
  data: [],
  isLoading: false,
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  extraReducers: {
    [checkout.pending]: (state) => {
      state.isLoading = true;
    },
    [checkout.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
      state.errorMessage = null;
    },
    [checkout.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export default checkoutSlice.reducer;
