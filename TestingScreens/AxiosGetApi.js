import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AxiosGetApi = () => {
    const [data, setdata] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const fetchData = async () => {
        try {
            const response = await axios("https://66b0dce46a693a95b53a7c9d.mockapi.io/api/v1/todo")
            setdata(response.data)
            setLoading(false)
            console.log(response.data);

        } catch (error) {
            console.log("Enter Fatching Data", error);
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
 
    return (
        <View>
            {
                isLoading ?
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                    :
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <View style={{
                                padding: 10,
                                backgroundColor: 'gray',
                                margin: 10,
                                borderRadius: 10
                            }}>
                                <Text>{item.id}</Text>
                                <Text>{item.name}</Text>
                                <Text>{item.email}</Text>
                            </View>
                        )}
                    />
            }
        </View>
    )
}

export default AxiosGetApi

const styles = StyleSheet.create({})