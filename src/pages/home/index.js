import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions, ScrollView  } from 'react-native';
import { NativeBaseProvider, Box, Text, StatusBar, Pressable, View, Container, Center, HStack, Icon, VStack, Button, Input, FlatList, Divider } from 'native-base';
import { MaterialIcons, Entypo, FontAwesome, Octicons } from '@expo/vector-icons';
import Wallet from '../../components/wallet';


export default function Index() {

  const assets = [
    { id: '1', name: 'Bitcoin', symbol: 'BTC', balance: '0,000231', value: 'R$ 20,47' },
    { id: '2', name: 'Solana', symbol: 'SOL', balance: '---', value: '---' },
    { id: '3', name: 'XRP', symbol: 'XRP', balance: '---', value: '---' },
  ];

  return (
    <ScrollView flex={1}>
      <Box
        safeArea
        backgroundColor="#fff"
        width={Dimensions.get('window').width}
      >

        {/* SALDO */}
        <HStack justifyContent="center">
          <Box padding={2}>
            <Center>
              <Text opacity={50}>
                Saldo aproximado
              </Text>
            </Center>
            <Box flexDir="row" alignItems="center"  >
              <Text bold fontSize={40}>
                R$ 123,39
              </Text>
              <Pressable marginLeft={10}>
                <Entypo name="eye" size={34} />
                {/* eye-with-line */}
              </Pressable>
            </Box>
          </Box>
        </HStack>

        <Divider marginBottom={10} />
        {/* ACAO RAPIDA */}
        <VStack marginBottom={5}>
          <Text paddingLeft={5}>Ações rápidas</Text>
          <HStack justifyContent="space-around">
            <Pressable padding={4}  backgroundColor="#f2f2f2" borderRadius={20} width={Dimensions.get('window').width / 2.5}>
              <Octicons name="arrow-left" size={30} color="green" marginBottom={15} />
              <Text fontSize={17}>
                Comprar
              </Text>
            </Pressable>

            <Pressable padding={4} backgroundColor="#f2f2f2" borderRadius={20} width={Dimensions.get('window').width / 2.5}>
              <Octicons name="arrow-right" size={30} color="red" marginBottom={15} />
              <Text fontSize={17}>
                Vender
              </Text>
            </Pressable>
          </HStack>
        </VStack>

        <Divider marginBottom={10} />


      <Box width={Dimensions.get('window').width}>
        {/* CARTEIRA */}
        <Wallet />
      </Box>
      </Box>
    </ScrollView>


  );
}

