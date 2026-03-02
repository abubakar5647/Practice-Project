import { StyleSheet, Text, View,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GETAPICALL } from './App/Api/ApiCalling';
import EndPoints from './EndPoints';

const Practice = () => {
    const [getData, setGetData] = useState();

    const GetRewardByCompanyId = async () => {
        GETAPICALL(EndPoints.EndpointsUserpost).then((result) => {
            setGetData(result);
        });
    };
    useEffect(() => {
        GetRewardByCompanyId();
    }, []);
    return (
        <View>
            <FlatList
                data={getData}
                renderItem={({ item }) => (
                    <View
                        style={{
                            backgroundColor: 'blue',
                            padding: 20,
                            margin: 10
                        }}
                    >
                        <Text style={{ color: 'white' }}>{item.userId}</Text>
                        <Text style={{ color: 'white' }}>{item.title}</Text>
                        <Text style={{ color: 'white' }}>{item.body}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default Practice

const styles = StyleSheet.create({})