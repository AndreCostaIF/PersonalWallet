import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Badge, Icon, Pressable, Stack } from 'native-base';
import Home from '../../pages/home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
//import Logo from '../../assets/logo.svg';


const HomeStack = createNativeStackNavigator();

const HomeRoutes = () => {
    const notification = useSelector(state => state.user.notificationTotal);
    const nome = useSelector(state => state.user.user.name);
    console.log(useSelector(state => state.user.user.name))
    return (
        <HomeStack.Navigator
            initialRouteName="Home"
            screenOptions={({ navigation }) => ({
                headerStyle: { backgroundColor: '#DCDCDC' },
                headerTintColor: '#000',
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                //headerTitle: () => <Logo width={100} height={50} fill="#000000" />,
                headerBackVisible: false,
                // headerRight: () => (
                //   <Pressable onPress={() => navigation.navigate('NotificationStack')}>
                //     {notification !== '0' && (
                //       <Badge
                //         colorScheme="danger"
                //         rounded="full"
                //         mb={-4}
                //         mr={-2}
                //         zIndex={1}
                //         variant="solid"
                //         alignSelf="flex-end"
                //         _text={{
                //           fontSize: 12,
                //         }}>
                //         {notification}
                //       </Badge>
                //     )}
                //     <Icon color="white" as={<Ionicons name="notifications" />} />
                //   </Pressable>
                // ),
            })}>
            <HomeStack.Screen
                name="Home"
                component={Home}
                options={{
                     title: `Olá, ${nome}!` 
                    }} 
            />



            {/* <HomeStack.Screen
        name="Provider"
        component={Provider}
        options={({navigation}) => ({
          headerLeft: () => (
            <Pressable
              onPress={() => {
                if (navigation.canGoBack()) {
                  navigation.goBack();
                } else {
                  navigation.navigate('Home');
                }
              }}>
              <Icon color="white"
                as={<MaterialCommunityIcons name="arrow-back-ios" />}
              />
            </Pressable>
          ),
        })}
      /> */}

        </HomeStack.Navigator>
    );
};

export default HomeRoutes;
