import { AdminAuthContextProvider } from "./context/adminAuthContext"
import { Routes, Route } from "react-router-dom"
import { Home, Contact, About, Blogs } from "./pages"
import {
  Footer,
  Navigation,
  Login,
  Register,
  ProtectedRoute,
  CreateBlogs,
  AdminPanel,
  ReadBlog,
} from "./components"

function App() {
  return (
    <>
      <AdminAuthContextProvider>
        <Navigation />

        <Routes>
          {/* Pages Routes */}
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<ReadBlog />} />

          {/* Component Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Component Routes */}
          <Route
            path="/admin/admin-panel"
            element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/create-blogs"
            element={
              <ProtectedRoute>
                <CreateBlogs />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </AdminAuthContextProvider>
    </>
  )
}

export default App
