import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import '../styles/style.scss'


const initialState = {
  productCartItem: localStorage.getItem('ProductCart')
    ? JSON.parse(localStorage.getItem('ProductCart'))
    : [],
  totalQuantity: 0,
  totalAmount: 0,
  coupon: 28,
  couponDiscount: 0,
  actuallyPrice: '',
  isCartOpen: false,
}

const productCartSlice = createSlice({
  name: 'productCart',
  initialState: initialState,

  reducers: {
    // ============新增項目==========
    addProductCart(state, action) {
      const newItem = action.payload

      const existingItem = state.productCartItem.find(
        (Item) => Item.productId === newItem.productId
      )
      console.log('existingItem', existingItem)

      if (!existingItem) {
        state.productCartItem.push({
          productId: newItem.productId,
          name: newItem.name,
          imgs: newItem.imgs[0],
          price: newItem.price,
          category: newItem.category,
          quantity: newItem.quantity ? newItem.quantity : 1,
          // TODO:修改如果有傳入quantity的話,total要先計算
          totalPrice: newItem.price,
          amount: newItem.amount,
          stockWarning: '',
        })

        if (!state.isCartOpen) {
          toast.success(`${action.payload.name} 成功加入購物車！`, {
            position: 'top-center',
            autoClose: 500,
            hideProgressBar: true,
            className: 'toast-addCartMessage',
          })
        }
      } else if (existingItem && existingItem.quantity < existingItem.amount) {
        existingItem.quantity++
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price)

        if (!state.isCartOpen) {
          toast.info(`${action.payload.name} 已存在於購物車！`, {
            position: 'top-center',
            autoClose: 500,
            hideProgressBar: true,
            className: 'toast-alreadyInCartMessage',
          })
        }
      } else if (existingItem && existingItem.quantity >= existingItem.amount) {
        existingItem.stockWarning = '已達庫存上限'

        if (!state.isCartOpen) {
          toast.info(`${action.payload.name} 已存在於購物車！`, {
            position: 'top-center',
            autoClose: 500,
            hideProgressBar: true,
            className: 'toast-alreadyInCartMessage',
          })
        }
      }

      localStorage.setItem('ProductCart', JSON.stringify(state.productCartItem))
    },
    // ============減少項目==========
    removeProductItem(state, action) {
      const id = action.payload.productId

      const existingItem = state.productCartItem.find(
        (item) => item.productId === id
      )

      if (existingItem.quantity > 1) {
        existingItem.stockWarning = ''
        existingItem.quantity--
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(existingItem.price)
      }

      localStorage.setItem('ProductCart', JSON.stringify(state.productCartItem))
    },

    // ============刪除項目==========
    deleteProductItem(state, action) {
      const id = action.payload.productId
      const existingItem = state.productCartItem.find(
        (item) => item.productId === id
      )

      if (existingItem) {
        state.productCartItem = state.productCartItem.filter(
          (item) => item.productId !== id
        )
      }

      localStorage.setItem('ProductCart', JSON.stringify(state.productCartItem))
    },
    // ============總計價格與數量==========
    getProductTotal(state, action) {
      let { total, quantity } = state.productCartItem.reduce(
        (cartTotal, productCartItem) => {
          const { price, quantity } = productCartItem
          const itemTotal = price * quantity

          cartTotal.total += itemTotal
          cartTotal.quantity += quantity

          return cartTotal
        },
        {
          total: 0,
          quantity: 0,
        }
      )
      state.totalQuantity = quantity
      state.totalAmount = total
    },
    // =========拿取coupon==========
    getCoupon(state, action) {
      state.coupon = action.payload
    },
    // =======顧客選擇折價券折數========
    getDiscount(state,action){
      state.couponDiscount=action.payload
    },
    // =======實付金額===========
    getActuallyPrice(state,action){
      state.actuallyPrice = action.payload
    },

    // ============清空購物車==========
    clearCart(state, action) {
      state.productCartItem = []
      localStorage.setItem('ProductCart', JSON.stringify(state.productCartItem))
    },

    //==========確認購物車狀態============
    ProductCartClose(state, action) {
      state.isCartOpen = action.payload
    },
    ProductCartToggle(state) {
      state.isCartOpen = !state.isCartOpen
    },
  },
})

export const {
  addProductCart,
  removeProductItem,
  deleteProductItem,
  getProductTotal,
  clearCart,
  ProductCartClose,
  ProductCartToggle,
  getCoupon,
  getDiscount,
  getActuallyPrice,
} = productCartSlice.actions
export default productCartSlice.reducer
