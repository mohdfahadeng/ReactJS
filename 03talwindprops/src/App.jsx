import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import NavSidebar from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Talwind test</h1>
      <NavSidebar appName="Wassup"/>
      <NavSidebar/>
    </>
  )
}

export default App
