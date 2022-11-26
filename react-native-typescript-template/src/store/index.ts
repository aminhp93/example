import {configureStore} from '@reduxjs/toolkit';
import messageReducer from './message';
import usersReducer from './users';
import profileReducer from './profile';
import authUserReducer from './authUser';

const store = configureStore({
  reducer: {
    message: messageReducer,
    profile: profileReducer,
    users: usersReducer,
    authUser: authUserReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
