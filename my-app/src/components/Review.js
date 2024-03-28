import React from 'react';

const Review = ({ review }) => {
  return (
    <div className="review">
      <h5>Rating: {review.rating}</h5>
      <p>{review.comment}</p>
    </div>
  );
};

export default Review;
