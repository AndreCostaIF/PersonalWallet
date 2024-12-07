import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeRoutes from './mainStack/homeStack';
const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Oculta o cabeçalho
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#F2F2F2', // Cor do fundo do menu
          borderRadius: 50,
          height: 70,
          marginHorizontal: 10,
          bottom: 10,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 10,
          opacity: 0.9,
        },
        tabBarActiveTintColor: '#000', // Cor do ícone ativo
        tabBarInactiveTintColor: '#92929D', // Cor do ícone inativo
      }}
      initialRouteName="HomeStack"
      backBehavior="initialRoute"
    >

      <Tab.Screen
        name="HomeStack"
        component={HomeRoutes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="wallet" color={color} size={24} />
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
        component={HomeRoutes}
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
        component={HomeRoutes}
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
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
