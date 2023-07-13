import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axiosInstance';

export const getProfile = createAsyncThunk(
  'auth/user/profile',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/user/profile`);
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

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  extraReducers: {
    [getProfile.pending]: (state) => {
      state.isLoading = true;
    },
    [getProfile.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
      state.errorMessage = null;
    },
    [getProfile.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export default profileSlice.reducer;
