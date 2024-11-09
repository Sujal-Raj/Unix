import React, { createContext, useState } from 'react'
import run from '../src/config/gemini';

export const Context = createContext();

const ContextProvider = ({children})=>{

    const [input, setInput] = useState("")
    const [response, setResponse] = useState("")
    const [showResult, setShowResult] = useState(false)
    const [loading, setloading] = useState(false);

    const onSent = async (input)=>{

        setResponse("");
        setloading(true);
        setShowResult(true);
        const result = await run(input);
        setResponse(result);
        setloading(false);
    }
    // onSent(input)

    
    const ContextValue = {
        input,
        setInput,
        onSent,
        response,
        showResult,
        setShowResult,
    }

    return (
        <Context.Provider value={ContextValue}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;