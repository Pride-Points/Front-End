import React from 'react';
import './mapExplorer.css';

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      stars.push(<span key={i} className="star-filled">&#9733;</span>);
    } else if (i === Math.floor(rating) && rating % 1 !== 0) {
      stars.push(<span key={i} className="star-half">★</span>);
    } else {
      stars.push(<span key={i} className="star-empty">&#9734;</span>);
    }
  }

  return (
    <div className="star-cont">
      {stars}
    </div>
  );
};

export default StarRating;
