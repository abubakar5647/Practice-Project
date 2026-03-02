import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <Text
                style={{
                    color: 'white',
                    fontSize: 18
                }}>Welcome To Your Home</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})