import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("LoginScreen")
        }, 3000)

    }, [])
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'black',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>Splash</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})