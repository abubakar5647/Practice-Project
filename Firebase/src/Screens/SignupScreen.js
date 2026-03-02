import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const navigation = useNavigation();

    const handleCreateAccount = async () => {
        try {
            const isUserCreated = await auth().createUserWithEmailAndPassword(
                email,
                password
            );
            console.log(isUserCreated);

            navigation.navigate("LoginPost")
        } catch (error) {
            console.log("error");
        }
    }


    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'black'
            }}>
            <StatusBar backgroundColor="black" barStyle="light-content" />

            <Image source={require("../assets/firebase.png")}
                style={{ width: 200, height: 100, alignSelf: 'center', marginTop: 100 }} />
            <Text
                style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: '700',
                    marginTop: 30,
                    textAlign: 'center'
                }}>Signup Screen</Text>

            <View
                style={{
                    borderWidth: 1,
                    borderColor: "white",
                    height: 50,
                    borderRadius: 30,
                    marginHorizontal: 20,
                    paddingLeft: 10,
                    marginTop: 200
                }}>
                <TextInput
                    placeholder='Enter Your Email..'
                    placeholderTextColor="white"
                    value={email}
                    onChangeText={(text) => setemail(text)}
                    style={{ color: 'white' }}
                />
            </View>

            <View
                style={{
                    borderWidth: 1,
                    borderColor: "white",
                    height: 50,
                    borderRadius: 30,
                    marginHorizontal: 20,
                    paddingLeft: 10,
                    marginTop: 20
                }}>
                <TextInput
                    style={{ color: 'white' }}
                    placeholder='Enter Your Password..'
                    placeholderTextColor="white"
                    value={password}
                    onChangeText={(text) => setpassword(text)}
                />
            </View>


            <TouchableOpacity
                onPress={handleCreateAccount}
                style={{
                    marginTop: 70,
                    borderWidth: 1,
                    borderColor: "white",
                    height: 50,
                    borderRadius: 30,
                    marginHorizontal: 20,
                    justifyContent: 'center',
                    backgroundColor: 'white'
                }}>
                <View style={{ alignItems: 'center', }}>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>Create Account</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity
                onPress={() => navigation.navigate("LoginScreen")}>
                <Text
                    style={{
                        textAlign: 'center',
                        color: '#ec5901',
                        fontSize: 18,
                        fontWeight: '600',
                        marginTop: 40
                    }}>Already Have A Account</Text>
            </TouchableOpacity>

        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({})