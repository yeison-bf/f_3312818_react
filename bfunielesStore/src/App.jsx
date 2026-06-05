import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RoutesApp } from './routes/RoutesApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RoutesApp/>
    </>
  )
}

export default App
