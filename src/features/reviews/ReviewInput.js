import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reviewAdded } from './reviewsSlice';

function ReviewInput({ restaurantId }) {
  const dispatch = useDispatch();
  const [review, setReview] = useState({
    restaurantId: restaurantId,
    comment: '',
  });
  function handleChange(e) {
    setReview({ ...review, comment: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(reviewAdded(review));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Comment
          <textarea value={review.comment} onChange={handleChange} />
        </label>
        <input type="submit" value="Add Review" />
      </form>
    </div>
  );
}

export default ReviewInput;
