import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import '../styles/style.scss'

const initialState = {
  courseCartItem: localStorage.getItem('CourseCart')
    ? JSON.parse(localStorage.getItem('CourseCart'))
    : [],
  totalQuantity: 0,
  totalAmount: 0,
}

const courseCartSlice = createSlice({
  name: 'courseCart',
  initialState: initialState,

  reducers: {
    // ============新增項目==========
    addCourseCart(state, action) {
      const newItem = action.payload

      const existingItem = state.courseCartItem.find(
        (Item) => Item.stockId === newItem.stockId
      )

      if (!existingItem) {
        state.courseCartItem.push({
          id: newItem.id,
          stockId: newItem.stockId,
          name: newItem.name,
          img: newItem.img[0],
          price: newItem.price,
          category: newItem.category,
          date: newItem.date,
          time: newItem.time_start,
          quantity: newItem.quantity,
          // TODO:修改如果有傳入quantity的話,total要先計算
          totalPrice: newItem.price,
          stocks: newItem.stocks,
          stockWarning: '',
        })
        toast(`${action.payload.name} 成功加入購物車！`, {
          position: 'top-center',
          autoClose: 500,
          hideProgressBar: true,
          className: 'toast-addCartMessage',
        })
      } else if (existingItem && existingItem.quantity < existingItem.stocks) {
        existingItem.quantity++
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(existingItem.price)
        toast(`${action.payload.name} 已存在於購物車！`, {
          position: 'top-center',
          autoClose: 500,
          hideProgressBar: true,
          className: 'toast-alreadyInCartMessage',
        })
      } else if (existingItem && existingItem.quantity >= existingItem.stock) {
        existingItem.stockWarning = '已達庫存上限'
        toast(`${action.payload.name} 已存在於購物車！`, {
          position: 'top-center',
          autoClose: 500,
          hideProgressBar: true,
          className: 'toast-alreadyInCartMessage',
        })
      }
      localStorage.setItem('CourseCart', JSON.stringify(state.courseCartItem))
    },
    // ============減少項目==========
    removeCourseItem(state, action) {
      const stockId = action.payload.stockId
      const existingItem = state.courseCartItem.find(
        (item) => item.stockId === stockId
      )

      if (existingItem.quantity > 1) {
        existingItem.stockWarning = ''
        existingItem.quantity--
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(existingItem.price)
      }
      localStorage.setItem('CourseCart', JSON.stringify(state.courseCartItem))
    },
    // ============刪除項目==========
    deleteCourseItem(state, action) {
      const stockId = action.payload.stockId
      const existingItem = state.courseCartItem.find(
        (item) => item.stockId === stockId
      )

      if (existingItem) {
        state.courseCartItem = state.courseCartItem.filter(
          (item) => item.stockId !== stockId
        )
      }
      localStorage.setItem('CourseCart', JSON.stringify(state.courseCartItem))
    },
    // ============總計價格與數量==========
    getCourseTotal(state, action) {
      let { total, quantity } = state.courseCartItem.reduce(
        (cartTotal, courseCartItem) => {
          const { price, quantity } = courseCartItem
          const itemTotal = price * quantity

          cartTotal.total += itemTotal
          cartTotal.quantity += quantity

          return cartTotal
        },
        { total: 0, quantity: 0 }
      )
      state.totalQuantity = quantity
      state.totalAmount = total
    },
    // ============刪除項目==========
    clearCourseCart(state, action) {
      state.courseCartItem = []
      localStorage.setItem('CourseCart', JSON.stringify(state.courseCartItem))
    },
  },
})

export const {
  addCourseCart,
  removeCourseItem,
  deleteCourseItem,
  getCourseTotal,
  clearCourseCart,
} = courseCartSlice.actions
export default courseCartSlice.reducer
