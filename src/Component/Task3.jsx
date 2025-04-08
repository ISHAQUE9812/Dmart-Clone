import React, { useState } from 'react'

const Task3 = () => {
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!email || !password || !name) {
        setErr("All field are requird");
        return
      }
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(email)) {
        setErr("Invalid email format");
        return;
      }

      setErr("");
      alert("Form submitted!");
    };
  

  return (
    <div className="w-full h-screen flex justify-center items-center  ">
      <form
        onSubmit={handleSubmit}
        className="w-2/3 h-80 border border-black rounded-md mt-10 flex flex-col items-center justify-center "
      >
        {err && <p className="text-red-500">{err}</p>}
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="border border-gray-900 rounded-md bg-gray-100"
        />
        <input
          type="Email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-900 rounded-md bg-gray-100 mt-3 mb-3"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="border border-gray-900 rounded-md bg-gray-100"
        />
        <button on className="bg-blue-500 py-[1px] px-3 rounded-md mt-3">
          Sumbit
        </button>
      </form>
    </div>
  );
}

export default Task3