import { Center, Heading, HStack, Spinner } from 'native-base';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkUser } from '../store/userSlice';
import AuthRoutes from './auth';
import MainRoutes from './main';
//import Logo from '../assets/logo.svg';
//import EmailRoutes from './email';

const Routes = () => {
  const [timeLoading, setTimeLoading] = useState(true);
  const user = useSelector(state => state.user.user);
  const loadingUser = useSelector(state => state.user.loadingUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      setTimeLoading(false);
    }, 1000);
  }, []);

  if (loadingUser || timeLoading) {
    return (
      <Center flex={1} px="3" backgroundColor="fff">
        {/* <Logo width={200} fill="#000000" /> */}

        <HStack space={2} alignItems="center" mt={2}>
          <Spinner accessibilityLabel="Carregando Usuário" color="darkText" />
          <Heading color="darkText" fontSize="md">
            Carregando
          </Heading>
        </HStack>
      </Center>
    );
  }
  if (user) {
    if (user.name) {
      console.log(user);
      return <MainRoutes />;
    }

    // return <EmailRoutes />;
  }

  return <AuthRoutes />;
};

export default Routes;
