import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./app/store.js"
import persistStore from "redux-persist/es/persistStore"
import { PersistGate } from "redux-persist/integration/react"

const persistor = persistStore(store)
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
)
