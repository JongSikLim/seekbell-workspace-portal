import TestContextProvider, { TestContext } from "context/TestContext"
import { useContext } from "react"

const Context = () => {
  const {} = useContext(TestContext)

  return (
      <TestContextProvider>
          <div>Context</div>
      </TestContextProvider>    
  )
}

export default Context