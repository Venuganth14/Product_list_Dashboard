import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export const selectProducts = (state) => state.products.list;
export default productSlice.reducer;
