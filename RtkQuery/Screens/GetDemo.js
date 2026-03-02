import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useGetDataQuery } from './GetApiCall';

const GetDemo = () => {
    const dispatch = useDispatch();

    const data = useGetDataQuery();
    console.log("Mydata", data);

    return (
        <View>
            <Text>GetDemo</Text>
        </View>
    );
};

export default GetDemo;

const styles = StyleSheet.create({});
