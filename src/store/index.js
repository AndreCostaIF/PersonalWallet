import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import tabBarReducer from './tabBarSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    tabBar: tabBarReducer,
  },
});
