import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ComingSoonPage from './components/Commingsoon'
// import Home from './components/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home/> */}
    <ComingSoonPage/>
      
    </>
  )
}

export default App
