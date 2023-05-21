import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (direction) => {
    const lastIndex = items.length - 1;
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
    } else {
      newIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
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
            className={`carousel-card carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            {item}
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

export default Carousel;
