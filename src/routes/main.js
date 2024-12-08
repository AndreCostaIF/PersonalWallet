import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import Index from './mainStack/homeStack';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function Main() {
  const isHidden = useSelector((state) => state.tabBar.isHidden);
  const tabBarAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(tabBarAnimation, {
      toValue: isHidden ? 100 : 0, // 100 para descer, 0 para posição original
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isHidden]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Oculta o cabeçalho
        tabBarStyle: [
          styles.tabBarStyle,
          {
            transform: [
              {
                translateY: tabBarAnimation, // Controla a posição vertical
              },
            ],
          },
        ],
        tabBarActiveTintColor: '#000', // Cor do ícone ativo
        tabBarInactiveTintColor: '#92929D', // Cor do ícone inativo
      }}
      initialRouteName="HomeStack"
      backBehavior="initialRoute"
    >
      <Tab.Screen
        name="HomeStack"
        component={Index}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="wallet" size={24} color={color} />
          ),
          tabBarLabel: 'Carteira', // Exibe o título abaixo do ícone
          tabBarLabelStyle: {
            fontSize: 12, // Define o tamanho da fonte do título
            color: '#000', // Cor do texto do título
          },
        }}
      />

      <Tab.Screen
        name="HomeStack2"
        component={Index}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="compare-arrows" color={color} size={24} />
          ),
          tabBarLabel: 'Transações', // Exibe o título abaixo do ícone
          tabBarLabelStyle: {
            fontSize: 12, // Define o tamanho da fonte do título
            color: '#000', // Cor do texto do título
          },
        }}
      />

      <Tab.Screen
        name="HomeStack3"
        component={Index}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={24} />
          ),
          tabBarLabel: 'Perfil', // Exibe o título abaixo do ícone
          tabBarLabelStyle: {
            fontSize: 12, // Define o tamanho da fonte do título
            color: '#000', // Cor do texto do título
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: '#F2F2F2', // Cor do fundo do menu
    height: 70, // Altura do menu
    bottom: 10, // Espaçamento inferior
    marginHorizontal: 10, // Espaçamento horizontal
    borderRadius: 50, // Bordas arredondadas
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    opacity: 0.9, // Transparência leve
  },
});
