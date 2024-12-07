import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import api from '../services/api';

const initialState = {
  user: null,
  loadingUser: false,
  notificationTotal: 0,
  orders: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload.user;
      if (action.payload.token) {
        AsyncStorage.setItem('dk_token', action.payload.token);
      }
    },
    signOut: state => {
      state.user = null;
      AsyncStorage.removeItem('dk_token');
    },
    setNotification: (state, action) => {
      state.notificationTotal = action.payload;
    },
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
  },
  extraReducers: build => {
    build.addCase(checkUser.pending, state => {
      state.loadingUser = true;
    });
    build.addCase(checkUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loadingUser = false;
    });
    build.addCase(checkUser.rejected, state => {
      state.user = null;
      state.loadingUser = true;
    });
    build.addCase(updateUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const checkUser = createAsyncThunk('user/checkUser', async () => {
  const token = await AsyncStorage.getItem('dk_token');
  if (token) {
    //const res = await api.get(`/auth/app/${token}`);
    //return res.data;
    return true;
  }
});

export const updateUser = createAsyncThunk('user/updateUser', async () => {
  const token = await AsyncStorage.getItem('dk_token');
  //const res = await api.get(`/auth/app/${token}`);
 // return res.data;
 return true;
});

export const {signIn, signOut, setNotification, setOrders} = userSlice.actions;

export default userSlice.reducer;
