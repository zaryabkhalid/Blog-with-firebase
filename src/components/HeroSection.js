import React from "react"
import { Link } from "react-router-dom"
import { useAdminAuth } from "../context/adminAuthContext"
const HeroSection = () => {
  const { user } = useAdminAuth()
  return (
    <div className="container mx-auto px-5 py-24 grid grid-cols-1 md:grid-cols-2 justify-center items-center">
      <div className="w-full text-4xl lg:text-8xl text-center">
        <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-l from-blue-400 to-red-400 drop-shadow-xl leading-relaxed">
          React Blogs
        </h1>
        <p className=" text-xl font-medium tracking-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deserunt
          reiciendis sint minus repellendus vero suscipit quidem quo tempora
          consequatur, cumque labore dolorum maiores at.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-10">
          <Link
            to="/blogs"
            className="inline-block bg-blue-500 text-white text-xl px-4 py-2 shadow-xl w-[180px] rounded hover:transition-colors hover:duration-300 hover:bg-blue-400 "
          >
            Read Blogs
          </Link>

          {!user ? (
            <Link
              to="/register"
              className="inline-block text-xl text-white px-4 py-2  bg-red-400 shadow-xl w-[180px] rounded hover:transition-colors hover:duration-300 hover:bg-red-300 "
            >
              Register
            </Link>
          ) : null}
        </div>
      </div>
      <div>
        <img src="/images/Scenes01.svg" alt="banner.svg" />
      </div>
    </div>
  )
}

export default HeroSection
