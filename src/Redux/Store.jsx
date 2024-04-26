import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './Reducer/AuthSlice';

export const store = configureStore({
    reducer: {
      customer: customerReducer,
    },
  });