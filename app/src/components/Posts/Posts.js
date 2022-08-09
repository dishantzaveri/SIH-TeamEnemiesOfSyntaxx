import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import theme from '../../theme';
import SinglePost from './SinglePost';
const Posts = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 10,
          backgroundColor: 'white',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/sini-shetty-.jpg',
            }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 100,
            }}
          />
          <View
            style={{
              marginLeft: 20,
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 3,
              paddingHorizontal: 5,
              backgroundColor: theme.colors.greyLight,
            }}>
            <AntDesign name="search1" size={20} />
            <TextInput
              style={{
                flex: 0.8,
                height: 40,
              }}
              placeholder="Search"
            />
          </View>
        </View>
        <AntDesign name="message1" size={25} />
      </View>
      <SinglePost />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({});
