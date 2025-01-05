import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  username: '',
  errorMessage: '',
  loading: false,
};

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  const { username, password } = credentials;
  if (username === 'admin' && password === 'password123') {
    return { username };
  }
  return rejectWithValue('Invalid credentials');
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.errorMessage = '';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.username = action.payload.username;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.errorMessage = action.payload || 'Authentication failed.';
      });
  },
});

export default authSlice.reducer;