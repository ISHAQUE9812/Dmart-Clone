// Q> Build a theme toggle button that switches between light mode and dark mode using useState
import React, { useState } from 'react'

const Task1 = () => {
    const [theme, setTheme] = useState("light")
   const toggleMode = ()=>{
        setTheme(theme === "light" ? "dark" : "light")
    }
  return (
    <div className={`w-full h-screen flex items-center justify-center ${theme === "light" ? "bg-gray-100 text-white" : "bg-gray-900"} `}>

       <button onClick={toggleMode} className={`mt-10 h-10 px-2 py-2 ${theme=== "light"? "bg-[#111] text-white" : "bg-[#fff] text-black"} `}>Switch to {theme === "light" ? "Dark" : "light"} mode</button>
    </div>
  )
}

export default Task1