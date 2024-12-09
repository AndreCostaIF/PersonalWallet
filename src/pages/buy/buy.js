import { Dimensions, StyleSheet, View } from 'react-native';
import { NativeBaseProvider, Box, Text, FormControl, Input, Stack, WarningOutlineIcon, Center, VStack, Button, Link, useToast, Divider, Heading, HStack, Badge, Pressable, Actionsheet, useDisclose, Select, CheckIcon } from 'native-base';
import { MaterialIcons, MaterialCommunityIcons, Entypo, FontAwesome, Octicons, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';


export default function Buy() {


    const [service, setService] = useState("");

    return (
        <View bg="white" width={Dimensions.get('window').width} >
            <Center mt={5}>
                <Box
                    w="90%"
                    maxW="400px"
                    p="5"
                    borderWidth="1"
                    borderColor="coolGray.200"
                    borderRadius="8"
                >
                    <Box mb={5}>
                        <Heading>Registrar entrada</Heading>
                        <Text color="secondary.100">Cadastro de novos ativos</Text>
                    </Box>
                    <VStack space={4}>

                        {/* Campo de Moeda */}
                        <Box >
                            <Text fontSize="md" >
                                Moeda
                            </Text>
                            <Select selectedValue={service} accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />
                            }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                <Select.Item label="bitcoin" value="ux" />
                                <Select.Item label="XRP" value="web" />
                            </Select>
                        </Box>

                        {/* Campo de Email */}
                        <Box>
                            <Text fontSize="sm" mb="2">
                                Valor investido
                            </Text>
                            <Input
                                name="valor"
                                defaultValue=""
                                placeholder="Insira o valor, R$10,00"
                                variant="outline"
                                size="lg"
                                _focus={{ borderColor: "black" }}
                            />
                            <Text fontSize={12} color="secondary.40" mb="2">
                                Valor investido em REAIS (BRL)
                            </Text>
                        </Box>

                        {/* Campo de corretora */}
                        <Box >
                            <Text fontSize="md" >
                                Corretora
                            </Text>
                            <Select selectedValue={service} accessibilityLabel="Choose Service" placeholder="Choose Service"
                                _selectedItem={{
                                    endIcon: <CheckIcon size="5" />
                                }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                <Select.Item label="Foxbit" value="ux" />
                                <Select.Item label="Binance" value="web" />
                                <Select.Item label="Bipa" value="web1" />
                            </Select>
                        </Box>



                        {/* Botão de Entrar */}
                        <Button
                            mt={4}
                            bg="black"
                            //onPress={submit}
                            _text={{ color: "white" }}
                            size="lg">
                            Registrar
                        </Button>

                    </VStack>
                </Box>
            </Center>
        </View>

    );
}


