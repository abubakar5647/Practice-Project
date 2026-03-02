import { ActivityIndicator, StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodo } from '../Redux/MYSlice'

const ProviderWrap = () => {
  const dispatch = useDispatch();
  const Mydata = useSelector(state => state.todo);
  console.log(Mydata);

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {
        Mydata.isLoading ?
          <View style={styles.loading}>
            <ActivityIndicator size='large' color='#0000ff' />
          </View>
          :
          Mydata.error ?
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>An error occurred: {Mydata.error}</Text>
            </View>
            :
            <FlatList
              data={Mydata.data}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <Text style={styles.itemText}>{item.id}</Text>
                  <Text style={styles.itemText}>{item.name}</Text>
                  <Text style={styles.itemText}>{item.email}</Text>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
      }
    </View>
  )
}

export default ProviderWrap

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'white',
    fontSize: 18,
  },
  itemContainer: {
    backgroundColor: 'blue',
    padding: 10,
    margin:10
  },
  itemText: {
    fontSize: 20,
    color: 'white',
  },
});
