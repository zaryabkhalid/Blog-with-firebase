import React from "react"
import { Navigate } from "react-router-dom"
import { useAdminAuth } from "../context/adminAuthContext"
const ProtectedRoute = ({ children }) => {
  const { user } = useAdminAuth()
  if (!user) {
    return <Navigate to="/login" />
  }
  return <>{children}</>
}

export default ProtectedRoute
