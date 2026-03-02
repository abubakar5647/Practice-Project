import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {orderNow} from '../Redux/Slice';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const totalOrder = useSelector(state => state);

  const addOrder = item => {
    dispatch(orderNow(item));
  };

  const data = [
    {
      id: 1,
      name: 'Zinger Burger',
      price: '250',
      Image: require('../images/zinger.png'),
    },
    {
      id: 2,
      name: 'Filley Burger',
      price: '620',
      Image: require('../images/simple.png'),
    },
    {
      id: 3,
      name: 'Double Beef Burger',
      price: '750',
      Image: require('../images/double.png'),
    },
    {
      id: 4,
      name: 'Kababish Burger',
      price: '900',
      Image: require('../images/zinger.png'),
    },
    {
      id: 5,
      name: 'Petty Burger',
      price: '500',
      Image: require('../images/simple.png'),
    },
    {
      id: 6,
      name: 'Double Beef Burger',
      price: '750',
      Image: require('../images/double.png'),
    },
    {
      id: 7,
      name: 'Kababish Burger',
      price: '900',
      Image: require('../images/zinger.png'),
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#cb913d',
      }}>
      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />

      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            paddingHorizontal: 20,
            alignItems: 'center',
            paddingTop: 50,
            paddingBottom: 20,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Redux App
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Order')}
            style={{
              flexDirection: 'row',
              gap: 6,
              backgroundColor: '#e9d69e',
              width: 80,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}>
            <Image
              source={require('../images/Vector.png')}
              style={{tintColor: 'black'}}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              : {totalOrder.order.length}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          marginHorizontal: 20,
          flex: 1,
        }}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderRadius: 9,
                backgroundColor: 'white',
                paddingHorizontal: 10,
                paddingVertical: 10,
                marginVertical: 10,
              }}>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 17,
                    fontWeight: '400',
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 19,
                    fontWeight: '500',
                  }}>
                  {item.price}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    addOrder(item);
                  }}
                  style={{
                    backgroundColor: '#cb913d',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 100,
                    height: 40,
                    borderRadius: 30,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 15,
                    }}>
                    Order Now
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <Image source={item.Image} style={{width: 100, height: 90}} />
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
