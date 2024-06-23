import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/productTypes";


interface ProductState {
  product: Product | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  product: null,
  loading: false,
  error: null
}

export const fetchProduct = createAsyncThunk('product/fetchProduct', async() => {
  const response = await fetch('./sales_data.json');
  const data: Product[] = await response.json()
  return data[0];
});

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action: PayloadAction<Product>) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch product data'
      })
  }
});

export default productSlice.reducer;
