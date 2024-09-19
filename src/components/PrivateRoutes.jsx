import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoutes = () => {
  const { isAuthenticated } = useSelector((state) => state.auth)
  return <div>{isAuthenticated ? <Navigate to={"/"} /> : <Outlet />}</div>
}

export default PrivateRoutes
