import React from "react"
import { Link } from "react-router-dom"
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai"
import { useAdminAuth } from "../context/adminAuthContext"
const BlogCard = ({ blog }) => {
  const { user } = useAdminAuth()

  return (
    <>
      <div className="relative  border py-8 bg-gradient-to-tr from-blue-300 to-red-300 shadow-xl rounded-xl w-[350px]">
        {user && (
          <div className="absolute z-40 top-5 right-6 flex gap-2">
            <button
              onClick={() => alert("Clicked")}
              className="z-50 p-2 rounded-full bg-white text-red-400"
            >
              <AiFillDelete />
            </button>
            <button className=" z-50 p-2 rounded-full bg-white text-red-400">
              <AiOutlineEdit />
            </button>
          </div>
        )}
        <div className="text-center space-y-3 mt-8">
          <p className="text-3xl font-semibold text-white">{blog.title}</p>
          <p className="text-lg  text-white">Category: {blog.category}</p>
          <p className="text-lg text-white">Author: {blog.author}</p>
          <Link
            to="/"
            className="inline-block bg-white px-3 py-1 rounded-full drop-shadow-lg"
          >
            Read Now
          </Link>
        </div>
      </div>
    </>
  )
}

export default BlogCard
