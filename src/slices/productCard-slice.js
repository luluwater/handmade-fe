import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: [],
  isFavorite: false,
}

export const productCardSlice = createSlice({
  name: 'productCard',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.product = action.payload
    },
  },
})

export const { addProduct } = productCardSlice.actions
export default productCardSlice.reducer
