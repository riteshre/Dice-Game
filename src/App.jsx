import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Dice from '../components/dice'
import './App.css'
import Winner from '../components/Winner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Dice game</h1>
      <Dice/>
    </div>
  )
}

export default App
