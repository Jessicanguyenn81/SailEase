import React, { useState } from 'react';
import './Carousel.css';

export default function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (direction) => {
    const lastIndex = items.length - 1;
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
      console.log("prev clicked, new index is:", newIndex)
    } else {
      newIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
      console.log("next clicked, new index is:", newIndex);
    }

    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <h1>Carousel</h1>
      <div className="carousel-container">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-card carousel-item ${index === currentIndex % items.length ? 'active' : ''}`}
          >
            <h3 className=''>{item.name}</h3>          
          </div>
        ))}
      </div>

      <div className="carousel-buttons">
        <button onClick={() => handleClick('prev')}>Previous</button>
        <button onClick={() => handleClick('next')}>Next</button>
      </div>
    </div>
  );
};
