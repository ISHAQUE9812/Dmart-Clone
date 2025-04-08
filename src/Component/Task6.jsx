//Q> Build a counter app using useReducer instead of useState.
// 📌Bonus: Add an increment by 2 and decrement by 2 feature.
import React from 'react'
import { useReducer } from 'react'
const reducer = (state, action) =>{
   switch(action.type) {
    case "Increment":
     return {count: state.count + 1};
    case "Decrement":
     return {count: state - 1};
    case "Increment+2":
        return { count: state + 2}
    case "Decrement-2":
        return {count: state -2}
    case "Reset":
        return {count: 0}    
    default:
        return state;        
   }
}
const Task6 = () => {
    const [state,dispatch] = useReducer(reducer,{count: 0})
  return (
    <div className='w-full h-full flex items-center justify-center '>
        <h1 className='mt-[-230px] mr-[-150px]'>Counter: {state.count}</h1>
        <div className='w-[20rem] h-28 border border-black rounded-md bg-slate-900 text-white flex items-center justify-center gap-5'>
            <button onClick={()=> dispatch({type: "Increment"})} className='bg-white rounded-md px-2 py-1 text-black'>+1</button>
            <button onClick={()=> dispatch({type: "Decrement"})} className='bg-white rounded-md px-2 py-1 text-black'>-1</button>
            <button onClick={()=> dispatch({type: "Increment+2"})} className='bg-white rounded-md px-2 py-1 text-black'>+2</button>
            <button onClick={()=> dispatch({type: "Increment-2"})} className='bg-white rounded-md px-2 py-1 text-black'>-2</button>
            <button onClick={()=> dispatch({type: "Reset"})} className='bg-white rounded-md px-2 py-1 text-black'>Reset</button>
        </div>
    </div>
  )
}

export default Task6




//   Second method if else
// const reducer = (state, action) => {
//   if (action.type === "Increment") {
//     return { count: state.count + 1 };
//   } else if (action.type === "Decrement") {
//     return { count: state.count - 1 };
//   } else if (action.type === "Reset") {
//     return { count: 0 };
//   } else {
//     return state;
//   }
// };