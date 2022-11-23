import React from 'react'
import "./Card.css"

const Card = () => {
  return (
    <div className='card-container'>
      <div className="card">
        <img
          width={400}
          src="https://icdn.ensonhaber.com/resimler/galeri/2_4538.jpg"
          alt=""
        />
        <div>
          <h3>title</h3>
        </div>
        <div>
          <p>content</p>
        </div>
      </div>
    </div>
  );
}

export default Card