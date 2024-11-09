import React, { createContext, useState } from 'react'
import run from '../src/config/gemini';

export const Context = createContext();

const ContextProvider = ({children})=>{

    const [input, setInput] = useState("")
    const [response, setResponse] = useState("")

    const onSent = async (input)=>{
        setResponse("");
        const result = await run(input);
        setResponse(result);
    }
    // onSent(input)

    
    const ContextValue = {
        input,
        setInput,
        onSent,
        response,
    }

    return (
        <Context.Provider value={ContextValue}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;