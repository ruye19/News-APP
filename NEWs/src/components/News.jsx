import React from 'react'
import { useState,useEffect} from 'react'

const News = (catagory) => {
    const[Articles, setArticles] = useState([])
useEffect(() => {
    let url = ``
    fetch(url).then(response => response.json())
              .then(data => setArticles(data.articles)
            );
}, [])

  return (
    <>
     <h2 className = "text-center" style={{ }}>  
          Latest <span className='badge bg-danger'>News</span>
    </h2>
    {Articles.map((news,index) => {
          return <NewsItem key={index} title ={news.title} description = {news.description} src={news.urlToImage} url={news.url}  />
    })}
    </>
   
  )
}

export default News
