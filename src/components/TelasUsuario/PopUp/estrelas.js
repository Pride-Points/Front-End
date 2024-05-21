import React from 'react';
import "./popUpAvaliacoes";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if ((i < Math.floor(rating) && rating < 4.5) || (i <= Math.floor(rating) && rating >= 4.5)) {
      stars.push(<span key={i} className="star-filled">&#9733;</span>);
    } else {
      stars.push(<span key={i} className="star-empty">&#9734;</span>);
    }
  }
  

  return (
    <div className="dgStar">
      {stars}
    </div>
  );
};

export default StarRating;
