import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const userPage = 8;

  // Fetch all data once
  const fetchUserPage = async () => {
    try {
      const res = await fetch("https://reqres.in/api/users?page=1");
      const data = await res.json();
      const repetedUser = [...data.data, ...data.data, ...data.data];
      setUser(repetedUser);
    } catch (error) {
      console.log("error hai ishaque", error);
    }
  };
  useEffect(() => {
    fetchUserPage();
  }, []);
  // Calculate slice of users for current page
  const start = (page - 1) * userPage;
  const end = start + userPage;
  const currentUserPage = user.slice(start, end);
  const totalpage = Math.ceil(user.length / userPage);
  return (
    <div className="min-h-full w-full p-6 text-center">
      <h2 className="text-2xl font-semibold tracking-normal mb-10 border-b-[1px] border-gray-700 inline-block mx-auto w-fit">
        Pagination with Repeating Cards
      </h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {currentUserPage.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow-md flex flex-col items-center justify-center"
          >
            <img
              src={item.avatar}
              alt=""
              className="w-24 h-24 rounded-full p-1 object-cover"
            />
            <h2 className="text-xl font-semibold mb-2">
              {item.first_name} {item.last_name}
            </h2>
            <p className="font-semibold text-[16px]">{item.email}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center  p-10">
        <button onClick={()=> setPage((prev)=> Math.max(prev-1,1))} 
        disabled={page === 1}
        className="px-5 py-2 bg-blue-400 rounded-md text-white disabled:bg-gray-400">
          Prev
        </button>
        <p className="px-2">page:{page}</p>
        <button 
        onClick={()=> setPage((prev)=> prev + 1 )}
        disabled={page === totalpage}
         className="px-5 py-2 bg-blue-400 rounded-md text-white disabled:bg-gray-400">
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
