import { UserContext } from 'components/LearnTypeScriptWithReact/context/UserContext'
import React, { useContext } from 'react'

const User = () => {
  const userContext = useContext(UserContext)
  const handleLogin = () => {
    userContext.setUser({ name: "Dat", email: "dathoang9797@gmail.com" })
  }
  const handleLogout = () => {
    userContext.setUser(null)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.email}</div>
    </div>
  )
}

export default User