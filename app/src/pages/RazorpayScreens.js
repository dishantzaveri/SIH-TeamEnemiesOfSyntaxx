import React from 'react';
import {Button, StyleSheet, Alert, View} from 'react-native';

import RazorpayCheckout from 'react-native-razorpay';

const RazorpayScreens = () => {
  let options = {
    description: 'Online Fee',
    image: 'https://i.imgur.com/3g7nmJC.png',
    currency: 'INR',
    amount: '25000',
    key: 'rzp_test_631wMxKie5nOL2',
    name: 'Test',
    prefill: {
      email: 'test@email.com',
      contact: '9191919191',
      name: 'ReactNativeForYou',
    },
    theme: {color: '#528FF0'},
  };

  const onPressButton = () => {
    RazorpayCheckout.open(options)
      .then((data) => {
        // handle success
        Alert.alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch((error) => {
        // handle failure
        Alert.alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={() => onPressButton()} title="Press Me to Pay" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default RazorpayScreens;