import React, { createContext, useState } from 'react'
import run from '../src/config/gemini';

export const Context = createContext();

const ContextProvider = ({children})=>{

    const [input, setInput] = useState("")

    const onSent = async (input)=>{
        await run(input);
    }
    // onSent(input)

    
    const ContextValue = {
        input,
        setInput,
        onSent,
    }

    return (
        <Context.Provider value={ContextValue}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;