import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axiosInstance'

export const getAllStores = createAsyncThunk(
  'stores/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/store');
      return response.data;
      
    } catch (error) {
      return rejectWithValue(error.response);
    }
  },
);

const initialState = {
  stores: [],
  isLoading: false,
};

export const getStoresSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: {
    [getAllStores.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllStores.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.stores = payload;
      state.errorMessage = null;
    },
    [getAllStores.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export default getStoresSlice.reducer;