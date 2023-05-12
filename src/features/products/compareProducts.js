import { createSlice } from '@reduxjs/toolkit';

const compareProductSlice = createSlice({
  name: 'compareProduct',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      const updatedProducts = state.products.filter(
        (product) => product.uid !== action.payload
      );
      state.products = updatedProducts;
    },
  },
});

export const { addProduct, removeProduct } = compareProductSlice.actions;
export default compareProductSlice.reducer;
