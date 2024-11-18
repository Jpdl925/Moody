import { useState } from 'react'
import './App.css'
import LoginComponent from './components/LoginComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoodyChatComponent from './components/MoodyChatComponent';
import January from './components/months/january';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginComponent/>}/>
        <Route path='/AI' element={<MoodyChatComponent/>}/>
        <Route path='/Calendar' element={<January/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
