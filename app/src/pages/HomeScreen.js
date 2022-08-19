import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import EventCard from '../components/EventCard';
import Header from '../components/Header';

const HomeScreen = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://vismayvora.pythonanywhere.com/news/funding/", requestOptions)
      .then(response => response.json())
      .then(result =>{console.log(result) ; setEvents([...result])} )
      .catch(error => console.log('error', error));
  }, []);


  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={(x, i) => i.toString()}
        renderItem={({item}) => <EventCard event={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
});

export default HomeScreen;
