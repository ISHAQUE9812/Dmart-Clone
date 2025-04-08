// Q> User jaise hi type karega, waise hi list real-time me filter ho jaayegi 💨
import React, { useState } from "react";

const SearchFilter = () => {
  const [data, setData] = useState("");
  const store = [
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Pineapple",
    "Strawberry",
    "Grapes",
    "Cherry",
  ];
     const getData = (e)=> {
             setData(e.target.value)
     }
     const filterData = store.filter((item)=> 
        item.toLowerCase().includes(data.toLowerCase())
    )
  return (
    <div className="min-h-screen bg-gray-200  text-center text-black">
      <h2 className="text-3xl text-center p-5">Search filter </h2>
      <input type="text" onChange={getData} />
      {
        filterData.map((item,index)=> (
            <div key={index}>
                <li>{item}</li>
            </div>
        )) 
      }
    </div>
  );
};

export default SearchFilter;
