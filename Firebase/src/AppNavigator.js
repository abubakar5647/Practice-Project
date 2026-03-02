import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './Screens/Splash';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import HomeScreen from './Screens/HomeScreen';
import LoginPost from '../../API/SRC/Screens/LoginPost';
import GetAPI from '../../API/SRC/Screens/GetAPI';
import AxiosGetApi from '../../TestingScreens/AxiosGetApi';
import AxiosPostApi from '../../TestingScreens/AxiosPostApi';
import Hooks from '../../TestingScreens/Hooks';
import PostFetch from '../../TestingScreens/PostFetch';
import PutMethod from '../../TestingScreens/AxiosPutApi';
import UseMemo from '../../TestingScreens/UseMemo';
import CounterExample from '../../TestingScreens/UseReducer';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginPost"
          component={LoginPost}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="UseReducer"
          component={CounterExample}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
