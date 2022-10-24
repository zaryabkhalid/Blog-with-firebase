import React from "react"
import { Link } from "react-router-dom"
import { AiFillCaretRight } from "react-icons/ai"

const BlogPageCard = ({ blog }) => {
  return (
    <section className="text-gray-500 bg-gray-900 body-font w-full rounded-xl shadow-lg">
      <div className="container px-5 py-24 mx-auto">
        <div className=" divide-y-2 divide-gray-800">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-white">
                {blog.category}
              </span>
              <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-white title-font mb-2">
                {blog.title}
              </h2>
              <div className="leading-relaxed">Short Description</div>
              <Link
                to="/blogs/:id"
                className="text-indigo-400 inline-flex items-center mt-4"
              >
                Learn More
                <AiFillCaretRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogPageCard
