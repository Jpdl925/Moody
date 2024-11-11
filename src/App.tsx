import { useState } from 'react'
import './App.css'
import LoginComponent from './components/LoginComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoodyChatComponent from './components/MoodyChatComponent';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginComponent/>}/>
        <Route path='/AI' element={<MoodyChatComponent/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
