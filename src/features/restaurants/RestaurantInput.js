import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { restaurantAdded } from './restaurantsSlice';

function RestaurantInput() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(restaurantAdded(name));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <input type="submit" value="Add Restaurant" />
      </form>
    </div>
  );
}

export default RestaurantInput;
