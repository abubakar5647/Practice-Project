import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

const PostData = () => {

    // const [firstname, setFirstName] = useState();
    // const [lastname, setLasttName] = useState();
    // const [email, setEmail] = useState();

    // const formData = new FormData();
    // formData.append("FirstName", firstname);
    // formData.append("LastName", lastname);
    // formData.append("Email", email);
    // POSTAPICALL(Endpoints.EndpointsAccountsignup, formData, true).then(
    //     (result) => {
    //         console.log("responseeeeeeeresultresult", result.data);
    //     }
    // );

    return (
        <View
            style={{
                height: '100%',
                justifyContent: 'center',
                backgroundColor: '#F6F7FB'
            }}>
            <TextInput
                style={{
                    margin: 20,
                    padding: 15,
                    borderColor: 'gray',
                    elevation: 2,
                    color: 'black',
                    backgroundColor: 'white',
                    borderRadius: 10
                }}
                placeholder="First Name"
            // onChangeText={(text) => setGetId(text)}
            // value={}
            />

            <TextInput
                style={{
                    margin: 20,
                    padding: 15,
                    borderColor: 'gray',
                    elevation: 2,
                    color: 'black',
                    backgroundColor: 'white',
                    borderRadius: 10
                }}
                placeholder="Last Name"
            // onChangeText={(text) => setGetId(text)}
            // value={}
            />

            <TouchableOpacity

                style={{
                    backgroundColor: '#5C128C',
                    padding: 10,
                    margin: 20,
                    borderRadius: 25,
                    alignItems: 'center'
                }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Login</Text>
            </TouchableOpacity>

        </View>

    )

};
export default PostData

const styles = StyleSheet.create({})