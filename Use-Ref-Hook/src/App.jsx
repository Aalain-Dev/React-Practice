import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
let ref = useRef(0)
// let green = useRef("") 
// green.current.style.backgroundColor = "red"
useEffect(() => {
ref.current =  ref.current + 1
console.log(`The Value of Ref is : ${ref.current}`);
}, [count])
const handleclick = ()=>{
  setCount(count+1)
}

  return (
 <>
 <p>{count}</p>
 <button onClick={handleclick}>Click</button>
 {/* <button ref = {green}>Color Change</button> */}

 </>
  )
}

export default App
