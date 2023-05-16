import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axiosInstance'

export const homeData = createAsyncThunk(
  'homedata/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/sections/home/');
      return response.data;
      
    } catch (error) {
        console.log(error)
      return rejectWithValue(error.response);
    }
  },
);

const initialState = {
  data: [],
  isLoading: false,
};

export const getHomeDataSlice = createSlice({
  name: 'homeData',
  initialState,
  extraReducers: {
    [homeData.pending]: (state) => {
      state.isLoading = true;
    },
    [homeData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
      state.errorMessage = null;
    },
    [homeData.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload?.error;
    },
  },
});

export default getHomeDataSlice.reducer;