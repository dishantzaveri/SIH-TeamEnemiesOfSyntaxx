import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Dimensions, SafeAreaView, } from 'react-native';
import { withTheme, Text, RadioButton, Button } from 'react-native-paper';
import logo from '../assets/logo.jpg';
import Circle2 from '../assets/circle2.png';
import { height, width } from '../Consts';
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default function Onboarding2({ navigation }) {
  const {colors} = useTheme();

    return (
        <SafeAreaView style={styles.container} >
           <LinearGradient
          colors={[colors.primary, '#ADD8E6']}
          style={{width: '100%', height: 200, position: 'relative'}}></LinearGradient>
            {/* <View style={styles.logoImg}>
                <Image
                    source={logo}
                    style={{
                    
                      alignContent: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
             
                      margin: height * 0.020,
                      width: width * 0.2,
                      height: height * 0.12,
                    }}

                />

            </View> */}
            <View style={styles.card}>
                <Image
                    source={Circle2}

                />
                <View>
                    <Text style={styles.text}>Please Tell about your professional life.</Text>
                </View>
                <Image
                   source={{
                    uri: 'https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/sini-shetty-.jpg',
                  }}
                  style={{
                    width: width * 0.15,
                    height: height * 0.11,
                    borderRadius: 100,
                  }}

                />
                <Text style={styles.text2}>Select your skill level.</Text>
                <View style={styles.button2}>
                    <Button style={styles.button3} labelStyle={styles.text1} >
                        Fresher
                    </Button>
                    <Button style={styles.button3} labelStyle={styles.text1} >
                        Internship
                    </Button>
                    <Button style={styles.button3} labelStyle={styles.text1}>
                        Experienced
                    </Button>
                </View>
                <View style={styles.button}>
                    <Button labelStyle={styles.text3}>
                        Next
                    </Button>
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'

    },
    text1: {
        fontSize: 12,

        color: "#1D3557",
        textAlign: "center",
    },
    text3: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
    logoImg: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height * 0.035,
        marginBottom: height * 0.025,


    },
    card: {
        elevation: 10,
        backgroundColor: '#fff',
        shadowOffset: { width: 5, height: 5 },
        shadowColor: '#333',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        marginHorizontal: width * 0.05,
        marginVertical: height * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.75,
        position: 'absolute',
    },
    image: {
        margin: height * 0.020,
    },
    button: {
        width: width * 0.25,
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 25,
        backgroundColor: '#00CFDE',
        color: '#fff',
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
    },
    button2: {

        justifyContent: 'space-between',


        width: width * 0.85,
       
        color: '#000000',
        backgroundColor: '#E8EEF7',
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 10,
    },
    button3: {

        color: '#000000',
        backgroundColor: '#E8EEF7',
      
   
    },

    text: {
        fontSize: 20,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        color: '#00CFDE',
        fontWeight: "500",
        marginBottom: height * 0.035,
    },
    text2: {
        fontSize: 18,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        color: '#000000',
        fontWeight: "500",
        margin: height * 0.035,
    },
});
