import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Modal, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';

const PutMethod = () => {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleModal = (userData) => {
        setShowModal(true);
        setSelectedUser(userData);
    };

    // Fetch Data
    const geteData = async () => {
        let result = await fetch("https://66b0dce46a693a95b53a7c9d.mockapi.io/api/v1/todo");
        result = await result.json();
        console.log(result, 'result');

        if (result) {
            setData(result);
        }
    };

    // Delete Data
    const deleteData = async (id) => {
        const url = `https://66b0dce46a693a95b53a7c9d.mockapi.io/api/v1/todo/${id}`;
        let result = await fetch(url, {
            method: "DELETE",
        });

        result = await result.json();
        console.log("deleted", result);
        if (result?.id) {
            let updatedData = data.filter(item => item.id !== id);
            setData(updatedData);
        }
    };

    // Update Data
    const updateUser = async (id) => {
        const { name, email } = selectedUser;
        const url = `https://66b0dce46a693a95b53a7c9d.mockapi.io/api/v1/todo/${id}`;
        const result = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email })
        });

        const updatedUser = await result.json();
        if (updatedUser) {
            console.log("update successful", updatedUser);
            const updatedData = data.map(item => item.id === id ? updatedUser : item);
            setData(updatedData);
            setShowModal(false); 
        }
    };

    useEffect(() => {
        geteData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Put List</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <View style={styles.itemRow}>
                            <Text style={styles.text}>{item.id}</Text>
                            <TouchableOpacity onPress={() => deleteData(item.id)}>
                                <Image source={require("../Images/false.png")} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.text}>{item.name}</Text>
                            <Text style={styles.text}>{item.email}</Text>

                            <TouchableOpacity
                                onPress={() => handleModal(item)}
                                style={styles.updateButton}
                            >
                                <Text style={{ color: 'white' }}>Update</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

            {selectedUser && (
                <Modal
                    visible={showModal}
                    transparent={true}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalView}>
                            <TextInput
                                placeholder='Enter Your Job Title...'
                                value={selectedUser.name}
                                onChangeText={(text) => setSelectedUser(prevData => ({
                                    ...prevData,
                                    name: text
                                }))}
                                style={styles.inputStyle}
                            />
                            <TextInput
                                placeholder='Write your message...'
                                value={selectedUser.email}
                                onChangeText={(text) => setSelectedUser(prevData => ({
                                    ...prevData,
                                    email: text
                                }))}
                                style={styles.inputStyle}
                            />
                            <TouchableOpacity
                                onPress={() => updateUser(selectedUser.id)}
                                style={styles.buttonStyle}
                            >
                                <Text style={styles.buttonText}>Update</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}

        </View>
    );
};

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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: 'white',
        padding: 50,
        borderRadius: 10,
        shadowColor: "#000",
        elevation: 4,
        shadowOpacity: 0.70,
        alignItems: 'center',
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        width: 250,
        marginBottom: 10,
        borderRadius: 5,
    },
    buttonStyle: {
        backgroundColor: 'black',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
    },
    updateButton: {
        backgroundColor: 'black',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        borderRadius: 10,
        marginVertical: 10,
    },
});

export default PutMethod;
