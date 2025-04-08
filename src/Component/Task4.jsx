//Q Create a parent-child component structure where the parent passes a message to the child via props 
//1> Parent Component (Parent.js) - Sends a message via props.

//2> Child Component (Child.js) - Receives and displays the message.


import React, { useState } from "react";

const Child = ({ text,onHandle }) => {
    const [data, setData] = useState("Data chaild")
    const change =() => {
        onHandle(data)
        
    }
  return (
    <div>
      <p>Message from Parent: {text}</p>
      <button onClick={change}>send data parent</button>
    </div>
  );
};

const Task4 =() => {
    const [message,SetMessage] = useState("mai hu abbu")
    const [chld, setChld] = useState("")
    const handle = (data) => {
        setChld(data);
    }
    return (
        <div>
            <h1>Data received from Child : {chld}</h1>
            <Child text={message} onHandle={handle} />
        </div>
    )
}
export default Task4;
