import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productId: '',
  img: [],
  store: '',
  name: '',
  price: 0,
  isFavorite: false,
}

export const productCardSlice = createSlice({
  name: 'productCard',
  initialState,
  reducers: {},
})

export const showProductCard = (state) => state.showProductCard
export default showProductCard.reducers
