import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, Alert, Image } from 'react-native';


function Demo5({ navigation }) {

  return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>Demo5</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  textStyle: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 18,
  },
 
});

export default Demo5;