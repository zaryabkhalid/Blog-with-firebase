import React, { useEffect, useState, useId } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase-config"
import BlogPageCard from "../components/BlogPageCard"
import Spinner from "../components/Spinner"

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const [spinner, setSpinner] = useState(false)
  const ID = useId()

  useEffect(() => {
    const getAllBlogs = async () => {
      const allblogslist = []
      try {
        setSpinner(true)
        const allBlogs = collection(db, "Blogs")
        const blogSnapshot = await getDocs(allBlogs)
        blogSnapshot.forEach((blog) => {
          allblogslist.push(blog.data())
          setBlogs(allblogslist)
          setSpinner(false)
        })
      } catch (error) {
        console.log(error.message)
        setSpinner(false)
      }
    }
    getAllBlogs()
  }, [])

  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-5 w-full py-24">
      {!spinner ? (
        <>
          {blogs.map((blog) => {
            return <BlogPageCard key={`${ID}-${blog.title}`} blog={blog} />
          })}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  )
}

export default Blogs
