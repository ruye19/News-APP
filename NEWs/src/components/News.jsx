import React, { useState, useEffect } from 'react';
import NewsItem from './NewItems'

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsdata.io/api/1/latest?apikey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data); // ✅ check what fields exist
        setArticles(data.results || []); // ✅ handle undefined safely
      })
      .catch(error => console.error("Error fetching news:", error));
  }, []);

  return (
    <>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
<div className="d-flex flex-wrap justify-content-center align-items-start w-100">
      {articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.image_url}
            url={news.link}
          />
        ))
      ) : (
        <p className="text-center">Loading...</p>
      )}
</div>
    </>
  );
};

export default News;
