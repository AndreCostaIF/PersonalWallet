import { createSlice } from '@reduxjs/toolkit';

const tabBarSlice = createSlice({
  name: 'tabBar',
  initialState: {
    isHidden: false,
  },
  reducers: {
    hideTabBar: (state) => {
      state.isHidden = true;
    },
    showTabBar: (state) => {
      state.isHidden = false;
    },
  },
});

export const { hideTabBar, showTabBar } = tabBarSlice.actions;

export default tabBarSlice.reducer;
