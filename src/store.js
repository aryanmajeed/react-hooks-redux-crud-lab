import { configureStore } from '@reduxjs/toolkit';

import reviewsReducer from './features/reviews/reviewsSlice';
import restaurantsReducer from './features/restaurants/restaurantsSlice';

const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    reviews: reviewsReducer,
  },
});

export default store;
