import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    ToastAndroid,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import {
    Text,
    Card,
    Title,
    Subheading,
    Button,
} from 'react-native-paper';
import { width } from '../Consts'
import Profile from '../assets/blueprofile.png';
import { useNavigation } from '@react-navigation/native';

const Resume2 = ({}) => {
    const { colors } = useTheme();
    const [objective, setObjective] = useState('');
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [title, setTitle] = useState('');
    const [countrycode, setCountryCode] = useState('');
    const [mobileno, setMobileno] = useState('');
    const [image, setImage] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const navigation = useNavigation();



    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <ScrollView>
                <KeyboardAvoidingView>
                    <Card style={styles.card}>

                        <Text
                            style={{
                                color: colors.black,
                                textAlign: 'center',
                                margin: 10,
                                fontWeight: '400',
                                fontSize: 20,
                            }}>
                            Personal Details
                        </Text>
                        <TouchableOpacity >
                            <Image
                                source={
                                  Profile 
                                }
                                style={styles.profile}
                            />
                        </TouchableOpacity>


                        <Subheading>Enter Your Name*</Subheading>
                        <TextInput
                            value={title}
                            onChangeText={setTitle}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={colors.textAfter}
                            style={{
                                ...styles.nameInput,
                                borderColor: colors.lightblack,
                                color: colors.text,
                                //backgroundColor: colors.background,
                            }}
                            placeholder={'Title'}
                        />
                        <TextInput
                            value={name1}
                            onChangeText={setName1}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={colors.textAfter}
                            style={{
                                ...styles.nameInput,
                                borderColor: colors.lightblack,
                                color: colors.text,
                                //backgroundColor: colors.background,
                            }}
                            placeholder={'First Name'}
                        />

                        <TextInput
                            value={name2}
                            onChangeText={setName2}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={colors.textAfter}
                            style={{
                                ...styles.nameInput,
                                borderColor: colors.lightblack,
                                color: colors.text,
                                //backgroundColor: colors.background,
                            }}
                            placeholder={'Last Name'}
                        />

                        <Subheading>Enter Your Objective</Subheading>


                        <TextInput
                            value={objective}
                            onChangeText={setObjective}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={colors.textAfter}
                            multiline
                            style={{
                                ...styles.nameInput,
                                borderColor: colors.lightblack,
                                color: colors.text,
                                //backgroundColor: colors.background,
                            }}
                            placeholder={'Objective (Max 300 words)'}
                        />
                        <Subheading>Choose Your Gender</Subheading>
                        <TextInput
                            value={gender}
                            onChangeText={setGender}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={colors.textAfter}
                            style={{
                                ...styles.nameInput,
                                borderColor: colors.lightblack,
                                color: colors.text,
                                //backgroundColor: colors.background,
                            }}
                            placeholder={'Gender'}
                        />
                        <Subheading>Enter Your Mobile Number</Subheading>
                        <TextInput
                            value={countrycode}
                            onChangeText={setCountryCode}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={colors.textAfter}
                            style={{
                                ...styles.nameInput,
                                borderColor: colors.lightblack,
                                color: colors.text,
                                //backgroundColor: colors.background,
                            }}
                            placeholder={'Country Code'}
                        />
                        <TextInput
                            value={mobileno}
                            onChangeText={setMobileno}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={colors.textAfter}
                            style={{
                                ...styles.nameInput,
                                borderColor: colors.lightblack,
                                color: colors.text,
                                //backgroundColor: colors.background,
                            }}
                            placeholder={'Phone Number'}
                        />
                        <Subheading>Enter Your DOB</Subheading>
                        <TextInput
                            value={dob}
                            onChangeText={setDob}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={colors.textAfter}
                            style={{
                                ...styles.nameInput,
                                borderColor: colors.lightblack,
                                color: colors.text,
                                //backgroundColor: colors.background,
                            }}
                            placeholder={'DOB'}
                        />
                        <Subheading>Enter Your Email Address</Subheading>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={colors.textAfter}
                            style={{
                                ...styles.nameInput,
                                borderColor: colors.lightblack,
                                color: colors.text,
                                //backgroundColor: colors.background,
                            }}
                            placeholder={'Email Address'}
                        />
                        <Subheading>Current City</Subheading>
                        <TextInput
                            value={city}
                            onChangeText={setCity}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={colors.textAfter}
                            style={{
                                ...styles.nameInput,
                                borderColor: colors.lightblack,
                                color: colors.text,
                                //backgroundColor: colors.background,
                            }}
                            placeholder={'Current City'}
                        />
                        <View style={styles.button}>
                            <Button style={styles.button1} labelStyle={styles.label1}>Cancel
                            </Button>
                            <Button style={styles.button2} labelStyle={styles.label2}  onPress={() =>
                        navigation.navigate('Resume3')
                    } >Save & Next
                            </Button>
                        </View>
                    </Card>
                </KeyboardAvoidingView>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 20,
        width: '85%',
        alignSelf: 'center',
        marginVertical: 20,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.1,
        shadowRadius: 1,
    },
    button: {

        justifyContent: 'space-between',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    button1: {
        width: width * 0.25,
        alignSelf: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        margin: 10,
        alignContent: 'center',
        borderColor: '#EBE9E9',
        borderWidth: 1,
        borderRadius: 10,


    },
    button2: {
        width: width * 0.35,
        alignSelf: 'center',
        backgroundColor: '#00CFDE',
        flexDirection: 'row',
        margin: 10,
        alignContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
    },
    label1: {
        color: '#00CFDE',
        fontWeight: '100',
        fontSize: 12,


    },
    label2: {

        color: 'white',
        fontWeight: '100',
        fontSize: 12,
    },
    profile: {
        height: width / 5,
        width: width / 5,
        margin: 5,
        borderRadius: width,
        alignSelf: 'center',


    },
    nameInput: {
        height: 45,
        borderWidth: 1,
        marginBottom: 15,
        fontFamily: 'Poppins-Regular',
        fontSize: 17,
        paddingLeft: 10,
        borderRadius: 8,
    },
    nameInput2: {
        flex: 1,
        height: 45,
        borderWidth: 2,
        marginBottom: 15,
        fontFamily: 'Poppins-Regular',
        paddingLeft: 10,
        marginRight: 15,
    },
    nameInput3: {
        flex: 4,
        height: 45,
        borderWidth: 2,
        marginBottom: 15,
        fontFamily: 'Poppins-Regular',
        paddingLeft: 10,
        marginHorizontal: 15,
    },
    iconMain: {
        fontSize: 22,
        marginTop: 2,
    },
    linearGradient: {
        width: 70,
        paddingVertical: 3,
        marginHorizontal: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-end',
    },
});

export default Resume2;
