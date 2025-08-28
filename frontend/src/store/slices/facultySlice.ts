import { createSlice } from '@reduxjs/toolkit';

const facultySlice = createSlice({
  name: 'faculty',
  initialState: {
    faculty: [],
    loading: false,
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setLoading, setError, clearError } = facultySlice.actions;
export default facultySlice.reducer; 