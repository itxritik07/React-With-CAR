import React, { Profiler } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'


const App = () => {
  return (
    <>
      <UserContextProvider>
        <h1>Hellowwww</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App

