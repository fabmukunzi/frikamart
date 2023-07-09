import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axiosInstance'

export const getSingleStore = createAsyncThunk(
  'stores/getSingle',
  async ({id}, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/stores/${id}/products`);
      return response.data;
      
    } catch (error) {
      return rejectWithValue(error.response);
    }
  },
);

const initialState = {
  store: [],
  isLoading: false,
};

export const getSingleStoreSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: {
    [getSingleStore.pending]: (state) => {
      state.isLoading = true;
    },
    [getSingleStore.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.store = payload;
      state.errorMessage = null;
    },
    [getSingleStore.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export default getSingleStoreSlice.reducer;