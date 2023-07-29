import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axiosInstance';

export const searchCategory = createAsyncThunk(
  'category/search',
  async ({ product }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/products/simple-filter/${product}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  products: [],
  isLoading: false,
};

export const searchCategorySlice = createSlice({
  name: 'searchCategories',
  initialState,
  extraReducers: {
    [searchCategory.pending]: (state) => {
      state.isLoading = true;
    },
    [searchCategory.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.products = payload;
      state.errorMessage = null;
    },
    [searchCategory.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export default searchCategorySlice.reducer;
