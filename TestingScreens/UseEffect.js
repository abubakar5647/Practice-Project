import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

const UseEffect = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUserData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            const result = await response.json();
            setData([result]);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getUserData();
    }, []);

    if (loading) {
        return (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={{ color: 'black' }}>{item.title}</Text>
                        <Text style={{ color: 'black' }}>{item.body}</Text>
                    </View>
                )}
            />
        </View>
    );
}

export default UseEffect;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    item: {
        borderBottomWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 4
    }
});
