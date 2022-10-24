import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAdminAuth } from "../context/adminAuthContext"
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineUser,
  AiOutlineUnlock,
} from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import { toast, ToastContainer } from "react-toastify"
import Spinner from "./Spinner"

const Register = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    displayName: "",
  })
  const [spinner, setSpinner] = useState(false)
  const [hidePass, setHidePass] = useState(true)
  const { SignUp, SignInWithGoogle, updateProfile } = useAdminAuth()

  const handleUser = (e) => {
    setUser((currUser) => ({ ...currUser, [e.target.id]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      !user.email ||
      !user.password ||
      !user.confirmPassword ||
      !user.displayName
    ) {
      toast("User email & password is required", {
        type: "error",
      })
      return
    } else if (user.password !== user.confirmPassword) {
      toast("Passwords not the same...", { type: "error" })
      return
    } else {
      try {
        setSpinner(true)
        const userCradentials = await SignUp(user.email, user.password)
        const userdetails = userCradentials.user
        await updateProfile(userdetails, {
          displayName: user.displayName,
        })
        console.log(userdetails)
        setSpinner(false)
        navigate("/")
      } catch (error) {
        toast(`${error.message}`, {
          type: "error",
        })
        setSpinner(false)
      }
    }
  }

  const passHandler = (e) => {
    setHidePass(!hidePass)
  }

  const googleLogInHandler = async (e) => {
    e.preventDefault()
    try {
      const userCradentials = await SignInWithGoogle()
      console.log(userCradentials)
      toast("Login Successfull", {
        type: "success",
      })
      navigate("/admin/admin-panel")
    } catch (error) {
      toast(error.message, {
        type: "error",
      })
    }
  }

  return (
    <>
      <div className="flex justify-center items-center mx-auto h-screen lg:h-[80vh]">
        <div className="p-5 w-full ">
          {/* Header */}
          <div className="text-4xl sm:text-6xl font-bold p-5 text-center mb-4 ">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">
              Register Your Account
            </h1>
          </div>

          {/*******************  Form body *******************/}

          {spinner ? (
            <Spinner />
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="max-w-[700px] mx-auto p-3">
                <div className="flex items-center gap-1 px-5 py-1 text-xl border border-gray-500 rounded mb-4">
                  <label htmlFor="username" className="text-blue-500">
                    <AiOutlineUser />
                  </label>
                  <input
                    autoComplete="false"
                    type="text"
                    name="username"
                    id="displayName"
                    value={user.displayName}
                    placeholder="Username"
                    onChange={handleUser}
                    className=" w-full p-2 outline-none bg-transparent text-[#1e293b]"
                  />
                </div>

                <div className="flex items-center gap-1 px-5 py-1 text-xl border border-gray-500 rounded mb-4">
                  <label htmlFor="email" className="text-blue-500">
                    <AiOutlineUser />
                  </label>
                  <input
                    autoComplete="false"
                    type="email"
                    name="Email"
                    id="email"
                    value={user.email}
                    placeholder="Enter your email"
                    onChange={handleUser}
                    className=" w-full p-2 outline-none bg-transparent text-[#1e293b]"
                  />
                </div>
                <div className="flex items-center gap-1 px-5 py-1 text-xl border border-gray-500 rounded mb-4">
                  <label htmlFor="password" className="text-blue-500">
                    <AiOutlineUnlock />
                  </label>
                  <input
                    autoComplete="false"
                    type={hidePass ? "password" : "text"}
                    name="password"
                    id="password"
                    value={user.password}
                    placeholder="Enter your password"
                    onChange={handleUser}
                    className="w-full p-2 outline-none bg-transparent text-[#1e293b]"
                  />

                  <div onClick={passHandler} className="text-blue-500">
                    {hidePass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  </div>
                </div>

                <div className="flex items-center gap-1 px-5 py-1 text-xl border border-gray-500 rounded mb-4">
                  <label htmlFor="confirmPassword" className="text-blue-500">
                    <AiOutlineUnlock />
                  </label>
                  <input
                    autoComplete="false"
                    type={hidePass ? "password" : "text"}
                    name="confirmPassword"
                    id="confirmPassword"
                    value={user.confirmPassword}
                    placeholder="confirm password"
                    onChange={handleUser}
                    className="w-full p-2 outline-none bg-transparent text-[#1e293b]"
                  />

                  <div onClick={passHandler} className="text-blue-500">
                    {hidePass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  </div>
                </div>

                <div>
                  <p>
                    Already have an Account? Go to
                    <Link
                      to="/login"
                      className="text-blue-700 ml-1 font-bold underline underline-offset-2 hover:text-red-500"
                    >
                      Login
                    </Link>
                  </p>
                </div>
                {/* Button Stack */}
                <div className="text-md my-8 flex flex-col items-center gap-5 text-white md:text-xl font-normal">
                  <button
                    type="submit"
                    className=" w-[250px]  bg-gradient-to-r from-blue-400 to-red-400 rounded  py-3 shadow-xl"
                  >
                    Sign Up
                  </button>

                  <button
                    onClick={googleLogInHandler}
                    className=" w-[350px] flex justify-center items-center gap-2 text-gray-500 border-2 border-gray-200 rounded  py-3 shadow-xl"
                  >
                    <FcGoogle /> Sign Up with Google
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
        <ToastContainer theme="dark" autoClose={1500} />
      </div>
    </>
  )
}

export default Register
