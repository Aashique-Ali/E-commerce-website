import React from "react"
import { logout } from "../features/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const Logout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
    navigate("/login")
  }
  return (
    <>
      <div className="bg-white w-full flex justify-center items-center h-[100vh]">
        <div className="w-[70%] md:w-[40%] rounded-lg bg-slate-800 h-[200px] flex justify-center items-center flex-col gap-5">
          <h1 className="text-white">Are You sure you want logout</h1>
          <div className=" flex gap-5">
            <button
              onClick={handleLogout}
              className="p-2 px-8 rounded hover:text-white hover:bg-blue-700 bg-blue-600"
            >
              Yes
            </button>
            <button
              onClick={() => navigate("/")}
              className="p-2 px-8 rounded hover:text-white hover:bg-blue-700 bg-blue-600"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Logout
