import React from 'react';
import { useDispatch } from 'react-redux';
import { reviewRemoved } from './reviewsSlice';

function Review({ review }) {
  const dispatch = useDispatch();
  function hanldeDelete() {
    dispatch(reviewRemoved(review.id));
  }
  return (
    <div>
      <li>{review.comment}</li>
      <button onClick={hanldeDelete}> Delete Review </button>
    </div>
  );
}

export default Review;
