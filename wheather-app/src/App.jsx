import { useState } from 'react'
import './App.css'
import PageMain from './PageMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PageMain/>
    </>
  )
}

export default App
