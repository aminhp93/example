import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk(
  'authUser/login',
  async (data: {username: string; password: string}) => {
    console.log('authUser/login');
    // const response = await axios(`https://api.github.com/users/${username}`);
    // return response.data;
    if (data.username === 'username' && data.password === 'password') {
      return {username: 'username', password: 'password'};
    }
    throw Error('Invalid username or password');
  },
);

export const logout = createAsyncThunk('authUser/logout', async () => {
  console.log('authUser/logout');
  // const response = await axios(`https://api.github.com/users/${username}`);
  // return response.data;
  return {username: '', password: ''};
});

const authUserSlice = createSlice({
  name: 'authUser',
  initialState: {
    username: '',
    password: '',
    loading: false,
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(login.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state: any, action: any) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.loading = false;
    });
    builder.addCase(login.rejected, (state: any) => {
      state.loading = false;
    });
    builder.addCase(logout.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(logout.fulfilled, (state: any) => {
      state.username = '';
      state.password = '';
      state.loading = false;
    });
    builder.addCase(logout.rejected, (state: any) => {
      state.loading = false;
    });
  },
});

export default authUserSlice.reducer;
