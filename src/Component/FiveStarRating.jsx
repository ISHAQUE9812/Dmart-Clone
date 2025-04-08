// Q> 5 Star Rating or hover onMouseEnter or onMoseLeave.
import React, { useState } from "react";

const FiveStarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  let arr = new Array(5).fill(0);

  return (
    <div className="text-4xl text-center">
      {arr.map((item, index) => (
        <span
          key={index + 1}
          onClick={() => setRating(index + 1)}
          onMouseEnter={()=> setHover(index + 1)}
          onMouseLeave={()=> setHover(null)}
          className={index < (hover || rating) ? "text-yellow-500" : "text-gray-700"}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default FiveStarRating;
