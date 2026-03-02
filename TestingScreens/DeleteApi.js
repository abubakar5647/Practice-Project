import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Modal, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'

const DeleteApi = () => {
    const [data, setdata] = useState([])

    const geteData = async () => {
        let result = await fetch("https://66b0dce46a693a95b53a7c9d.mockapi.io/api/v1/users")

        result = await result.json();
        if (result) {
            setdata(result)
        }
    }

    // put and patch, foam data axios and rtk 

    const deleteData = async (id) => {
        const url = `https://66b0dce46a693a95b53a7c9d.mockapi.io/api/v1/users/${id}`;
        let result = await fetch(url, {
            method: "DELETE",
        })

        result = await result.json();
        console.log("deleted", result);
        if (result?.id) {
            let updateData = data.filter(item => item.id !== id)
            setdata(updateData)
        }
    }
    useEffect(() => {
        geteData()
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Delete List</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    // console.log(item.jobTitle,"helooo");
                    return (
                        <View style={styles.item}>
                            <View style={styles.itemRow}>
                                <Text style={styles.text}>{item?.id}</Text>
                                <TouchableOpacity onPress={() => deleteData(item.id)}>
                                    <Image source={require("../Images/false.png")} />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.text}>{item.jobTitle}</Text>
                            <Text style={styles.text}>{item.description}</Text>
                        </View>
                    )
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        padding: 10,
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        marginBottom: 10,
    },
    item: {
        backgroundColor: '#e8dfee',
        marginVertical: 10,
        borderRadius: 10,
        padding: 10,
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    text: {
        color: 'black',
    },
});

export default DeleteApi