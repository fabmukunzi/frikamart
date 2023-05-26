import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axiosInstance';

export const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/user/login/`,userData);
      localStorage.setItem('token', data?.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const initialState = {
  isAuthenticated: false,
  data: [''],
  isLoading: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
      state.errorMessage = null;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export default loginSlice.reducer;
