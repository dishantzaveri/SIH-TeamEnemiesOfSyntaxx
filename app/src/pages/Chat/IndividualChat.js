import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

const ReceiverChat = () => {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: 'lightblue',
        alignSelf: 'flex-start',
        borderRadius: 10,
      }}>
      <Text
        style={{
          fontSize: 16,
          color: 'white',
        }}>
        Hello
      </Text>
    </View>
  );
};

const SenderChat = () => {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: 'lightyellow',
        alignSelf: 'flex-end',
        borderRadius: 10,
      }}>
      <Text
        style={{
          fontSize: 16,
          maxWidth: 200,
        }}>
        Kya bolti public ????saidnsaihsnudjsb
      </Text>
    </View>
  );
};

const IndividualChat = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
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
      <ScrollView style={{padding: 10}}>
        <ReceiverChat />
        <SenderChat />
      </ScrollView>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={{flex: 1, marginRight: 10}}
          placeholder="Enter Message"
        />
        <Button title="Send" />
      </View>
    </View>
  );
};

export default IndividualChat;

const styles = StyleSheet.create({});
