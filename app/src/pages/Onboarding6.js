import React, { useEffect, useState, useCallback } from 'react';
import {
    View, StyleSheet, Image, TextInput,
    TouchableOpacity,
    Button,
    ToastAndroid,
    KeyboardAvoidingView,
    ScrollView, SafeAreaView
} from 'react-native';
import {
    Text,
    Card,
    Title,
    Subheading,
    RadioButton,
} from 'react-native-paper';;
import Circle5 from '../assets/circle5.png';
import { height, width } from '../Consts';
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Onboarding6 = ({ navigation }) => {

   const { colors } = useTheme();
    const [skills, setSkills] = useState('');
    const [skills1, setSkills1] = useState('');
    const [skills2, setSkills2] = useState('');
    const [skills3, setSkills3] = useState('');
    const [skills4, setSkills4] = useState('');
    const [skills5, setSkills5] = useState('');

    return (
        <SafeAreaView style={styles.container} >
               <LinearGradient
          colors={[colors.primary, '#ADD8E6']}
          style={{width: '100%', height: 200, position: 'relative'}}></LinearGradient>
         
            <View style={styles.card}>
                <Image
                    source={Circle5}

                />
                <View>
                    <Text style={styles.text}>Setup profile to find your perfect Mentor.</Text>
                </View>
                <Image
                   source={{
                    uri: 'https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/sini-shetty-.jpg',
                  }}
                  style={{
                    width: width * 0.25,
                    height: height * 0.11,
                    borderRadius: 100,
                  }}

                />
                <View style={styles.form}>
                <Subheading>Your Skills*</Subheading>
                <TextInput
                    value={skills}
                    onChangeText={setSkills}
                    underlineColorAndroid="transparent"
                    placeholderTextColor={colors.placeholder}
                    style={{
                        ...styles.nameInput,
                        borderColor: colors.textAfter,
                        color: colors.text,
                        //backgroundColor: colors.background,
                    }}
                    placeholder={'Search Your Skills Here'}
                />
                      <Subheading>Suggested Skills*</Subheading>
                <TextInput
                    value={skills1}
                    onChangeText={setSkills1}
                    underlineColorAndroid="transparent"
                    placeholderTextColor={colors.placeholder}
                    style={{
                        ...styles.nameInput,
                        borderColor: colors.textAfter,
                        color: colors.text,
                        //backgroundColor: colors.background,
                    }}
                    placeholder={'User Experience'}
                />
                <TextInput
                    value={skills2}
                    onChangeText={setSkills2}
                    underlineColorAndroid="transparent"
                    placeholderTextColor={colors.placeholder}
                    style={{
                        ...styles.nameInput,
                        borderColor: colors.textAfter,
                        color: colors.text,
                        //backgroundColor: colors.background,
                    }}
                    placeholder={'User Research'}
                />
                <TextInput
                    value={skills3}
                    onChangeText={setSkills3}
                    underlineColorAndroid="transparent"
                    placeholderTextColor={colors.placeholder}
                    style={{
                        ...styles.nameInput,
                        borderColor: colors.textAfter,
                        color: colors.text,
                        //backgroundColor: colors.background,
                    }}
                    placeholder={'Competitive Analysis'}
                />
                  <View style={styles.button}>
                <Button title="Next"  >
                </Button>
                </View>
            </View>
            </View>
           
        </SafeAreaView>
    );
}

export default Onboarding6;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'

    },
    logoImg: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height * 0.035,
        marginBottom: height * 0.025,

    },
    form:{
        width: '85%',
        alignSelf: 'center',
        marginTop: 15,
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
        height: height * 0.85,
        position: 'absolute',
        width: width * 0.9, 

    },
    image: {
        margin: height * 0.10,
    },
    nameInput: {
        height: 45,
        borderWidth: 2,
        marginBottom: 15,
        fontFamily: 'Poppins-Regular',
        paddingLeft: 10,
        borderRadius: 7,
      },
      nameInput2: {
        height: 45,
        borderWidth: 2,
        marginBottom: 15,
        fontFamily: 'Poppins-Regular',
        paddingLeft: 10,
        borderRadius: 7,
        flex:1,
        marginRight:10,
      },
    button: {
        width: width * 0.25,
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 25,
        backgroundColor: '#00CFDE',
        color: '#fff',
    },

    text: {
        fontSize: 18,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        color: '#00CFDE',
        fontWeight: "500",
        marginBottom: height * 0.035,
        margin:10
    },
});
