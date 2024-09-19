import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../features/cartSlice"
import Navbar from "../components/Navbar"

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  const handleRemove = (product) => {
    dispatch(removeFromCart(product))
  }

  return (
    <>
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div className="w-full bg-white pb-2 min-h-[100vh] h-full">
        <div className="flex text-white  justify-between items-center bg-gray-800 rounded  pl-[5rem] px-5 h-[50px] sticky top-[13%] m-5">
          <h1>item</h1>
          <h1>name</h1>
          <h2>price</h2>
          <h2>remove</h2>
        </div>
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty</p>
        ) : (
          <>
            <div>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex text-white  justify-between items-center bg-gray-700 rounded px-10 h-[100px] m-5 "
                >
                  <img src={item.images} alt="" className="w-[100px]" />
                  <h1 className="w-[100px]">{item.title}</h1>
                  <h2>${item.price}</h2>
                  <button onClick={() => handleRemove(item)}>Remove</button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Cart
