import React, { useEffect, useState, useCallback } from 'react';
import {
    View, StyleSheet, Image, TextInput,
    ScrollView, SafeAreaView
} from 'react-native';
import {
    Text,
    Card,
    Title,
    Subheading,
    Button,
} from 'react-native-paper';
import { height, width } from '../Consts';
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Circle3 from '../assets/circle3.png';
import { useNavigation } from '@react-navigation/native';


const Onboarding3 = ({ }) => {

    const { colors } = useTheme();
    const [name, setName] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [headline, setHeadline] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container} >
            <LinearGradient
                colors={[colors.primary, '#ADD8E6']}
                style={{ width: '100%', height: 200, position: 'relative' }}></LinearGradient>

            <View style={styles.card}>
                <Image
                    source={Circle3}
                />
                <View>
                    <Text style={styles.text}>Setup profile and find your perfect Mentor.</Text>
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
                    <Subheading>Enter your Name*</Subheading>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        underlineColorAndroid="transparent"
                        placeholderTextColor='#C4C4C4'
                        style={{
                            ...styles.nameInput,
                            borderColor: colors.textAfter,
                            color: colors.text,
                            //backgroundColor: colors.background,
                        }}
                        placeholder={'Name'}
                    />
                    <Subheading>Enter your Phone Number*</Subheading>
                    <TextInput
                        value={phonenumber}
                        onChangeText={setPhonenumber}
                        underlineColorAndroid="transparent"
                        placeholderTextColor={colors.placeholder}
                        style={{
                            ...styles.nameInput,
                            borderColor: colors.textAfter,
                            color: colors.text,
                            //backgroundColor: colors.background,
                        }}
                        placeholder={'Phone Number'}
                    />
                    <View style={styles.button}>
                        <Button labelStyle={styles.text3} onPress={() => navigation.navigate('Onboarding4')}>
                            Next
                        </Button>
                    </View>
                </View>
            </View>


        </SafeAreaView>
    );
}

export default Onboarding3;

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
    form: {
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
        height: height * 0.75,
        position: 'absolute',
        width: width * 0.9,

    },
    text3: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
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
        flex: 1,
        marginRight: 10,
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
        fontSize: 20,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 10,
        color: '#00CFDE',
        fontWeight: "500",
        marginBottom: height * 0.035,
    },
});