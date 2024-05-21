import React from 'react';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<span key={i} className="star-filled">&#9733;</span>); // Estrela cheia
    } else {
      stars.push(<span key={i} className="star-empty">&#9734;</span>); // Estrela vazia
    }
  }

  return <div className="star-rating">{stars}</div>;
};
