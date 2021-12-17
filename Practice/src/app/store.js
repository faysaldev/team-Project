import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/appSlice';
import trySlice from '../features/trySlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    try:trySlice,
  },
});