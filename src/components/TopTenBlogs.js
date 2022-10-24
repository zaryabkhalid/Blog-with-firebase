// import React, { useState, useEffect } from "react"
import BlogCard from "./BlogCard"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
const TopTenBlogs = () => {
  // const [blogs, setBlogs] = useState([])
  return (
    <section className="w-full">
      <div className="text-center text-[7rem] font-bold  mb-16">
        <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-l from-blue-400 to-red-400 drop-shadow-xl">
          Latest-Blogs
        </h1>
      </div>
      {/* Top 10 Blogs Container */}
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        autoplay={true}
        breakpoints={{
          350: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default TopTenBlogs
