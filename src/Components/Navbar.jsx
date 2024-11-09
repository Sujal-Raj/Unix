import React from 'react'
import usericon from "../assets/user-icon.png"

function Navbar() {
  return (
    <>
    <div className='border-2 h-[10vh] flex items-center justify-between px-4'>
        <h1 className='text-xl font-semibold'>Unix</h1>
        <img className='rounded-[50%] h-9 cursor-pointer' src={usericon} alt="" />
    </div>
    </>
  )
}

export default Navbar