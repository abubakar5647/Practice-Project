import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { POSTAPICALL } from '../Api/ApiCalling';
import EndPoints from './EndPoints';

const LoginPost = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handletData = async () => {
        const formData = new FormData();
        formData.append("Password", password);
        formData.append("Email", email);

        POSTAPICALL(EndPoints.EndpointsUserLogin, formData, true).then(
            (result) => {
                console.log("Your Result", result);
            }
        );
    };
    
    return (
        <View
            style={{
                backgroundColor: '#F6F7FB',
                height: '100%'
            }}>
            <Text
                style={{
                    textAlign: 'center',
                    fontSize: 40,
                    fontWeight: 'bold',
                    marginTop: '40%',
                    color: 'black'
                }}>Post API</Text>
            <TouchableOpacity
                style={{
                    elevation: 2
                }}>
                <TextInput
                    style={{
                        borderColor: '#70707021',
                        backgroundColor: '#FFFFFF',
                        borderRadius: 15,
                        fontSize: 15,
                        color: '#212529',
                        borderWidth: 1,
                        marginHorizontal: 16,
                        padding: 16,
                        marginTop: 40
                    }}
                    placeholder="Enter Your Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    elevation: 2
                }}>
                <TextInput
                    style={{
                        borderColor: '#70707021',
                        backgroundColor: '#FFFFFF',
                        borderRadius: 15,
                        fontSize: 15,
                        color: '#212529',
                        borderWidth: 1,
                        marginHorizontal: 16,
                        marginVertical: 20,
                        padding: 16
                    }}
                    placeholder="Enter Your Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </TouchableOpacity>


            <TouchableOpacity
                onPress={handletData}
                style={{
                    alignItems: 'center',
                    marginTop: 40,
                    marginBottom: 30
                }}>
                <View
                    style={{
                        backgroundColor: '#FF0F88',
                        padding: 15,
                        borderRadius: 10,
                        width: 375,
                    }}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                            textAlign: 'center'
                        }}>
                        Login
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default LoginPost

const styles = StyleSheet.create({})