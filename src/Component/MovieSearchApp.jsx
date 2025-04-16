import React, { useState } from "react";

const MovieSearchApp = () => {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState([]);
  const [err, setErr] = useState("");
  const API_KEY = "8fa354cf";
  const fetchMovies = async () => {
    if (!search.trim()) {
      setErr("Please enter your Movie name");
      return;
    }
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`
      );
      if (!res.ok) throw new Error("Movie not found");
      const data = await res.json();
      setMovie(data.Search.slice(0, 15));
    } catch (error) {
      setErr(err.message || "somthing went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h2 className="text-2xl font-semibold tracking-tight mb-4">Movie Search App In React </h2>
      <div className="flex mb-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Please Search movie"
          className="border border-black rounded-md px-2 py-1"
        />
        <button
          onClick={fetchMovies}
          className="px-3 py-1 bg-blue-500 rounded-md text-white ml-4"
        >
          Search
        </button>
      </div>
      {err && <p className="text-red-500">{err}</p>}

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {movie.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-4 w-64 transition-transform hover:scale-105"
          >
            <img
              src={item.Poster}
              alt={item.Title}
              className="w-full h-72 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              {item.Title}
            </h2>
            <p className="text-sm text-gray-600">Year: {item.Year}</p>
            <p className="text-sm text-gray-600">Rating: {item.Rating}</p>
            <p className="text-sm text-gray-600">
              Box Office: {item.BoxOffice}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearchApp;
