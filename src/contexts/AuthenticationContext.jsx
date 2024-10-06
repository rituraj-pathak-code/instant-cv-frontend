import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const AuthenticationProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <AuthContext.Provider value={{isAuthenticated,setIsAuthenticated}}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("Using context outside the providder")
    } else {
        return context
    }
}