// MovieSearchApp.jsx
import React, { useState } from 'react';

const MovieSearchApp = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const API_KEY = '8fa354cf'; // Your OMDB API Key

  const fetchMovies = async () => {
    if (!query.trim()) {
      setError('Please enter a movie name.');
      setMovies([]);
      return;
    }

    try {
      const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
      const data = await res.json();
      if (data.Response === 'True') {
        setMovies(data.Search.slice(0, 5));
        setError('');
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      setMovies([]);
      setError('Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">🎬 Movie Search App</h1>

      <div className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie name..."
          className="px-4 py-2 rounded border border-gray-400 mr-2"
        />
        <button
          onClick={fetchMovies}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="bg-white shadow-md rounded p-4 text-center"
          >
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
              alt={movie.Title}
              className="w-full h-60 object-cover mb-2 rounded"
            />
            <h2 className="text-lg font-semibold">{movie.Title}</h2>
            <p className="text-gray-600">📅 {movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearchApp;
