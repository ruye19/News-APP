import React, { useState, useEffect } from 'react';
import NewsItem from './NewItems'

const News = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us${category ? `&category=${category}` : ""}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data); // ✅ check what fields exist
        setArticles(data.articles || []); // ✅ handle undefined safely
      })
      .catch(error => console.error("Error fetching news:", error));
  }, [category]);

  return (
    <>
      <h2 className="text-center my-1 mx-3">
        Latest <span className="badge bg-danger">News</span>
      </h2>
<div className="d-flex m-1 flex-wrap justify-content-center align-items-start w-100">
      {articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            urlToImage={news.urlToImage}
            url={news.url}
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
