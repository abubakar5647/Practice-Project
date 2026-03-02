import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const isUserLogin = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      console.log(isUserLogin);
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <StatusBar backgroundColor="black" barStyle="light-content" />

      <Image
        source={require('../assets/firebase.png')}
        style={{width: 200, height: 100, alignSelf: 'center', marginTop: 100}}
      />
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: '700',
          marginTop: 30,
          textAlign: 'center',
        }}>
        Login Screen
      </Text>

      <View
        style={{
          borderWidth: 1,
          borderColor: 'white',
          height: 50,
          borderRadius: 30,
          marginHorizontal: 20,
          paddingLeft: 10,
          marginTop: 200,
        }}>
        <TextInput
          placeholder="Enter Your Email.."
          placeholderTextColor="white"
          value={email}
          onChangeText={text => setemail(text)}
          style={{color: 'white'}}
        />
      </View>

      <View
        style={{
          borderWidth: 1,
          borderColor: 'white',
          height: 50,
          borderRadius: 30,
          marginHorizontal: 20,
          paddingLeft: 10,
          marginTop: 20,
        }}>
        <TextInput
          style={{color: 'white'}}
          placeholder="Enter Your Password.."
          placeholderTextColor="white"
          value={password}
          onChangeText={text => setpassword(text)}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity
        onPress={handleLogin}
        style={{
          marginTop: 70,
          borderWidth: 1,
          borderColor: 'white',
          height: 50,
          borderRadius: 30,
          marginHorizontal: 20,
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}>
            Login
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        <Text
          style={{
            textAlign: 'center',
            color: '#ec5901',
            fontSize: 18,
            fontWeight: '600',
            marginTop: 40,
          }}>
          Create A New Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
