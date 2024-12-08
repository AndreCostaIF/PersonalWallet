import React from 'react';
import { LogBox, Text, View, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { useFonts } from 'expo-font';
import Routes from './src/routes';
import { store } from './src/store';

LogBox.ignoreAllLogs();

const App = () => {
  // Carregar as fontes personalizadas
  const [fontsLoaded] = useFonts({
    RedditSans: require('./assets/fonts/RedditSans-VariableFont_wght.ttf'),
    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
  });

  // Define a fonte a ser utilizada, com fallback para Poppins
  const fontFamily = fontsLoaded ? 'RedditSans' : 'Poppins';

  // Tema personalizado com a fonte
  const theme = extendTheme({
    fonts: {
      heading: fontFamily, // Para títulos
      body: fontFamily, // Para o corpo do texto
      mono: fontFamily, // Para texto monoespaçado (opcional)
    },
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
      secondary:{
        40: '#757575',
      },
    },
    config: {
      initialColorMode: 'light',
    },
  });

  // Exibir um carregador enquanto as fontes estão sendo carregadas
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#fdb01c" />
      </View>
    );
  }

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
