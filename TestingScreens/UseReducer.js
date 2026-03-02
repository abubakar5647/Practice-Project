import React, { useReducer } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const initialState = { count: 0 };

const reducer = (state, action) => {
    if (action.type === 'increment') {
        return { count: state.count + 1 };
    } else if (action.type === 'decrement') {
        return { count: state.count - 1 };
    } else if (action.type === 'reset') {
        return initialState;
    } else {
        throw new Error();
    }
}

const CounterExample = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <View style={styles.container}>
            <Text
                style={{
                    color: 'black',
                    fontSize: 18,
                    fontWeight: '600'
                }}>Count: {state.count}</Text>

            <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'increment' })}>
                <Text style={styles.buttonText}>Addition</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'decrement' })}>
                <Text style={styles.buttonText}>Subtraction</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'reset' })}>
                <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray'
    },
    button: {
        backgroundColor: 'black',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        width: 150
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    }
});

export default CounterExample;
