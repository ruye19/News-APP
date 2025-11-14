// import React from 'react'

import React from 'react'

const NewItems = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light d-inline-block my-3 mx-3"
      style={{
        width: "18rem",
        height: "28rem", // 👈 fixed height for all cards
        verticalAlign: "top",
      }}
    >
      <img
        src={src}
        alt="news"
        className="card-img-top"
        style={{
          height: "200px",
          width: "100%",
          objectFit: "cover", // 👈 makes image always fit nicely
        }}
      />
      <div
        className="card-body d-flex flex-column justify-content-between"
        style={{ height: "calc(100% - 200px)" }}
      >
        <div>
          <h5 className="card-title">{title?.slice(0, 50)}</h5>
          <p className="card-text">
            {description ? description.slice(0, 100) : "No description"}
          </p>
        </div>
        <a href={url} className="btn btn-primary mt-auto">
          See more
        </a>
      </div>
    </div>
  )
}

export default NewItems
