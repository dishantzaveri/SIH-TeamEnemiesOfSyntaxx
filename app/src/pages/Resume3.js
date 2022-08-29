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
import { height, width } from '../Consts';
import Add from '../assets/add.png';
import { useNavigation } from '@react-navigation/native';

const Resume3 = ({}) => {
    const { colors } = useTheme();
    const [startdate, setStartDate] = useState('');
    const [enddate, setEndDate] = useState('');
    const [degree, setDegree] = useState('');
    const [institute, setInstitute] = useState('');
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
                            Education Details
                        </Text>

                        <Subheading>Degree Name*</Subheading>
                        <TextInput
                            value={degree}
                            onChangeText={setDegree}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={colors.textAfter}
                            style={{
                                ...styles.nameInput,
                                borderColor: colors.lightblack,
                                color: colors.text,
                                //backgroundColor: colors.background,
                            }}
                            placeholder={'Degree Name'}
                        />

                        <Subheading>Institute Name</Subheading>


                        <TextInput
                            value={institute}
                            onChangeText={setInstitute}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={colors.textAfter}
                            multiline
                            style={{
                                ...styles.nameInput,
                                borderColor: colors.lightblack,
                                color: colors.text,
                                //backgroundColor: colors.background,
                            }}
                            placeholder={'Institute Name'}
                        />
                        <Subheading>Start Date</Subheading>
                        <TextInput
                            value={startdate}
                            onChangeText={setStartDate}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={colors.textAfter}
                            style={{
                                ...styles.nameInput,
                                borderColor: colors.lightblack,
                                color: colors.text,
                                //backgroundColor: colors.background,
                            }}
                            placeholder={'Select Start Date'}
                        />
                        <Subheading>End Date</Subheading>
                        <TextInput
                            value={enddate}
                            onChangeText={setEndDate}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={colors.textAfter}
                            style={{
                                ...styles.nameInput,
                                borderColor: colors.lightblack,
                                color: colors.text,
                                //backgroundColor: colors.background,
                            }}
                            placeholder={'Select End Date'}
                        />
                        <View style={styles.add}>
                           
                                <Text style={styles.addmore}>Add More</Text>
                                <TouchableOpacity>
                                <Image source={
                                    Add
                                }
                                    style={styles.profile}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>
                            <Button style={styles.button1} labelStyle={styles.label1}>Cancel
                            </Button>
                            <Button style={styles.button2} labelStyle={styles.label2}  onPress={() =>
                        navigation.navigate('Resume4')
                    }>Save & Next
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
        height: '90%',
    },
    button: {

        justifyContent: 'space-between',
        alignSelf: 'center',
        flexDirection: 'row',
        margin:height * 0.1,
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
        height: 15,
        width: 15,
        margin: 5,
        alignSelf: 'center',


    },
    add: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    addmore: {
        fontSize: 15,
        color: '#999999',
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

export default Resume3;
