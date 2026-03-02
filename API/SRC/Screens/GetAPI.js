import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import EndPoints from './EndPoints';
import { GETAPICALL } from '../Api/ApiCalling';

const GetAPI = () => {
    const [getData, setGetData] = useState();

    const [getId, setGetId] = useState();

    const clear = () => {
        setGetData({})
        setGetId("")
    }

    const GetRewardByCompanyId = async () => {
        GETAPICALL(EndPoints.EndpointsComments + "?postId=" + getId).then((result) => {
            setGetData(result);
        });
    };

    return (
        <View
            style={{
                height: '100%',
                backgroundColor: '#49CFA3'
            }}
        >
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
                placeholder="Check Id"
                onChangeText={(text) => setGetId(text)}
                value={getId}
            />

            <TouchableOpacity
                onPress={GetRewardByCompanyId}
                style={{
                    backgroundColor: '#5C128C',
                    padding: 10,
                    margin: 20,
                    borderRadius: 25,
                    alignItems: 'center'
                }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Get id</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={clear}
                style={{
                    backgroundColor: '#FF0F88',
                    padding: 10,
                    margin: 20,
                    borderRadius: 25,
                    alignItems: 'center'
                }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Clear</Text>
            </TouchableOpacity>


            <FlatList
                data={getData}
                renderItem={({ item }) => (
                    <View
                        style={{
                            backgroundColor: '#FF0F88',
                            margin: 10,
                            borderRadius: 20,
                            paddingHorizontal: 20,
                        }}
                    >
                        <Text style={{ color: 'white' }}>{item.Id}</Text>
                        <Text style={{ color: 'white', fontSize: 20 }}>{item.postId}</Text>
                        <Text style={{ color: 'white', fontSize: 20 }}>{item.name}</Text>
                    </View>
                )}
            />
        </View>


    )
}

export default GetAPI

const styles = StyleSheet.create({})