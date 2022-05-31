import React, { createContext, useState } from "react"
import { useSampleObject } from "./hooks";

type TestContext = {
    isTemp: boolean;
    isOff : boolean;
    sampleObject: Object;
    setIsOff : React.Dispatch<React.SetStateAction<boolean>>;
    isCallback : () => boolean;
    isChecked : () => boolean;
}

export const TestContext = createContext<TestContext>({
    isTemp: false,
    isOff : false,
    sampleObject : {
        integer: 0,
        bool : false,
        string: ''
    },
    setIsOff: () => false,
    isCallback : () => false,
    isChecked: () => false,    
})

type Props = {
    children? : React.ReactNode
}

// const TestContextProvider: ({
//     children 
// }: Props) => {    
//   return (
//     <TextContext.Provider value={{

//     }}>
//         {children}
//     </TextContext.Provider>
//   )
// }

const TestContextProvider = ({children} : Props) => {
    const [isOff, setIsOff] = useState<boolean>(false);
    const sampleObject = useSampleObject();

    const isCallback = () => {
        return !isOff;
    }

    const isChecked = () =>{
        return true;
    }

    return (
        <TestContext.Provider value={{
            isOff,          
            isTemp : true,
            sampleObject,          
            setIsOff,
            isCallback,
            isChecked 
        }}>
            {children}
        </TestContext.Provider>
    )
}

export default TestContextProvider