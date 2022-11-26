import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async (username: any) => {
    console.log('profile/fetchProfile');
    const response = await axios(`https://api.github.com/users/${username}`);
    return response.data;
  },
);

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    loading: false,
    data: null,
    err: null,
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(fetchProfile.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(fetchProfile.fulfilled, (state: any, action: any) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProfile.rejected, (state: any) => {
      state.loading = false;
    });
  },
});

export default profileSlice.reducer;
