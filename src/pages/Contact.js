import React from "react"
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs"

const Contact = () => {
  return (
    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h2 class="sm:text-5xl text-2xl font-semibold title-font mb-4 text-red-400">
            Contact Us
          </h2>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            For any kind of issue or information just ping us we will definitly
            gonna help you as soon as possible.
          </p>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label htmlfor="name" class="leading-7 text-lg text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label htmlfor="email" class="leading-7 text-lg text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label
                  htmlfor="message"
                  class="leading-7 text-lg text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <button class="flex mx-auto text-white py-2 px-8 rounded text-lg bg-gradient-to-r from-blue-400 to-red-300 ">
                Send Mail
              </button>
            </div>
            <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <p class="text-blue-600 font-semibold text-xl">admin@gmail.com</p>
              <p class="leading-normal my-5 text-lg">
                49 Smith St.
                <br />
                Saint Cloud, MN 56301
              </p>
              <span class="inline-flex text-2xl">
                <a class="text-gray-500 hover:text-blue-500 " href="/">
                  <BsFacebook />
                </a>
                <a class="ml-4 text-gray-500 hover:text-blue-500 " href="/">
                  <BsTwitter />
                </a>
                <a class="ml-4 text-gray-500 hover:text-blue-500 " href="/">
                  <BsLinkedin />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
