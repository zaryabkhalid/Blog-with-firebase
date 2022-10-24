import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import { AiOutlineCaretRight, AiOutlineCaretDown } from "react-icons/ai"
import { useAdminAuth } from "../context/adminAuthContext"
import { auth } from "../firebase-config"

const DropDownMenu = () => {
  const [menuShow, setMenuShow] = useState(false)
  const navigate = useNavigate()
  const { logOut, user } = useAdminAuth()

  const logOutHandler = async () => {
    try {
      await logOut(auth)
      navigate("/login")
    } catch (error) {
      toast(error.message, {
        type: "error",
      })
    }
  }

  return (
    <>
      <div className="relative">
        <div>
          <button
            onClick={() => {
              setMenuShow(!menuShow)
            }}
            className="border border-white text-white px-4 py-1 flex items-center"
          >
            <span>Menu</span>
            <span className="ml-3">
              {menuShow ? <AiOutlineCaretDown /> : <AiOutlineCaretRight />}
            </span>
          </button>
        </div>

        {/* Drop Down Items */}
        {menuShow ? (
          <div className="absolute right-0 mt-2 w-56 rounded-md py-3 shadow-lg bg-white flex flex-col items-center gap-1">
            <div className="py-2 pl-3 text-left w-full border-b border-gray-300">
              <p className="text-normal">Name: {user.displayName}</p>
              <p className="text-sm">Email: {user.email}</p>
            </div>

            <Link
              to="/admin/create-blogs"
              className="py-1 w-full text-center  hover:bg-gray-300"
            >
              Create a Blog
            </Link>

            <Link
              to="/admin/admin-panel"
              className="py-1 w-full text-center  hover:bg-gray-300"
            >
              User Panel
            </Link>
            <Link
              to="/blogs"
              className="py-1 w-full text-center  hover:bg-gray-300"
            >
              Blogs
            </Link>
            <button
              onClick={logOutHandler}
              className="py-1 w-full text-center  hover:bg-gray-300"
            >
              Sign Out
            </button>
          </div>
        ) : null}
      </div>
      <ToastContainer theme="dark" autoClose={1500} />
    </>
  )
}

export default DropDownMenu
