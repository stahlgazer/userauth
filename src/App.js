import React from 'react'
import './App.css'
import Login from "./components/Login"
import Logout from "./components/Logout"
import Profile from "./components/Profile"

function App() {
  return (
    <div>
      <Login />
      <Logout />
      <Profile />
    </div>
  )
}

export default App