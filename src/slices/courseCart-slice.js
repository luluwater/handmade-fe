import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import '../styles/style.scss'

const initialState = {
  courseCartItem: localStorage.getItem('CourseCart')
    ? JSON.parse(localStorage.getItem('CourseCart'))
    : [],
  totalQuantity: 0,
  totalAmount: 0,
  coupon: 28,
  isCartOpen: false,
  courseCouponDiscount: localStorage.getItem('courseCouponDiscount')
    ? JSON.parse(localStorage.getItem('courseCouponDiscount'))
    : 0,
  courseActuallyPrice: localStorage.getItem('courseActuallyPrice')
    ? JSON.parse(localStorage.getItem('courseActuallyPrice'))
    : 0,
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
          img: newItem.img,
          price: newItem.price,
          category: newItem.category,
          date: newItem.date,
          time: newItem.time,
          quantity: newItem.quantity,
          totalPrice: newItem.price,
          stocks: newItem.stocks,
          stockWarning: '',
        })
        if (!state.isCartOpen) {
          toast(`${action.payload.name} 成功加入購物車！`, {
            position: 'top-center',
            autoClose: 500,
            hideProgressBar: true,
            className: 'toast-addCartMessage',
          })
        }
      } else if (existingItem && existingItem.quantity < existingItem.stocks) {
        existingItem.quantity++
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(existingItem.price)
        if (!state.isCartOpen) {
          toast(`${action.payload.name} 已存在於購物車！`, {
            position: 'top-center',
            autoClose: 500,
            hideProgressBar: true,
            className: 'toast-alreadyInCartMessage',
          })
        }
      } else if (existingItem && existingItem.quantity >= existingItem.stock) {
        existingItem.stockWarning = '已達庫存上限'
        if (!state.isCartOpen) {
          toast(`${action.payload.name} 已存在於購物車！`, {
            position: 'top-center',
            autoClose: 500,
            hideProgressBar: true,
            className: 'toast-alreadyInCartMessage',
          })
        }
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
    // =========拿取coupon==========
    getCourseCoupon(state, action) {
      state.coupon = action.payload
    },

    // =======顧客選擇折價券折數========
    getCourseDiscount(state, action) {
      state.courseCouponDiscount = action.payload
      localStorage.setItem(
        'courseCouponDiscount',
        JSON.stringify(state.courseCouponDiscount)
      )
    },
    // =======實付金額===========
    getCourseActuallyPrice(state, action) {
      state.courseActuallyPrice = action.payload
      localStorage.setItem(
        'courseActuallyPrice',
        JSON.stringify(state.courseActuallyPrice)
      )
    },

    // ============清空購物車==========
    clearCourseCart(state, action) {
      state.courseCartItem = []
      localStorage.setItem('CourseCart', JSON.stringify(state.courseCartItem))
    },
    //==========確認購物車狀態============
    CourseCartClose(state, action) {
      state.isCartOpen = action.payload
    },
    CourseCartToggle(state) {
      state.isCartOpen = !state.isCartOpen
    },
  },
})

export const {
  addCourseCart,
  removeCourseItem,
  deleteCourseItem,
  getCourseTotal,
  clearCourseCart,
  CourseCartClose,
  CourseCartToggle,
  getCourseCoupon,
  getCourseDiscount,
  getCourseActuallyPrice,
} = courseCartSlice.actions
export default courseCartSlice.reducer
