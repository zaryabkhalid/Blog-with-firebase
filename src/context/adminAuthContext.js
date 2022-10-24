import { createContext, useContext, useEffect, useState } from "react"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth"
import { auth } from "../firebase-config"

const AdminAuthContext = createContext()
const provider = new GoogleAuthProvider()
export function AdminAuthContextProvider({ children }) {
  const [user, setUser] = useState({})

  function SignIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function SignUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function SignInWithGoogle() {
    return signInWithPopup(auth, provider)
  }

  function logOut() {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <AdminAuthContext.Provider
      value={{
        SignUp,
        SignIn,
        logOut,
        SignInWithGoogle,
        user,
        updateProfile,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  )
}
export function useAdminAuth() {
  return useContext(AdminAuthContext)
}
