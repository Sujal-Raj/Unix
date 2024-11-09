import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Context } from '../context/Context'
// import run from './config/gemini'


function App() {
  
  const {onSent,input,setInput} = useContext(Context);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSent(input);
  //   setInput('');
  // }

  return (
    <>
    <h1>AI chatbot</h1>
      <input 
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      type="text" name="" id="" />
      {/* <button onClick={handleSubmit}>Send</button> */}
      </>
  )
}

export default App
