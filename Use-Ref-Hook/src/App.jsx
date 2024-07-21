import { useReducer, useState } from 'react'

import './App.css'

function App() {
  let initialstate = 5
  const reducer = (state, action) => {
    if (action.type == "Increment") return state + 1
    else {
      return state - 1
    }
  }

  const [state, dispatch] = useReducer(reducer, initialstate)
  console.log(state);

  return (
    <>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
    </>
  )
}

export default App
