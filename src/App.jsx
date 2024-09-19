import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import LoginForm from "./components/LoginForm"
import SignupForm from "./components/SignupForm"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import PrivateRoutes from "./components/PrivateRoutes.jsx"
import Shop from "./pages/Shop.jsx"
import Logout from "./pages/Logout.jsx"
import { useSelector } from "react-redux"
import Cart from "./pages/Cart.jsx"

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoutes />}>
          <Route path="signup" element={<SignupForm />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
        <Route path="shop" element={<Shop />} />
        <Route
          path="cart"
          element={isAuthenticated ? <Cart /> : <LoginForm />}
        />
        <Route
          path="logout"
          element={isAuthenticated ? <Logout /> : <LoginForm />}
        />
      </>
    )
  )
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
