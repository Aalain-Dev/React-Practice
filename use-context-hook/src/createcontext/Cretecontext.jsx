import { createContext } from "react"





export const Context = createContext() 

const Cretecontext = ({children}) => {
  return (
<Context.Povider>
    {children}
</Context.Povider>
  )
}

export default Cretecontext