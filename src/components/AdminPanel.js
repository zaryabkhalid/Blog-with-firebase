import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAdminAuth } from "../context/adminAuthContext"
import BlogCard from "./BlogCard"
import { db } from "../firebase-config"
import { collection, getDocs, query, where } from "firebase/firestore"
import { toast, ToastContainer } from "react-toastify"

const AdminPanel = () => {
  const { user } = useAdminAuth()
  const navigate = useNavigate()
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const blogref = collection(db, "Blogs")
    const q = query(blogref, where("userId", "==", user.uid))
    getDocs(q)
      .then((querySnapshot) => {
        const blogList = []
        querySnapshot.forEach((doc) => {
          blogList.push(doc.data())
          setBlogs(blogList)
        })
      })
      .catch((error) => {
        toast(error.message, {
          type: "error",
        })
      })
  }, [user.uid])
  console.log(user)
  return (
    <>
      <div className=" lg:w-[80%] mx-auto  h-screen">
        {/**************************  Blogs List ************************/}
        <div className="w-full px-4 py-24">
          <div className="text-center text-5xl">
            <h2 className="p-4 font-bold">All Blogs</h2>
          </div>

          <div className="py-6 border-b border-gray-400 flex justify-between">
            <button
              className="bg-black text-white text-lg font-semibold px-5 py-2 shadow-xl"
              onClick={() => navigate("/admin/create-blogs")}
            >
              Create Blogs +
            </button>

            <input
              type="search"
              id="search"
              name="search"
              placeholder="Serach..."
              className="border border-gray-400 px-4 focus:outline-hidden"
            />
          </div>

          <div className="flex justify-evenly flex-wrap gap-4 my-10 overflow-scroll">
            {blogs.map((blog, i) => {
              return <BlogCard key={i} blog={blog} />
            })}
          </div>
        </div>
        <ToastContainer theme="dark" autoClose={1500} />
      </div>
    </>
  )
}

export default AdminPanel
