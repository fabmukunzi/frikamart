import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axiosInstance';

export const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      console.log(userData, 'userdata');
      const { data } = await axios.post(`/auth/`,userData);
      localStorage.setItem('token', data.token);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error, 'errro');
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  isAuthenticated: false,
  data: null,
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
