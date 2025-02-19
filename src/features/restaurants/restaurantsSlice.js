import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: { entities: [] },
  reducers: {
    restaurantAdded(state, action) {
      state.entities.push({ name: action.payload, id: uuid() });
    },
    restaurantRemoved(state, action) {
      const index = state.entities.findIndex(
        (resturant) => resturant.id === action.payload
      );
      state.entities.splice(index, 1);
    },
  },
});

export const { restaurantAdded, restaurantRemoved } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
