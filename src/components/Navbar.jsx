import React, { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const { isAuthenticated } = useSelector((state) => state.auth)

  return (
    <>
      <div className="bg-slate-800 flex justify-between z-10 items-center mx-auto px-4 text-white h-20 sticky top-0 ">
        <h1 className="font-bold text-2xl">Logo</h1>
        <ul className="hidden md:flex gap-4">
          <Link to="/">
            <li className="p-4 hover:bg-blue-600 rounded-xl m-2 cursor-pointer duration-300">
              Home
            </li>
          </Link>
          <Link to="/shop">
            <li className="p-4 hover:bg-blue-600 rounded-xl m-2 cursor-pointer duration-300">
              Shop
            </li>
          </Link>
          {!isAuthenticated ? (
            <>
              <Link to="/signup">
                <li className="p-4 hover:bg-blue-600 rounded-xl m-2 cursor-pointer duration-300">
                  Signup
                </li>
              </Link>
              <Link to="/login">
                <li className="p-4 hover:bg-blue-600 rounded-xl m-2 cursor-pointer duration-300">
                  Login
                </li>
              </Link>
            </>
          ) : (
            <>
              <Link to="/cart">
                <li className="p-4 hover:bg-blue-600 rounded-xl m-2 cursor-pointer duration-300">
                  Cart
                </li>
              </Link>
              <Link to="/logout">
                <li className="p-4 hover:bg-blue-600 rounded-xl m-2 cursor-pointer duration-300">
                  Logout
                </li>
              </Link>
            </>
          )}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="block md:hidden cursor-pointer"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed md:hidden right-0 top-[13%] w-[60%] h-full border-t-2 border-slate-600 bg-slate-800 pt-5 ease-in-out duration-500"
              : "w-[60%] fixed top-[10%] bottom-0 right-[-100%] ease-in-out duration-500"
          }
        >
          <Link to="/">
            <li className="p-4 hover:bg-blue-600 rounded-xl m-2 cursor-pointer duration-300 ">
              Home
            </li>
          </Link>
          <Link to="/shop">
            <li className="p-4 hover:bg-blue-600 rounded-xl m-2 cursor-pointer duration-300">
              Shop
            </li>
          </Link>
          {!isAuthenticated ? (
            <>
              <Link to="/signup">
                <li className="p-4 hover:bg-blue-600 rounded-xl m-2 cursor-pointer duration-300">
                  Signup
                </li>
              </Link>
              <Link to="/login">
                <li className="p-4 hover:bg-blue-600 rounded-xl m-2 cursor-pointer duration-300">
                  Login
                </li>
              </Link>
            </>
          ) : (
            <>
              <Link to="/cart">
                <li className="p-4 hover:bg-blue-600 rounded-xl m-2 cursor-pointer duration-300">
                  Cart
                </li>
              </Link>
              <Link to="/logout">
                <li className="p-4 hover:bg-blue-600 rounded-xl m-2 cursor-pointer duration-300">
                  Logout
                </li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </>
  )
}

export default Navbar
