import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Chat = ({navigation}) => {
  return (
    <View>
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Individual');
          }}>
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              backgroundColor: 'white',
              borderBottomWidth: 1,
              borderColor: 'lightgray',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://www.india-forums.com/bollywood/images/uploads/DFA_dp013.jpg',
              }}
              style={{
                height: 50,
                width: 50,
                resizeMode: 'contain',
                borderRadius: 100,
              }}
            />
            <View
              style={{
                marginLeft: 20,
              }}>
              <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
                Disha Patani
              </Text>
              <Text>offline</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
