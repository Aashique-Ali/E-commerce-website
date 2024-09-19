import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../features/productSlice"
import ProductCard from "../components/ProductCard"
import Navbar from "../components/Navbar"
import { IoSearch } from "react-icons/io5"

const Shop = () => {
  const dispatch = useDispatch()
  const { items, status, error } = useSelector((state) => state.products)
  const [search, setSearch] = useState("")

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts())
    }
  }, [dispatch, status])

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <form className="fixed top-[14%]  z-20 bg-gray-800 w-full text-center py-2 flex justify-center items-center sm:top-6 sm:bg-transparent sm:w-[300px] sm:left-[20%] md:left-[30%]">
        <input
          type="text"
          className="w-[80%] rounded-lg outline-none ring-0 px-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IoSearch
          size={20}
          className="absolute top-3  right-[10%] cursor-pointer "
        />
      </form>
      <div className="w-full bg-white min-h-[100vh] text-center mt-10 ">
        {status === "loading" && (
          <p className="text-2xl text-white">Loading...</p>
        )}
        {status === "failed" && <p>{error}</p>}

        <div className="flex justify-center items-center gap-2 flex-wrap p-5 ">
          {filteredItems.length > 0 ? (
            status === "succeeded" &&
            filteredItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <h1>No products found</h1>
          )}
        </div>
      </div>
    </>
  )
}

export default Shop
