import { useState } from 'react'
import './App.css'
import LeftCard from './components/LeftCard'
import RightCard from './components/RightCard'
import Header from './components/Header/Header'
import { useStore } from './store/store'
import Login from './components/Login/Login'
import React from 'react'

const App: React.FC = () => {

  const loggedIn = useStore((state) => state.loggedIn)
  console.log(loggedIn)
  return (

    loggedIn ?
      <>
        <Header />

        <div style={{ textAlign: "center" }}>
          <h1>ToDo App With Zustand</h1>
        </div>
        <div className='container'>

          <LeftCard />
          <RightCard />
        </div>
      </>
      : <div className='loginContainer'><Login /></div>
  )

}

export default App
