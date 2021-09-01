import React from 'react';
import Restaurant from './Restaurant';

function Restaurants({ restaurants }) {
  console.log(restaurants);
  return (
    <ul>
      {restaurants === []
        ? null
        : restaurants.map((restaurant) => (
            <Restaurant key={restaurant.id} restaurant={restaurant} />
          ))}
    </ul>
  );
}

export default Restaurants;
