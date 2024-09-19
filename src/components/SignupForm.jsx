import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import { signUp } from "../features/authSlice"
import { useDispatch } from "react-redux"

const SignupForm = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signUp({ username, email, password }))
    setUsername("")
    setEmail("")
    setPassword("")
    navigate("/login")
  }
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="bg-slate-800 p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">
                Full Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2  rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">
                Email Address
              </label>
              <input
                type="email"
                className="mt-1 block w-full p-2 border  rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">
                Password
              </label>
              <input
                type="password"
                className="mt-1 block w-full p-2 border  rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-200"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-white">
            Already have an account?
            <Link to={"/login"} className="text-blue-600 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default SignupForm
