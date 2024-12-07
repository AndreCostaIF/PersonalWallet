import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider, Box, Text, FormControl, Input, Stack, WarningOutlineIcon, Center, VStack, Button, Link, useToast } from 'native-base';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import yup from '../../utils/validations';
import {useDispatch} from 'react-redux';
import {signIn} from '../../store/userSlice';
import { useState } from 'react';

export default function Login({navigation}) {

  const dispatch = useDispatch();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const submit = async data => {
    try {
      setLoading(true);
      //const res = await api.post('/auth/app', data);
      dispatch(signIn({user: {id: 1, name:'andre'}, token: '12345'}));
      //console.log(dispatch(signIn({user: {id: 1, name:'teste'}, token: '12345'})));
    } catch (error) {
      if (error.isAxiosError) {
        toast.show({
          description: error.response.data,
          status: 'error',
          title: 'Erro',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Center flex={1} bg="white">
      <Box
        w="90%"
        maxW="400px"
        p="5"
        borderWidth="1"
        borderColor="coolGray.200"
        borderRadius="8"
      >
        <VStack space={4}>
          {/* Campo de Email */}
          <Box>
            <Text fontSize="sm" mb="2">
              Email
            </Text>
            <Input
             name="mail"
             defaultValue=""
              placeholder="Email"
              variant="outline"
              size="lg"
              _focus={{ borderColor: "black" }}
            />
          </Box>

          {/* Campo de Senha */}
          <Box>
            <Text fontSize="sm" mb="2">
              Senha
            </Text>
            <Input

              name="password"
              defaultValue=""
              placeholder="Senha"
              variant="outline"
              size="lg"
              type="password"
              _focus={{ borderColor: "black" }}
            />
          </Box>

          {/* Botão de Entrar */}
          <Button 
            bg="black"
            onPress={submit}
            _text={{ color: "white" }} 
            size="lg">
            Entrar
          </Button>

          {/* Link para cadastro */}
          <Link mt="3" alignSelf="" _text={{ color: "black", fontSize: "sm" }}>
            Cadastre-se aqui
          </Link>
        </VStack>
      </Box>
    </Center>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
