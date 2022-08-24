import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import EventCard from '../components/EventCard';
import Header from '../components/Header';

const HomeScreen = ({navigation}) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('https://vismayvora.pythonanywhere.com/news/funding/', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setEvents([...result]);
      })
      .catch(error => console.log('error', error));
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          padding: 15,
          elevation: 3,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'relative',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Campaigns
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Add Event');
          }}
          style={{position: 'absolute', right: 20}}>
          <Text
            style={{
              fontSize: 16,
              color: '#1CD6CE',
            }}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          padding: 10,
        }}>
        <FlatList
          data={events}
          keyExtractor={(x, i) => i.toString()}
          renderItem={({item}) => <EventCard event={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginBottom: 50,
  },
});

export default HomeScreen;
