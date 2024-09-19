import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../features/cartSlice"
import Navbar from "../components/Navbar"

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector((state) => state.auth)

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      alert("plz login to continue")
    } else {
      dispatch(addToCart(product))
    }
  }

  return (
    <>
      <div className="product-card">
        <div className="flex justify-around flex-wrap gap-3 px-5">
          <div className=" cursor-pointer px-1 shadow-green-950 hover:shadow-green-950 hover:shadow-lg shadow-sm flex  relative flex-col justify-center items-center gap-5 w-[15rem] h-[23rem]  rounded-xl bg-slate-300 overflow-hidden pb-14 pt-4 mb-4">
            <img
              src={product.images}
              alt={product.title.slice(0, 20)}
              className="w-[10rem] h-[10rem]  drop-shadow-2xl"
            />
            <h2 className="text-2xl font-semibold tracking-wider ">
              {product.title.slice(0, 15)}
            </h2>
            <p className="text-sm text-center ">
              {product.description.slice(0, 50)}
            </p>
            <h1 className="text-2xl font-bold text-slate-800">
              ${product.price}
            </h1>
            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-800  text-white hover:bg-blue-700 py-2 absolute bottom-0"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
