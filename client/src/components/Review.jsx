import React from 'react';

const Review = ({ review }) => {
  return (
    <div className="review">
      <h4>{review.title}</h4>
      <p>{review.comment}</p>
    </div>
  );
};

export default Review;
