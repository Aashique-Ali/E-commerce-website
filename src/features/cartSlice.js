import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
  //   totalQuantity: 0,
  //   totalPrice: 0,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (existingItem) {
        alert("Already added to cart")
      } else {
        state.items.push(action.payload)
        alert("item added to cart")
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
