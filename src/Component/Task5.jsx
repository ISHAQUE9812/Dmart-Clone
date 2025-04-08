//Q>    Fetch API Data using useEffect.
import React, { useEffect, useState } from 'react'

const Task5 = () => {
  const [data, setData] = useState([])
  const getData = async ()=>{
    const response = await fetch("https://dummyjson.com/products?limit=15")
    const result = await response.json();
    setData(result.products)
  } 
  useEffect(()=> {
    getData();
  }, []);
  return (
    <div className='w-full h-full bg-slate-200 p-5'>
      <div className='grid grid-cols-3 gap-3'>
         {data.map((item, index)=> (
          <div key={index} className='bg-white shadow-lg p-3 rounded-lg'>
          <img src={item.images[0]} alt={item.title} className='w-full h-40 object-cover rounded-lg' />
          <h2 className="text-lg font-bold mt-2">{item.title}</h2>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
         ))
          
         }
      </div>
    </div>
  )
}

export default Task5