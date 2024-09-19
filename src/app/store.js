import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/authSlice"
import productsReducer from "../features/productSlice"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import cartReducer from "../features/cartSlice"

const persistConfig = {
  key: "root",
  storage,
  // serialize: (state) => JSON.stringify(state),
}

const persistConfig2 = {
  key: "auth",
  storage,
  // serialize: (state) => JSON.stringify(state),
}

const persistedAuthReducer = persistReducer(persistConfig2, authReducer)
const persistedCartReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    products: productsReducer,
    cart: persistedCartReducer,
  },
})
