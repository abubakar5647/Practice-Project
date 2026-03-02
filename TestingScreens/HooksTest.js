import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HooksTest = () => {
    let one = 10;

    const test = () => {
        one = one + 1;
        console.log("Function is updated but not rendering the component");
    }

    const [testing, setTesting] = useState(0);
    const [todo, setTodo] = useState([]);

    const data = () => {
        setTesting(testing + 1);
    }
    const addTodo = () => {
        setTodo((t) => [...t, "New Todo"]);
        console.log("Todo Update");
    }


    // const memoizedValue = useMemo(() => {
    //     console.log('useMemo called');
    //     return testing * 2;
    // }, [testing]);


    useEffect(() => {
        console.log('useEffect called');
    }, [testing]);

    return (
        <View>
            <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 20 }}>First Example: {one}</Text>

            <Button title='Update Variable' onPress={test} />

            <Text style={{ color: 'black', fontSize: 16 }}>{todo}</Text>

            <Button title='Add Todos' onPress={addTodo} />

            <Text style={{ marginTop: 10, marginBottom: 10 }}>useState: {testing}</Text>

            <Button title='Update UseState' onPress={data} />

            {/* <Text style={{ marginTop: 10, marginBottom: 10 }}>Memoized Value: {memoizedValue}</Text> */}

        </View>
    );
}

export default HooksTest;

const styles = StyleSheet.create({});
