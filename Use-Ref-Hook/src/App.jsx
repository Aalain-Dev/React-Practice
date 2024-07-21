import { useReducer, useState } from 'react'

import './App.css'

function App() {

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + action.payload }
      case "DECREMENT":
        return { ...state, count: state.count - action.payload }
      case "TOGGLE":
        return { ...state, value: action.payload, name: "Doe" }
    }
  }
  let initialstate = {
    count: 0,
    name: 'John',
    value: "Not Changed"
  }

  const [state, dispatch] = useReducer(reducer, initialstate)
  const handleinrement = () => {
    dispatch({ type: "INCREMENT", payload: 5 });
  };
  const handledecerement = () => {
    dispatch({ type: "DECREMENT", payload: 5 });
  };
  const toggle = () => {
    dispatch({ type: "TOGGLE", payload: "Changed" })
  }

  return (
    <>
      <p>{state.name}</p>
      <p>{state.value}</p>
      <button onClick={toggle}>Click To Change Value</button>
      <p>{state.count}</p>
      <button onClick={handleinrement}>Increment</button>
      <button onClick={handledecerement}>Decrement</button>
    </>
  )
}

export default App
