import React, { useState, useEffect } from "react"
import { NavLink, Link, useNavigate } from "react-router-dom"
import DropDownMenu from "./DropDownMenu"
import { Sling as Hamburger } from "hamburger-react"
import { useAdminAuth } from "../context/adminAuthContext"
import useWindowResize from "../hooks/useWindowResize"

const Navigation = () => {
  const { width } = useWindowResize()
  const [show, setShow] = useState(false)
  const { user } = useAdminAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const handleWindowSize = () => {
      if (width > 1024) {
        setShow(false)
      }
    }

    handleWindowSize()
  }, [width])

  const mobileMenuHandler = () => {
    setShow(!show)
  }

  return (
    <>
      <nav>
        <div className=" h-[90px] drop-shadow-xl bg-gradient-to-r from-blue-500 to-red-400">
          <div className=" h-full w-full px-5 lg:px-0 lg:max-w-[80%] mx-auto flex justify-between items-center ">
            {/* Logo */}
            <div className="text-4xl font-bold text-white whitespace-nowrap">
              <Link to="/">
                <h2 className="drop-shadow-xl">React Blogs</h2>
              </Link>
            </div>

            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex gap-6 text-md">
                <li>
                  <NavLink
                    to="/"
                    className="text-white px-5 py-2  hover:underline hover:underline-offset-8 "
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="text-white px-5 py-2  hover:underline hover:underline-offset-8 "
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blogs"
                    className="text-white px-5 py-2 hover:underline hover:underline-offset-8 "
                  >
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/create-blogs"
                    className="text-white px-5 py-2 hover:underline hover:underline-offset-8"
                  >
                    Write for us
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contact"
                    className="text-white px-5 py-2 hover:underline hover:underline-offset-8"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Admin Button */}
            <div className="hidden lg:block">
              {user ? (
                <DropDownMenu />
              ) : (
                <Link to="/login" className="text-white font-semibold text-xl">
                  LOGIN
                </Link>
              )}
            </div>

            {/******************  Mobile Menu button *********************/}
            <div className="block text-blue-500 rounded-full p-2 bg-white shadow-2xl text-semibold lg:hidden">
              <Hamburger onToggle={mobileMenuHandler} />
            </div>
          </div>

          {/* Mobiile Menu */}
          {show ? (
            <div className=" absolute z-10 top-[90px] left-0 w-full block bg-gradient-to-br from-blue-300 via-violet-300 to-red-300 duration-300  h-[50vh] lg:hidden">
              <ul className="flex flex-col items-center justify-center gap-10 text-md h-full text-red-500">
                <li className="shadow-sm w-full text-center   text-xl pb-3">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className=" shadow-sm w-full text-center   text-xl pb-3">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className="shadow-sm w-full text-center  text-xl pb-3">
                  <NavLink to="/blogs">Blogs</NavLink>
                </li>
                <li className="shadow-sm w-full text-center  text-xl pb-3">
                  <NavLink to="/contact">Contact</NavLink>
                </li>

                <li className="text-lg font-semibold">
                  {user ? (
                    <DropDownMenu />
                  ) : (
                    <button
                      className="bg-red-300 text-white text-2xl px-5 py-2  shadow-xl"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </button>
                  )}
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </nav>
    </>
  )
}

export default Navigation
