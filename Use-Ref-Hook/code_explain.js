// Usereducer Function syntax

function App() {
  let initialstate = 5
  const reducer = (state, action) => {
    if (action.type == "Increment") return state + 1
    else {
      return state - 1
    }
  }

  const [state, dispatch] = useReducer(reducer, initialstate)



}