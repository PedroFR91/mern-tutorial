import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import goalReducer from '../features/goals/goalSlice';
import comersReducer from '../features/comers/comersSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    comers: comersReducer,
  },
});
