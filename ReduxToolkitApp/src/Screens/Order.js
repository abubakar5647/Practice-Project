import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { rejectOrder } from '../Redux/Slice';

const Order = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const orders = useSelector(state => state.order);

    const removeOrder = (index) => {
        dispatch(rejectOrder(index));
    }
    return (
        <View>
            <View
                style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 20,

                    paddingTop: 50,
                    paddingBottom: 20
                }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}>Back</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    marginHorizontal: 20,
                    height: "100%",
                }}>
                <FlatList
                    data={orders}
                    renderItem={({ item, index }) => (
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            borderRadius: 9,
                            backgroundColor: 'white',
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            marginVertical: 10
                        }}>
                            <View>
                                <Text
                                    style={{
                                        color: 'black',
                                        fontSize: 17,
                                        fontWeight: '400'
                                    }}>
                                    {item.name}
                                </Text>
                                <Text
                                    style={{
                                        color: 'black',
                                        fontSize: 19,
                                        fontWeight: '500'
                                    }}>
                                    {item.price}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => { removeOrder(index) }}
                                    style={{
                                        backgroundColor: 'red',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 120,
                                        height: 40,
                                        borderRadius: 30
                                    }}>
                                    <Text
                                        style={{
                                            color: 'white',
                                            fontSize: 15
                                        }}>Remove Order</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Image source={item.Image} style={{ width: 100, height: 90 }} />
                            </View>
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    )
}

export default Order

const styles = StyleSheet.create({})