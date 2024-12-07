import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../pages/auth/login';
//import RecoverPassword from '../pages/auth/recoverPassword';
import home from '../pages/home/index';

const Auth = createNativeStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
    <Auth.Screen name="Login" component={Login} />
     <Auth.Screen name="home" component={home} />
    {/* <Auth.Screen name="RecoverPassword" component={RecoverPassword} />  */}
  </Auth.Navigator>
);

export default AuthRoutes;