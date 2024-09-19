// src/Homepage.js
import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../features/productSlice"
import ProductCard from "../components/ProductCard"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Home = () => {
  const dispatch = useDispatch()
  const { items, status, error } = useSelector((state) => state.products)

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts())
    }
  }, [dispatch, status])
  return (
    <div>
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our Store</h2>
          <p className="text-gray-600 mb-8">
            Discover the best products just for you!
          </p>
          <Link to={"/shop"}>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          Featured Products
        </h2>
        <div className="flex justify-center items-center">
          <div className="sticky top-0 z-10"></div>
          <div className="w-full bg-white min-h-[100vh] text-center ">
            {status === "loading" && (
              <p className="text-2xl text-white">Loading...</p>
            )}
            {status === "failed" && <p>{error}</p>}

            <div className="flex justify-center items-center gap-2 flex-wrap p-5 ">
              {status === "succeeded" &&
                items.slice(0, 8).map((product) => (
                  // <ProductCard key={product.id} product={product} />
                  <div className="product-card" key={product.id}>
                    <div className="flex justify-around flex-wrap gap-3 px-5">
                      <div className=" cursor-pointer px-1 shadow-green-950 hover:shadow-green-950 hover:shadow-lg shadow-sm flex  relative flex-col justify-center items-center gap-5 w-[15rem] h-[23rem]  rounded-xl bg-gray-400 overflow-hidden pb-14 pt-4 mb-4">
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
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
