import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import studentReducer from './slices/studentSlice';
import facultyReducer from './slices/facultySlice';
import courseReducer from './slices/courseSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    students: studentReducer,
    faculty: facultyReducer,
    courses: courseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 

// Configure global axios base URL from env for API calls
axios.defaults.baseURL =
  (process.env.REACT_APP_API_URL as string | undefined) || 'http://localhost:5001';