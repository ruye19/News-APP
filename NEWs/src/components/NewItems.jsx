import React from 'react'

const NewItems = ({title, description, src, url}) => {
  return (
    
      <div className="card" style="width: 18rem;">
        <img src={src} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description ? description : "no description"}</p>
          <a href={url} className="btn btn-primary">see more</a>
        </div>
      </div>
      
    
  )
}

export default NewItems
