import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import bicycleReducer from './slices/bicycleSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    bicycles: bicycleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;