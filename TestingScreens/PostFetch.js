import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const PostFetch = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [description, setDescription] = useState('');
    // const [email, setEmail] = useState('');

    const sendData = async () => {
        const url = "https://66b0dce46a693a95b53a7c9d.mockapi.io/api/v1/users";
        const result = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ jobTitle, description })
        })

        console.log(result);
    }

    return (
        <View style={{ alignItems: 'center' }}>
            <Text
                style={{
                    color: 'black',
                    fontSize: 17,
                    fontWeight: '500',
                    marginTop: 30
                }}>
                Post API Data</Text>
            <TextInput
                placeholder='Enter Your Name'
                value={jobTitle}
                onChangeText={(text) => setJobTitle(text)}
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
                placeholder='Enter Your Age'
                value={description}
                onChangeText={(text) => setDescription(text)}
                style={{
                    width: '85%',
                    borderWidth: 0.4,
                    borderColor: 'black',
                    padding: 10,
                    marginTop: 20,
                    borderRadius: 6
                }}
            />
            {/* <TextInput
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
            /> */}

            <TouchableOpacity
                onPress={sendData}
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
    )
}

export default PostFetch

const styles = StyleSheet.create({})