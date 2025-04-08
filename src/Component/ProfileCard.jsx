import React, { useEffect, useState } from "react";

const ProfileCardGrid = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=20");
        const data = await response.json();
        setUsers(
          data.results.map((user) => ({
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            image: user.picture.large,
          }))
        );
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  if (users.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h2 className="text-3xl font-bold text-center mb-6">Profile Cards</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden p-5 border border-gray-200">
            <div className="flex justify-center">
              <img
                src={user.image}
                alt="User"
                className="w-24 h-24 rounded-full border-2 border-blue-500"
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCardGrid;


//  Q2> Profile Card Additional funtion like or comment button. 


// import React, { useEffect, useState } from "react";

// const ProfileCard = () => {
//   const [user, setUser] = useState([]);
//   const [like, setLike] = useState([]);
//   const [comment, setComment] = useState([]);

//   useEffect(() => {
//     const fetchUserCard = async () => {
//       const response = await fetch("https://randomuser.me/api/?results=20");
//       const data = await response.json();
//       const userData = data.results.map((user) => ({
//         name: `${user.name.first} ${user.name.last}`,
//         email: user.email,
//         image: user.picture.large,
//       }));
//       setUser(userData);
//       setLike(new Array(userData.length).fill(0));
//       setComment(new Array(userData.length).fill(0));
//     };

//     fetchUserCard();
//   }, []);

//   const updateLike = (index) => {
//     const incLike = [...like];
//     incLike[index] += 1;
//     setLike(incLike);
//   };

//   const updateComment = (index) => {
//     const newComment = [...comment];
//     newComment[index] += 1;
//     setComment(newComment);
//   };

//   return (
//     <div className="min-h-screen bg-gray-200 p-5">
//       <h2 className="text-3xl font-bold text-center mb-6">Profile Cards</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {user.map((user, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg rounded-xl overflow-hidden p-5 border border-gray-200"
//           >
//             <div className="flex justify-center">
//               <img src={user.image} alt="" className="rounded-full h-28 w-28 object-cover" />
//             </div>
//             <div className="text-center mt-4">
//               <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
//               <p className="text-gray-600">{user.email}</p>
//             </div>
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={() => updateLike(index)}
//                 className="text-xl px-2 py-1 bg-blue-500 text-white rounded-md mt-2"
//               >
//                 👍 Like ({like[index]})
//               </button>
//               <button
//                 onClick={() => updateComment(index)}
//                 className="text-xl px-2 py-1 bg-green-600 text-white rounded-md mt-2"
//               >
//                 💬 Comment ({comment[index]})
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;

