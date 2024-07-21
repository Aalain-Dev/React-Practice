import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateContext from './createcontext/CreateContext'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<CreateContext>
<h1>Hello World</h1>
</CreateContext>
</>
  )
}

export default App
