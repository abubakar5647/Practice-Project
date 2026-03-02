import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from './src/Screens/SplashScreen'
import Home from './src/Screens/Home'
import Order from './src/Screens/Order'

const ReduxNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='SplashScreen' component={SplashScreen} />
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Order' component={Order} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ReduxNavigator

const styles = StyleSheet.create({})