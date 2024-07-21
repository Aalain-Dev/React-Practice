import { createContext, useState } from "react"


export const CreatedContext = createContext()
const CreateContext = ({ children }) => {
  const [first, setfirst] = useState("this Value is from create context ")
  return (
    <CreatedContext.Provider value={{ first }}>
      {children}
    </CreatedContext.Provider>
  )
}

export default CreateContext