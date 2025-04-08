// Q> Create a counter app with increment, decrement, and reset buttons.
import React, { useState } from 'react'

const Task2 = () => {
    const [counter, setCounter] = useState(1)
    const Increment =() => {
        if(counter < 10){
            setCounter(counter + 1)
        } else  alert('Maximum limit reached!');
    }
    const Decrement =()=> {
        if(counter > 1){
            setCounter(counter - 1)
        } else alert('Maximum limit reached!');
    }
    const reset = ()=> {
        setCounter(1)
    }
  return (
    <div className='flex flex-col items-center justify-center'>
         <h1>counter = {counter}</h1>
        <button onClick={Increment} className='bg-blue-400 mt-4 rounded-md px-2 py-2'>Increment</button>
        <button onClick={Decrement} className='bg-blue-400 mt-4 rounded-md px-2 py-2'>Decrement</button>
        <button onClick={reset} className='bg-blue-400 mt-4 rounded-md px-2 py-2'>reset</button>
    </div>
  )
}

export default Task2