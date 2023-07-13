import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axiosInstance'

export const rating = createAsyncThunk(
  'product/rating',
  async ({data}, { rejectWithValue }) => {
    console.log(data,'dataaaa')
    try {
      const response = await axios.post(`/products/${data.uid}/reviews`,data);
      return response.data;
      
    } catch (error) {
      return rejectWithValue(error.response);
    }
  },
);

const initialState = {
  ratings: [],
  isLoading: false,
};

export const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  extraReducers: {
    [rating.pending]: (state) => {
      state.isLoading = true;
    },
    [rating.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.rating = payload;
      state.errorMessage = null;
    },
    [rating.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export default ratingSlice.reducer;