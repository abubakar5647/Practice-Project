import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loops = () => {

    // for (let i = 1; i <= 5; i++) {
    //     console.log(i);
    //     for (let j = 1; j < 5; j++) {
    //         console.log(i + '*' + j + '=' + i * j);
    //     }
    // }

    // const array = ["abubakar", "ansari", "bright", "mughal", "abdullah", "ansari"];

    // for (let index = 0; index < array.length; index++) {
    //     const element = array;
    //     console.log(element);
    // }


    // let numbers = [5, 10, 15, 20, 25];

    // let sum = 0;

    // for (let i = 0; i < numbers.length; i++) {
    //     console.log(i)
    //     sum += i;
    // }

    // console.log("The sum of numbers is:", sum);

    const myArr = [1, 2, 3, 4, 5];
    console.log(myArr);

    const newArr = myArr.slice(1, 4)

    console.log(newArr)

    console.log(myArr);

    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                backgroundColor: 'black'
            }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, }}>welcome</Text>
        </View>
    )
}

export default Loops

const styles = StyleSheet.create({})