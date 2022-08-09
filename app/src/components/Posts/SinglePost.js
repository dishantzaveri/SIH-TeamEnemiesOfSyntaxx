import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
const SinglePost = () => {
  return (
    <View
      style={{
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{
              height: 55,
              width: 55,
              borderRadius: 100,
            }}
            source={{
              uri: 'https://imgnew.outlookindia.com/public/uploads/articles/2021/10/30/Mrunal_Thakur_21.jpg',
            }}
          />
          <View style={{marginLeft: 10}}>
            <Text style={{fontWeight: '600', color: 'black', fontSize: 16}}>
              Mrunal Thakur
            </Text>
            <Text style={{color: 'black'}}>CEO | Google</Text>
          </View>
        </View>
        <Text
          style={{
            color: '#4186F5',
          }}>
          + Follow
        </Text>
      </View>
      <Text style={{marginTop: 10}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        lobortis eleifend felis, sit amet blandit tellus congue et. Fusce
        dignissim volutpat tellus...
      </Text>
      <Image
        source={{
          uri: 'https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/03/office.jpg',
        }}
        style={{
          width: '100%',
          height: 300,
          marginTop: 10,
          resizeMode: 'center',
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          borderTopColor: 'lightgray',
          borderTopWidth: 1,
          paddingTop: 20,
        }}>
        <AntDesign name="like2" size={25} />
        <Fontisto name="commenting" size={25} />
        <AntDesign name="sharealt" size={25} />
        <Feather name="send" size={25} />
      </View>
    </View>
  );
};

export default SinglePost;

const styles = StyleSheet.create({});
