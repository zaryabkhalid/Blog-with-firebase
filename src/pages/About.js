import React from "react"
import { useNavigate } from "react-router-dom"

const About = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
        <div className="p-8 space-y-8">
          <h2 className="text-center text-7xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-red-400">
            About Page
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis iste quidem soluta distinctio, maxime rerum vel ea id
            in, fuga impedit accusamus qui officia explicabo cupiditate delectus
            vero dolor, velit earum molestias et. Dolor exercitationem esse
            porro, numquam fuga debitis quasi quae ipsum recusandae eum quo quos
            facere et voluptatum quidem saepe voluptate tenetur cumque sunt
            fugit qui error. Voluptate, aspernatur debitis. Voluptate, ea
            tenetur optio rerum corporis numquam commodi vel accusantium
            similique error harum, in voluptatum reprehenderit repellat?
            Dignissimos inventore debitis perferendis omnis qui id quod fugit
            expedita illo dicta rerum neque earum dolore rem odio ipsum,
            molestias officiis, quos sequi ducimus dolores? Deserunt!
          </p>
          <div className="text-center lg:text-3xl">
            <button
              className="inline-block px-4 py-1 bg-gradient-to-r from-blue-400 to-red-400 text-white shadow-xl rounded"
              onClick={() => {
                navigate("/contact")
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className=" p-8">
          <img src="/images/character14.svg" alt="about-character" />
        </div>
      </div>
    </>
  )
}

export default About
