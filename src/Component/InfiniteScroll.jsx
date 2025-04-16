import React, { useEffect, useState, useRef } from "react";

const InfiniteScrollNews = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  // Dummy data generator
  const generateArticles = (page) => {
    const newArticles = Array.from({ length: 5 }, (_, index) => ({
      id: `news-${page}-${index + 1}`,
      title: `News Title ${index + 1 + (page - 1) * 5}`,
      description: "This is a sample description for the article.",
      image: "https://via.placeholder.com/300x180.png?text=News+Image",
    }));
    return newArticles;
  };

  // Load articles
  useEffect(() => {
    const newArticles = generateArticles(page);
    setArticles((prev) => [...prev, ...newArticles]);
  }, [page]);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        📰 Infinite Scroll News Feed
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center"
          >
            <img
              src={article.image}
              alt="news"
              className="rounded-md mb-4 w-full h-40 object-cover"
            />
            <h2 className="text-lg font-semibold">{article.title}</h2>
            <p className="text-gray-600 text-sm">{article.description}</p>
          </div>
        ))}
      </div>

      {/* Loader div to trigger next batch */}
      <div ref={loaderRef} className="mt-10 text-center text-gray-500">
        Loading more articles...
      </div>
    </div>
  );
};

export default InfiniteScrollNews;
