import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider, Box, Text, FormControl, Input, Stack, WarningOutlineIcon, Center, VStack, Button, Link, useToast, Divider, Heading, HStack, Badge, Pressable } from 'native-base';
import { MaterialIcons, MaterialCommunityIcons, Entypo, FontAwesome, Octicons, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function Wallet() {


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
                            <Pressable padding={2} width="100%" flex={1} flexDir="row" justifyContent="space-between">
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
                            <Pressable padding={2} width="100%" flex={1} flexDir="row" justifyContent="space-between">
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
                            <Pressable padding={2} width="100%" flex={1} flexDir="row" justifyContent="space-between">
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
        </Center>
    );
}


