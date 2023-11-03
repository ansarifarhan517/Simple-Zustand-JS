import { useState } from 'react'
import './App.css'
import LeftCard from './components/LeftCard'
import RightCard from './components/RightCard'

function App() {
  return <>
   <div> 
    <h1>ToDo App With Zustand</h1>
   </div>
   <div className='container'>

   <LeftCard />
   <RightCard />
   </div>
  </>
}

export default App
