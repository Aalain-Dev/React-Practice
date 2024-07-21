import { createContext } from "react"


export const CreatedContext = createContext()

const CreateContext = ({ children }) => {
  return (
    <CreatedContext.Provider>
      {children}
    </CreatedContext.Provider>
  )
}

export default CreateContext