import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';

interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  console.log('fetch');
  // const response = await fetch('https://reqres.in/api/users?delay=1');
  // return (await response.json()).data as UserData[];
  const response = await axios('https://reqres.in/api/users?delay=1');
  return response.data.data;
});

export const usersAdapter = createEntityAdapter<UserData>();

const usersSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState({
    loading: false,
  }),
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(fetchUsers.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state: any, action: any) => {
      usersAdapter.setAll(state, action.payload);
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, (state: any) => {
      state.loading = false;
    });
  },
});

export const {
  selectById: selectUserById,
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers,
} = usersAdapter.getSelectors((state: any) => state.users);

export default usersSlice.reducer;
