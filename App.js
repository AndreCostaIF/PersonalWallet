import { NavigationContainer } from '@react-navigation/native';
import { extendTheme, NativeBaseProvider } from 'native-base';
import React from 'react';
import { LogBox } from 'react-native';
import {Provider} from 'react-redux';
import Routes from './src/routes';
import { store} from './src/store';


LogBox.ignoreAllLogs();

const App = () => {
  const theme = extendTheme({
    colors: {
      primary: {
        40: '#ffff00',
        50: '#fff5db',
        100: '#ffe5ad',
        200: '#ffd37e',
        300: '#fdc14c',
        400: '#fdb01c',
        500: '#e39602',
        600: '#b17500',
        700: '#7f5300',
        800: '#4d3200',
        900: '#1d1000',
      },
    },
    config: {
      initialColorMode: 'light',
    },
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <Routes />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>

  );
};

export default App;
