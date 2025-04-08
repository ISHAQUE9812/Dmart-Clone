import React, { useState } from 'react';

const GitHubProfileFinder = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const fetchGitHubUser = async () => {
    if (!username.trim()) {
      setError('Please enter a GitHub username.');
      setUserData(null);
      return;
    }

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) {
        throw new Error('User not found!');
      }

      const data = await res.json();
      setUserData(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setUserData(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">🔍 GitHub Profile Finder</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={fetchGitHubUser}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {userData && (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm text-center">
          <img
            src={userData.avatar_url}
            alt="Avatar"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-bold">{userData.name}</h2>
          <p className="text-gray-600">@{userData.login}</p>
          <p className="text-sm mt-2">{userData.bio}</p>
          <p className="mt-2">📍 {userData.location || 'Unknown'}</p>

          <div className="flex justify-around mt-4 text-sm text-gray-700">
            <span>👥 {userData.followers} Followers</span>
            <span>📦 {userData.public_repos} Repos</span>
          </div>

          <a
            href={userData.html_url}
            target="_blank"
            rel="noreferrer"
            className="block mt-4 text-blue-600 underline"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default GitHubProfileFinder;
