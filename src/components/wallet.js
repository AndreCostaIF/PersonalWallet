import { Dimensions, StyleSheet, View } from 'react-native';
import { NativeBaseProvider, Box, Text, FormControl, Input, Stack, WarningOutlineIcon, Center, VStack, Button, Link, useToast, Divider, Heading, HStack, Badge, Pressable, Actionsheet, useDisclose } from 'native-base';
import { MaterialIcons, MaterialCommunityIcons, Entypo, FontAwesome, Octicons, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function Wallet() {

    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();
    return (
        <Center>
            <Box
                w="90%"
                maxW="400px"
                p="5"
                borderWidth="1"
                borderColor="coolGray.200"
                borderRadius="8"
            >
                <VStack space={4}>
                    {/*  */}
                    <Box>
                        <Text fontSize="sm">
                            Ativos
                        </Text>
                        <Text fontSize="md" bold mb="2">
                            Carteira
                        </Text>

                        <Input
                            name="text"
                            defaultValue=""
                            placeholder="Buscar"
                            variant="outline"
                            borderRadius={20}
                            size="lg"
                            type="password"
                            _focus={{ borderColor: "black" }}

                            InputLeftElement={<Ionicons ml="2" paddingLeft={4} size={25} color="gray" name="search" />}
                        />
                    </Box>
                    <Divider />

                    {/* LISTA DA CARTEIRA */}
                    <Box mb={2}>
                        <HStack mb={2}>
                            <Pressable onPress={onOpen} padding={2} width="100%" flex={1} flexDir="row" justifyContent="space-between">
                                <Box>

                                    <Text fontSize="md">Bitcoin</Text>
                                    <Text fontSize={12} color="#757575">BTC</Text>
                                </Box>

                                <HStack>
                                    <Box marginRight={2}>
                                        <Text fontSize="md">BTC 0,0000213</Text>
                                        <Text fontSize="sm" color="#757575">R$57,98</Text>
                                    </Box>
                                    <Box>

                                        <Badge borderRadius={10} colorScheme="success">
                                            <Text>
                                                <MaterialCommunityIcons color="green" ml="2" paddingLeft={4} size={13} name="arrow-up-bold" />
                                                5,63%

                                            </Text>
                                        </Badge>

                                    </Box>
                                </HStack>

                            </Pressable>
                        </HStack>

                        <HStack mb={2}>
                            <Pressable onPress={onOpen} padding={2} width="100%" flex={1} flexDir="row" justifyContent="space-between">
                                <Box>

                                    <Text fontSize="md">Bitcoin</Text>
                                    <Text fontSize={12} color="#757575">BTC</Text>
                                </Box>

                                <HStack>
                                    <Box marginRight={2}>
                                        <Text fontSize="md">BTC 0,0000213</Text>
                                        <Text fontSize="sm" color="#757575">R$57,98</Text>
                                    </Box>
                                    <Box>

                                        <Badge borderRadius={10} colorScheme="danger">
                                            <Text>
                                                <MaterialCommunityIcons color="red" ml="2" paddingLeft={4} size={13} name="arrow-down-bold" />
                                                5,63%

                                            </Text>
                                        </Badge>

                                    </Box>
                                </HStack>

                            </Pressable>
                        </HStack>

                        <HStack mb={2}>
                            <Pressable onPress={onOpen} padding={2} width="100%" flex={1} flexDir="row" justifyContent="space-between">
                                <Box>

                                    <Text fontSize="md">Bitcoin</Text>
                                    <Text fontSize={12} color="#757575">BTC</Text>
                                </Box>

                                <HStack>
                                    <Box marginRight={2}>
                                        <Text fontSize="md">BTC 0,0000213</Text>
                                        <Text fontSize="sm" color="#757575">R$57,98</Text>
                                    </Box>
                                    <Box>
                                        <Badge borderRadius={10} colorScheme="success">
                                            <Text>
                                                <MaterialCommunityIcons color="green" ml="2" paddingLeft={4} size={13} name="arrow-up-bold" />
                                                5,63%

                                            </Text>
                                        </Badge>
                                    </Box>
                                </HStack>

                            </Pressable>
                        </HStack>
                    </Box>
                </VStack>
            </Box>

            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content >

                    <View width={Dimensions.get('window').width} padding={8}>
                        {/* DADOS DA MOEDA */}
                        <Box>
                            <HStack alignItems="center" mb={2}>
                                <Heading mr={1}>Bitcoin</Heading>
                                <Text color="secondary.40">BTC</Text>
                            </HStack>

                            <HStack justifyContent="space-between" alignItems="center">
                                <Text fontSize="md" mr={1}>Saldo em <Text bold>BTC</Text></Text>
                                <Text color="">BTC 0,0000123</Text>
                            </HStack>
                            <HStack justifyContent="space-between" alignItems="center">
                                <Text fontSize="md" mr={1}>Saldo em <Text bold>Reais</Text></Text>
                                <Text color="">R$ 57,38</Text>
                            </HStack>
                        </Box>

                        <Divider mt={4} mb={4} />

                        {/* COTACAO DA MOEDA */}
                        <Box>
                            <HStack justifyContent="space-between" alignItems="center">
                                <Text fontSize="md" mr={1}>Cotação atual</Text>
                                <Text color="">R$ 600.157,38</Text>
                            </HStack>
                            <HStack justifyContent="space-between" alignItems="center">
                                <Text fontSize="md" mr={1}>Valorização</Text>
                                <Badge borderRadius={10} colorScheme="success">
                                    <Text>
                                        <MaterialCommunityIcons color="green" ml="2" paddingLeft={4} size={13} name="arrow-up-bold" />
                                        5,63%

                                    </Text>
                                </Badge>
                            </HStack>
                        </Box>

                        <Divider mt={4} mb={4} />

                        {/* BOTOES DE ACAO */}
                        <Box mb={2}>
                            <Box mb={2}>
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
                            </Box>
                            <Box mb={2}>
                                <HStack justifyContent="space-around">
                                    <Pressable
                                        padding={4}
                                        backgroundColor="#f2f2f2"
                                        borderRadius={20}
                                        width={Dimensions.get('window').width / 2.5}
                                    >
                                        <MaterialIcons name="compare-arrows" size={30} />
                                        <Text fontSize={17}>Transações</Text>
                                    </Pressable>

                                    <Pressable
                                        padding={4}
                                        backgroundColor="#f2f2f2"
                                        borderRadius={20}
                                        width={Dimensions.get('window').width / 2.5}
                                    >
                                        <Octicons name="file" size={30} />
                                        <Text fontSize={17}>Relatório</Text>
                                    </Pressable>
                                </HStack>
                            </Box>
                        </Box>
                    </View>


                </Actionsheet.Content>
            </Actionsheet>
        </Center>
    );
}


