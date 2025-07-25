import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeroSection from './components/profile'
import Resume from './components/resume/Resume'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'> 
      {/* <HeroSection /> */}
      <Resume />
    </div>
  )
}

export default App
