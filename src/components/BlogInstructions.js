import React from "react"
import { useNavigate } from "react-router-dom"

const BlogInstructions = () => {
  const navigate = useNavigate()
  return (
    <>
      <section>
        <div className=" container mx-auto px-5 py-24 h-full grid grid-cols-1 justify-center items-center md:grid-cols-2 ">
          <div>
            <img src="/images/Scenes08.svg" alt="banner.svg" />
          </div>
          <div className="w-full  flex flex-col text-4xl lg:text-6xl">
            <h1 className=" whitespace-nowrap  text-center font-bold bg-clip-text text-transparent bg-gradient-to-l from-blue-600 to-red-300 leading-relaxed">
              Submit Your Blogs
            </h1>
            <div className="text-center">
              <h2 className=" leading-relaxed text-2xl font-bold">
                Requirement for Blogs
              </h2>
              <ul className="list-inside list-decimal text-xl">
                <li>A Blog must contain a title.</li>
                <li>A blog must contain the main image.</li>
                <li>Try to write something good which can help the reader.</li>
                <li>A blog must contain minimum 850 words.</li>
              </ul>
            </div>
            <div className="text-center">
              <button
                className="inline-block text-xl text-white px-4 py-2  bg-red-400 shadow-xl w-[180px] rounded hover:transition-colors hover:duration-300 hover:bg-red-300"
                onClick={() => navigate("/admin/create-blogs")}
              >
                Submit Blog
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogInstructions
