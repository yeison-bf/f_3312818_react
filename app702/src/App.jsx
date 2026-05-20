import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { RoutesApp } from './routes/routesApp'
import { Sidebar } from './feature/components/sidebar'

function App() {

  return (
    <>
      <RoutesApp />
    </>
  )
}

export default App
