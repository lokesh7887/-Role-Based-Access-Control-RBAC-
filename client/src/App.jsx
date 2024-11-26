import { useState } from 'react'
import './App.css'
import FlipCard from './components/userLogin/userLogin'
import ServicesCard from './components/services/service'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>👮‍♀VRV Security Service</h1>
      <div className="panel">
        <FlipCard/>
        <ServicesCard/>
      </div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default App
