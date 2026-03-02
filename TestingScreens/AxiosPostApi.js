import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

const AxiosPostApi = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const Submit = async () => {
        const url = "https://66b0dce46a693a95b53a7c9d.mockapi.io/api/v1/todo";

        try {
            const response = await axios.post(url, { name, email });
            console.log("Data sent successfully:", response.data);
            console.warn("post Successfull");
        } catch (error) {
            console.error("Error sending data: ", error);
        }
    };

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Text
                style={{
                    color: 'black',
                    fontSize: 17,
                    fontWeight: '500',
                    marginTop: 30
                }}>
                Post API Data using Axios
            </Text>
            <TextInput
                placeholder='Enter Your Name'
                value={name}
                onChangeText={(text) => setName(text)}
                style={{
                    width: '85%',
                    borderWidth: 0.4,
                    borderColor: 'black',
                    padding: 10,
                    marginTop: 20,
                    borderRadius: 6
                }}
            />
            <TextInput
                placeholder='Enter Your Email'
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={{
                    width: '85%',
                    borderWidth: 0.4,
                    borderColor: 'black',
                    padding: 10,
                    marginTop: 20,
                    borderRadius: 6
                }}
            />

            <TouchableOpacity
                onPress={Submit}
                style={{
                    width: '85%',
                    borderWidth: 0.4,
                    borderColor: 'black',
                    padding: 10,
                    marginTop: 20,
                    borderRadius: 6,
                    backgroundColor: 'gray',
                    alignItems: 'center'
                }}>
                <Text style={{ fontSize: 17, color: 'white' }}>Post</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AxiosPostApi;

const styles = StyleSheet.create({});
