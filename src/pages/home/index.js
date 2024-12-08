import React, { useRef, useState } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { Box, Text, Pressable, Center, HStack, Divider, VStack } from 'native-base';
import { Entypo, Octicons } from '@expo/vector-icons';
import Wallet from '../../components/wallet';
import { useDispatch } from 'react-redux';
import { hideTabBar, showTabBar } from '../../store/tabBarSlice';

export default function Index() {
  const scrollOffset = useRef(0);
  const dispatch = useDispatch();

  const handleScroll = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const direction = currentOffset > scrollOffset.current ? 'down' : 'up';
    scrollOffset.current = currentOffset;

    if (direction === 'down') {
      dispatch(hideTabBar());
    } else {
      dispatch(showTabBar());
    }
  };

  const [saldoStatus, setSaltoStatus] = useState(true);
  const hiddenSaldo = () => {
    setSaltoStatus(!saldoStatus);
  }

  return (
    <ScrollView flex={1} onScroll={handleScroll} scrollEventThrottle={16}>

      <Box safeArea backgroundColor="#fff" width={Dimensions.get('window').width}>
        {/* SALDO */}
        <HStack justifyContent="center">
          <Box padding={2}>
            <Center>
              <Text opacity={50}>Saldo aproximado</Text>
            </Center>

            <Box flexDir="row" alignItems="center">
              <Text bold fontSize={40}>{saldoStatus ? 'R$ 123,39' : 'R$ ...'}</Text>
              <Pressable onPress={() => hiddenSaldo()} marginLeft={3}>
                <Entypo name={saldoStatus ? 'eye' : 'eye-with-line'} size={34} />
              </Pressable>
            </Box>
          </Box>
        </HStack>

        <Divider marginBottom={10} />

        {/* AÇÃO RÁPIDA */}
        <VStack marginBottom={5}>
          <Text paddingLeft={5}>Ações rápidas</Text>
          <HStack justifyContent="space-around">
            <Pressable
              padding={4}
              backgroundColor="#f2f2f2"
              borderRadius={20}
              width={Dimensions.get('window').width / 2.5}
            >
              <Octicons name="arrow-left" size={30} color="green" />
              <Text fontSize={17}>Comprar</Text>
            </Pressable>

            <Pressable
              padding={4}
              backgroundColor="#f2f2f2"
              borderRadius={20}
              width={Dimensions.get('window').width / 2.5}
            >
              <Octicons name="arrow-right" size={30} color="red" />
              <Text fontSize={17}>Vender</Text>
            </Pressable>
          </HStack>
        </VStack>

        <Divider marginBottom={10} />

        {/* CARTEIRA */}
        <Box width={Dimensions.get('window').width}>
          <Wallet />
        </Box>
      </Box>
    </ScrollView>
  );
}
