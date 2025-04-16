// MovieSearchApp.jsx
import React, { useState } from "react";

const API_KEY = "YOUR_OMDB_API_KEY"; // Replace with your OMDb API key

const MovieSearchApp = () => {
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const fetchMovies = async () => {
    if (!movie.trim()) {
      setError("Please enter a movie name.");
      setMovies([]);
      return;
    }

    try {
      const res = await fetch(`https://www.omdbapi.com/?s=${movie}&apikey=${API_KEY}`);
      const data = await res.json();

      if (data.Response === "False") {
        setError("Movies not found.");
        setMovies([]);
      } else {
        setMovies(data.Search.slice(0, 5)); // Get top 5 movies
        setError("");
      }
    } catch (err) {
      setError("Failed to fetch movie data.");
      setMovies([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">🎬 Movie Search App</h1>
      <div className="flex gap-3 mb-4">
        <input
          type="text"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
          placeholder="Enter movie title"
          className="px-4 py-2 border rounded"
        />
        <button
          onClick={fetchMovies}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6">
        {movies.map((movieItem) => (
          <div key={movieItem.imdbID} className="bg-white shadow-md rounded p-4 text-center">
            <img
              src={movieItem.Poster !== "N/A" ? movieItem.Poster : "https://via.placeholder.com/150"}
              alt={movieItem.Title}
              className="mx-auto mb-2 w-36 h-52 object-cover"
            />
            <h2 className="font-semibold text-lg">{movieItem.Title}</h2>
            <p className="text-sm text-gray-500">📅 {movieItem.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearchApp;