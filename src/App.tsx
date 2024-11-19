import { useState } from 'react'

import './App.css'
//import February from './components/months/february'
//import Button from './components/months/Button'
import Calendar from './components/months/Calendar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MoodyChatComponent from './components/MoodyChatComponent'
import LoginComponent from './components/LoginComponent'
import January from './components/months/january'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginComponent/>}/>
      <Route path='/AI' element={<MoodyChatComponent/>}/>
      {/* <Route path='/Calendar' element={<Calendar/>}/> */}
      <Route path='/Calendar' element={<January/>}/>
    </Routes>
    
  </BrowserRouter>
  
      
    

    
  )
}

export default App
