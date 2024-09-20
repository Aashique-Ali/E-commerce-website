import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
  users: [],
  currentUser: null,
  isAuthenticated: false,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      const user = {
        userId: nanoid(),
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
      }

      const existingUser = state.users.find(
        (user) => user.email === action.payload.email
      )
      if (existingUser) {
        alert("user already exists")
      } else {
        state.users.push(user)
        alert("signup successfull")
      }
    },
    login: (state, action) => {
      const { email, password } = action.payload

      const user = state.users.find(
        (user) => user.email === email && user.password === password
      )
      if (user) {
        ;(state.currentUser = user), (state.isAuthenticated = true)
        alert("login succesfull")
      } else {
        alert("Invalid credentials")
      }
    },
    logout: (state, action) => {
      ;(state.currentUser = null), (state.isAuthenticated = false)
    },
  },
})

export const { signUp, login, logout } = authSlice.actions

export default authSlice.reducer
