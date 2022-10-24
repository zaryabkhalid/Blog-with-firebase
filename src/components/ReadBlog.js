import React from "react"
import { useParams } from "react-router-dom"

const ReadBlog = () => {
  const { id } = useParams()
  return (
    <>
      <div>ReadBlog</div>
      <h2>{id}</h2>
    </>
  )
}

export default ReadBlog
