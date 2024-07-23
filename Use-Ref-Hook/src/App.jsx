import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
let ref = useRef(0)

useEffect(() => {
ref.current =  ref + 1
console.log(`The Value of Ref is : ${ref.current}`);
}, [])
const handleclick = ()=>{
  setCount(count+1)
}

  return (
 <>
 <p>{count}</p>
 <button onClick={handleclick}>Click</button>
 </>
  )
}

export default App
