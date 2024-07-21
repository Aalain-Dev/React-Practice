// Code explaination 
const [state, dispatch] = useReducer(reducer, initialstate)
// 1. ye line yaha hum sab se pehle likhte h 
// 2. state ka matlab h jo sab se starting value honge sab se pehle
// 3. dispatch ka use hum aage dekheng
// 4.reducer ka humlog function banayenge
// 5. initialstate mai jo bhe value hote h wo state ke value hote h


// 2. initial state ke value define. wo object, array kuch bhe ho skta h 
let initialstate = {
  count: 0,
  name: 'John',
  value: "Not Changed"
}

// 3. reducer function 
// 1. reducer function hamesha 2 cheez let h as a parameter state and action
// 2. ye function mai humlog multiple cases define kar sakte h jaisa case h increment agar tohh ye case cahla do aisa h 
// 3. apko jo bhe likhna h wo action.type is type mai aap likhenge
// 4. yaha bascially upar initial state mia value h wo change honge as per case
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
// 4. How to use dispatch 
// 1. dispatch hamesha 2 chex lete h as object type and payload 
// 1.1 type ka matlab h kya karna h example incremen likha h matlab upar reducer mai increment wala case cahlenga aisa
// 1.2 payload ka matlab extra info line number 25 dekhonge waha ye likha huwa h ( count: state.count + action.payload ) iska matlab h state.count ke value jitna payload h utne se increase kardo 

const handleinrement = () => {
  dispatch({ type: "INCREMENT", payload: 5 });
};

// 5. usereducer humlog onclick pe use kar sakteh  
<button onClick={handleinrement}>Increment</button>
