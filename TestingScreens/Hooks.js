import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, ImageBackground, Button } from 'react-native';

const Hooks = () => {
    const [input, setInput] = useState('');
    const [toggle, setToggle] = useState(false);
    const [bothToggle1, setBothToggle1] = useState(false);
    const [bothToggle2, setBothToggle2] = useState(false);
    const [thirdToggle1, setthirdToggle1] = useState(false);
    const [thirdToggle2, setthirdToggle2] = useState(false);
    const [thirdToggle3, setthirdToggle3] = useState(false);
    const [forthToggle, setforthToggle] = useState(false);
    const [forthToggle2, setforthToggle2] = useState(false);
    const [forthToggle3, setforthToggle3] = useState(false);

    // input function
    const handleInput = (text) => {
        setInput(text);
    }

    // first toggle function
    const handleButtonPress = () => {
        setToggle(!toggle)
    }

    // sec toggle function
    const bothHandlePress = () => {
        setBothToggle1(!bothToggle1);
        setBothToggle2(!bothToggle2);
    };

    const handlebothToggle1 = () => {
        setBothToggle1(true);
        setBothToggle2(false);
    }
    const handlebothToggle2 = () => {
        setBothToggle1(false);
        setBothToggle2(true);
    }

    // third toggle function
    const thirdHandlePress = () => {
        setthirdToggle1(!thirdToggle1);
        setthirdToggle2(!thirdToggle2);
        setthirdToggle3(!thirdToggle3);
    }

    const thirdhandleOn = () => {
        setthirdToggle1(!thirdToggle1);
        setthirdToggle2(false)
        setthirdToggle3(false)
    }
    const thirdhandleOn2 = () => {
        setthirdToggle2(!thirdToggle2);
        setthirdToggle1(false)
        setthirdToggle3(false)
    }
    const thirdhandleOn3 = () => {
        setthirdToggle3(!thirdToggle3);
        setthirdToggle1(false)
        setthirdToggle2(false)
    }

    // forth toggle functons
    const forthHandlePress = () => {
        setforthToggle(true);
        setforthToggle2(true);
        setforthToggle3(true);
    }

    const forthHandleOn = () => {
        setforthToggle(true);
        setforthToggle2(false);
        setforthToggle3(false)
    }
    const forthHandleOn2 = () => {
        setforthToggle(false);
        setforthToggle2(true);
        setforthToggle3(false)
    }
    const forthHandleOn3 = () => {
        setforthToggle(false);
        setforthToggle2(false);
        setforthToggle3(true)
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <ImageBackground source={require("../Images/iner.png")}
                style={styles.bgImg}>
                <View style={styles.overlay} />
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, marginTop: 40, color: 'white' }}>Uses of UseState</Text>

                    <View style={{ width: "90%" }}>
                        <View style={{
                            width: "100%",
                            backgroundColor: 'white',
                            marginTop: 20,
                            borderRadius: 10
                        }}>
                            <TextInput
                                placeholder='Enter Here...'
                                value={input}
                                onChangeText={handleInput}
                            />
                        </View>

                        <Text style={{ color: 'white', fontSize: 20 }}>Input Text Here... {input}</Text>
                    </View>

                    <View style={{
                        width: "90%",
                        alignItems: 'center',
                        backgroundColor: 'white',
                        borderRadius: 10,
                        marginTop: 10,
                    }}>
                        <Text style={{
                            color: 'black',
                            fontWeight: 'bold',
                            marginTop: 10,
                        }}>Toggle Button On or Off</Text>

                        <TouchableOpacity
                            style={{
                                backgroundColor: toggle ? 'yellow' : 'red',
                                padding: 10,
                                width: "60%",
                                alignItems: 'center',
                                borderRadius: 10,
                                margin: 10,
                            }}>
                            <Text style={{ color: 'black' }}>{toggle ? 'On' : 'Off'}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={handleButtonPress}
                            style={{
                                backgroundColor: 'black',
                                padding: 10,
                                width: 150,
                                alignItems: 'center',
                                borderRadius: 10,
                                margin: 10,
                            }}>
                            <Text style={{ color: 'white' }}>Button</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        width: "90%",
                        alignItems: 'center',
                        backgroundColor: 'white',
                        borderRadius: 10,
                        marginTop: 10,
                    }}>
                        <Text style={{
                            color: 'black',
                            fontWeight: 'bold',
                            marginTop: 10,
                        }}>Toggle Both Button On or Off</Text>

                        <View
                            style={{
                                flexDirection: 'row',
                                gap: 10
                            }}>
                            <TouchableOpacity
                                onPress={() => handlebothToggle1()}
                                style={{
                                    backgroundColor: bothToggle1 ? 'yellow' : 'red',
                                    padding: 10,
                                    width: "40%",
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    margin: 10,
                                }}>
                                <Text style={{ color: 'black' }}>{bothToggle1 ? 'On' : 'Off'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => handlebothToggle2()}
                                style={{
                                    backgroundColor: bothToggle2 ? 'yellow' : 'red',
                                    padding: 10,
                                    width: "40%",
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    margin: 10,
                                }}>
                                <Text style={{ color: 'black' }}>{bothToggle2 ? 'On' : 'Off'}</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            onPress={bothHandlePress}
                            style={{
                                backgroundColor: 'black',
                                padding: 10,
                                width: 150,
                                alignItems: 'center',
                                borderRadius: 10,
                                margin: 10,
                            }}>
                            <Text style={{ color: 'white' }}>Button</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        width: "90%",
                        alignItems: 'center',
                        backgroundColor: 'white',
                        borderRadius: 10,
                        marginTop: 10,
                    }}>
                        <Text style={{
                            color: 'black',
                            fontWeight: 'bold',
                            marginTop: 10,
                        }}>Toggle Both Button On or Off </Text>

                        <View
                            style={{
                                flexDirection: 'row',
                                gap: 10
                            }}>
                            <TouchableOpacity
                                onPress={() => thirdhandleOn()}
                                style={{
                                    backgroundColor: thirdToggle1 ? 'yellow' : 'red',
                                    padding: 10,
                                    width: "25%",
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    margin: 10,
                                }}>
                                <Text style={{ color: 'black' }}>{thirdToggle1 ? 'On' : 'Off'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => thirdhandleOn2()}
                                style={{
                                    backgroundColor: thirdToggle2 ? 'yellow' : 'red',
                                    padding: 10,
                                    width: "25%",
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    margin: 10,
                                }}>
                                <Text style={{ color: 'black' }}>{thirdToggle2 ? 'On' : 'Off'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => thirdhandleOn3()}
                                style={{
                                    backgroundColor: thirdToggle3 ? 'yellow' : 'red',
                                    padding: 10,
                                    width: "25%",
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    margin: 10,
                                }}>
                                <Text style={{ color: 'black' }}>{thirdToggle3 ? 'On' : 'Off'}</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            onPress={() => thirdHandlePress()}
                            style={{
                                backgroundColor: 'black',
                                padding: 10,
                                width: 150,
                                alignItems: 'center',
                                borderRadius: 10,
                                margin: 10,
                            }}>
                            <Text style={{ color: 'white' }}>Button</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        width: "90%",
                        alignItems: 'center',
                        backgroundColor: 'white',
                        borderRadius: 10,
                        marginTop: 10,
                    }}>
                        <Text style={{
                            color: 'black',
                            fontWeight: 'bold',
                            marginTop: 10,
                        }}>Toggle Both Button On or Off</Text>

                        <View
                            style={{
                                flexDirection: 'row',
                                gap: 10
                            }}>
                            <TouchableOpacity
                                onPress={() => forthHandleOn()}
                                style={{
                                    backgroundColor: forthToggle ? 'yellow' : 'red',
                                    padding: 10,
                                    width: "25%",
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    margin: 10,
                                }}>
                                <Text style={{ color: 'black' }}>{forthToggle ? 'On' : 'Off'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => forthHandleOn2()}
                                style={{
                                    backgroundColor: forthToggle2 ? 'yellow' : 'red',
                                    padding: 10,
                                    width: "25%",
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    margin: 10,
                                }}>
                                <Text style={{ color: 'black' }}>{forthToggle2 ? 'On' : 'Off'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => forthHandleOn3()}
                                style={{
                                    backgroundColor: forthToggle3 ? 'yellow' : 'red',
                                    padding: 10,
                                    width: "25%",
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    margin: 10,
                                }}>
                                <Text style={{ color: 'black' }}>{forthToggle3 ? 'On' : 'Off'}</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            onPress={() => forthHandlePress()}
                            style={{
                                backgroundColor: 'black',
                                padding: 10,
                                width: 150,
                                alignItems: 'center',
                                borderRadius: 10,
                                margin: 10,
                            }}>
                            <Text style={{ color: 'white' }}>Button</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ImageBackground>
        </ScrollView>
    );
}

export default Hooks;

const styles = StyleSheet.create({
    bgImg: {
        width: "100%",
        height: "100%",
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.4)'
    }
});
