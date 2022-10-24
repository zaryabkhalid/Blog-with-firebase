import React, { useState, useRef } from "react"
import JoditEditor from "jodit-react"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { db, storage } from "../firebase-config"
import { toast, ToastContainer } from "react-toastify"
import { useAdminAuth } from "../context/adminAuthContext"

const CreateBlogs = () => {
  const { user } = useAdminAuth()
  const editor = useRef(null)
  const [post, setPost] = useState({
    title: "",
    content: "",
    category: "",
    blogImage: "",
    author: "",
    userId: "",
    createAt: Timestamp.now().toDate(),
  })
  const [progress, setProgress] = useState(0)

  const fieldChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value })
  }

  const contentFieldChange = (data) => {
    setPost({ ...post, content: data })
  }

  const handleImage = (e) => {
    setPost({ ...post, blogImage: e.target.files[0] })
  }

  const handlePublish = async (e) => {
    e.preventDefault()
    if (!post.title || !post.content || !post.category) {
      toast(`Please Fill All Fields`, { type: "error", autoClose: 2000 })
      return
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${post.blogImage.name}`
    )
    const uploadImage = uploadBytesResumable(storageRef, post.blogImage)
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        setProgress(progressPercent)
      },
      (error) => {
        toast(error.message.toString(), { type: "error", autoClose: 2000 })
      },
      () => {
        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const blogsRef = collection(db, "Blogs")
          addDoc(blogsRef, {
            title: post.title,
            content: post.content,
            blogImage: url,
            category: post.category,
            author: user.displayName,
            userId: user.uid,
            createAt: Timestamp.now().toDate(),
          })
            .then(() => {
              toast("Blog Created successfully...", {
                type: "success",
                autoClose: "2000",
              })
            })
            .catch((err) => {
              toast(err.message, {
                type: "error",
                autoClose: 2000,
              })
            })
        })
      }
    )
  }

  return (
    <>
      <div className="h-screen border-2 border-white bg-white">
        <div className="text-center text-violet-600 font-semibold text-4xl md:text-6xl my-12">
          <h1>Create Your Blogs</h1>
        </div>

        <div className="w-full md:max-w-[80%] mx-auto border-2 border-white p-5 shadow-2xl py-12">
          <div className="w-full border border-white">
            <form onSubmit={handlePublish}>
              <div className="p-3">
                <label
                  htmlFor="title"
                  className="text-violet-600 block mb-2 text-2xl font-medium"
                >
                  Add Blog Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter Blog Title"
                  maxLength={36}
                  onChange={fieldChange}
                  className="w-full text-xl bg-transparent outline-none mt-3"
                />
              </div>

              <div className="p-3">
                <label
                  htmlFor="content"
                  className="text-white block mb-2 text-2xl font-medium"
                >
                  Add Blog Content
                </label>

                <JoditEditor
                  ref={editor}
                  value={post.content}
                  onChange={(newContent) => contentFieldChange(newContent)}
                />
              </div>

              <div className="p-3">
                <label
                  htmlFor="category"
                  className="text-violet-600 block mb-2 text-2xl font-medium"
                >
                  Add Blog Category
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  placeholder="Enter Blog category"
                  maxLength={16}
                  onChange={fieldChange}
                  className="w-full text-xl bg-transparent  outline-none mt-3"
                />
              </div>

              <div className="p-3">
                <label
                  htmlFor="blogImage"
                  className="text-violet-600 block mb-2 text-2xl font-medium"
                >
                  Add Blog Image
                </label>
                <input
                  type="file"
                  name="blogImage"
                  id="blogImage"
                  accept="image/"
                  onChange={handleImage}
                  className="w-full text-xl bg-transparent  outline-none mt-3"
                />
              </div>

              {progress === 0 ? null : (
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div
                    className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-2 leading-none rounded-full"
                    style={{ width: `${progress}` }}
                  >
                    {`uploading Image ${progress}%`}
                  </div>
                </div>
              )}

              <div className="max-w-[150px] bg-violet-600 text-white mt-5">
                <button type="submit" className="py-2 px-5 w-full">
                  Publish
                </button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default CreateBlogs
