import React from "react"
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs"
const OurTeam = () => {
  return (
    <>
      <section className=" bg-gray-200 shadow-sm rounded-md">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl md:text-8xl font-bold mb-4 md:mb-10 text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-red-400 drop-shadow-xl">
              OUR TEAM
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
              These are our best team members which are going to help you to
              convert your dream projects in to the real world projects.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="p-4 lg:w-1/4 md:w-1/2 shadow-md">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                  src="/images/Character05.svg"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-blue-400">
                    Alper Kamu
                  </h2>
                  <h3 className="text-red-400 text-sm mb-3">
                    UI / UX Designer
                  </h3>
                  <p className="mb-4">Social Contact Profile</p>
                  <span className="inline-flex">
                    <a className="text-gray-500 hover:text-blue-500 " href="/">
                      <BsFacebook />
                    </a>
                    <a
                      className="ml-4 text-gray-500 hover:text-blue-500 "
                      href="/"
                    >
                      <BsTwitter />
                    </a>
                    <a
                      className="ml-4 text-gray-500 hover:text-blue-500 "
                      href="/"
                    >
                      <BsLinkedin />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2 shadow-md">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                  src="/images/Character04.svg"
                />
                <div className="w-full">
                  <h2 className="text-blue-400 title-font font-medium text-lg">
                    Holden Caulfield
                  </h2>
                  <h3 className="text-red-400 text-sm mb-3">
                    Mobile App Developer
                  </h3>
                  <p className="mb-4">Social contact Profile</p>
                  <span className="inline-flex">
                    <a className="text-gray-500 hover:text-blue-500 " href="/">
                      <BsFacebook />
                    </a>
                    <a
                      className="ml-4 text-gray-500 hover:text-blue-500 "
                      href="/"
                    >
                      <BsTwitter />
                    </a>
                    <a
                      className="ml-4 text-gray-500 hover:text-blue-500 "
                      href="/"
                    >
                      <BsLinkedin />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2 shadow-md">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                  src="/images/Character05.svg"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-blue-400">
                    Atticus Finch
                  </h2>
                  <h3 className="text-red-400 text-sm mb-3">Web Developer</h3>
                  <p className="mb-4">Social Contact Profile</p>
                  <span className="inline-flex">
                    <a className="text-gray-500 hover:text-blue-500 " href="/">
                      <BsFacebook />
                    </a>
                    <a
                      className="ml-4 text-gray-500 hover:text-blue-500 "
                      href="/"
                    >
                      <BsTwitter />
                    </a>
                    <a
                      className="ml-4 text-gray-500 hover:text-blue-500 "
                      href="/"
                    >
                      <BsLinkedin />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2 shadow-md">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                  src="/images/Character06.svg"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-blue-400">
                    Henry Letham
                  </h2>
                  <h3 className="text-red-400 text-sm mb-3">Content Writter</h3>
                  <p className="mb-4">Social Contact Profile</p>
                  <span className="inline-flex">
                    <a className="text-gray-500 hover:text-blue-500 " href="/">
                      <BsFacebook />
                    </a>
                    <a
                      className="ml-4 text-gray-500 hover:text-blue-500 "
                      href="/"
                    >
                      <BsTwitter />
                    </a>
                    <a
                      className="ml-4 text-gray-500 hover:text-blue-500 "
                      href="/"
                    >
                      <BsLinkedin />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurTeam
