import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import {
  AiOutlineUser,
  AiOutlineUnlock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai"
import { useAdminAuth } from "../context/adminAuthContext"
import { ToastContainer, toast } from "react-toastify"
import Spinner from "./Spinner"

function Login() {
  const navigate = useNavigate()
  const [user, setUser] = useState({ email: "", password: "" })
  const [hidePass, sethidePass] = useState(true)
  const [spnnier, setSpinner] = useState(false)
  const [error, setError] = useState("")
  const { SignIn } = useAdminAuth()

  const passHandler = () => {
    sethidePass(!hidePass)
  }

  const handleUser = (e) => {
    setUser((currUser) => ({ ...currUser, [e.target.id]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!user.email || !user.password) {
      toast("Email and Password required!...", {
        type: "error",
      })
      return
    }

    try {
      setSpinner(true)
      const userDetail = await SignIn(user.email, user.password)
      console.log(userDetail)
      toast("Login Successfull...", {
        type: "success",
      })
      setSpinner(false)
      navigate("/admin/admin-panel")
    } catch (err) {
      setError(err.message)
      toast(`${error}`, {
        type: "error",
      })
      setSpinner(false)
    }
  }
  return (
    <>
      <div className="flex justify-center items-center mx-auto h-screen lg:h-[80vh]">
        <div className="p-5 w-full ">
          {/* Header */}
          <div className="text-6xl font-bold p-5 text-center mb-4 whitespace-nowrap">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">
              Login
            </h1>
          </div>

          {/************** Form ---- Body ************/}
          {spnnier ? (
            <Spinner />
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="max-w-[700px] mx-auto p-3">
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
                <div>
                  <p>
                    Don't have an Account? Go to
                    <Link
                      to="/register"
                      className="text-blue-700 ml-1 font-bold underline underline-offset-2 hover:text-red-500"
                    >
                      Register
                    </Link>
                  </p>
                </div>
                {/* Button Stack */}
                <div className="text-md my-8 text-center text-white md:text-xl font-normal">
                  <button
                    type="submit"
                    className="inline-block w-[250px]  bg-gradient-to-r from-blue-400 to-red-400 rounded  py-3 shadow-xl"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
      <ToastContainer theme="dark" autoClose={1500} />
    </>
  )
}

export default Login
