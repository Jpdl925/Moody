import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import February from './components/months/february'
import { Button } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <February/>
    
    </>
  )
}

export default App
