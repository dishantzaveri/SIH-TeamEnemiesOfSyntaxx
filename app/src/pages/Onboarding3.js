
import React, {useState} from 'react';
import {
    View, StyleSheet, Image, TextInput,
    Button,
    ScrollView, SafeAreaView
} from 'react-native';
import {
    Text,

    Subheading,
    RadioButton,
} from 'react-native-paper';;
import logo from '../assets/logo.jpg';
import Circle2 from '../assets/circle2.png';
import { height, width } from '../Consts';
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';


const Onboarding3 = ({ navigation }) => {

    const { colors } = useTheme();
    const [name, setName] = useState('');
    const [fresher, setFresher] = useState('');
    const [experience, setExperience] = useState('');


    return (
        <SafeAreaView style={styles.container} >
           
              <LinearGradient
          colors={[colors.primary, '#ADD8E6']}
          style={{width: '100%', height: 200, position: 'relative'}}></LinearGradient>
           
                {/* <View style={styles.logoImg}>
                    <Image
                        source={logo}
                    />
                </View> */}
                <View style={styles.card}>
                    <Image
                        source={Circle2}

                    />
                    <View>
                        <Text style={styles.text}>Please Tell us About your professional life..</Text>
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
                    <View style={styles.form}>
                        <Subheading  >Select your skill level</Subheading>
                        <View style={{    alignContent: 'center',
       flexDirection: 'row' ,flex:2, justifyContent: 'space-between'  }}>
                        <TextInput 
                            value={fresher}
                            onChangeText={setFresher}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={colors.black}
                            style={{
                                ...styles.nameInput2,
                                borderColor: colors.textAfter,
                                color: colors.text,
                                backgroundColor: '#E8EEF7',
                            }}
                            placeholder={'Fresher'}
                        />
                        <TextInput
                            value={experience}
                            onChangeText={setExperience}
                            underlineColorAndroid="transparent"
                            placeholderTextColor={colors.black}
                            style={{
                                ...styles.nameInput2,
                                borderColor: colors.textAfter,
                                color: colors.text,
                                backgroundColor: '#E8EEF7',
                            }}
                            placeholder={'Experience'}
                        />
                        </View>
                        <View style={styles.button}>
                            <Button title="Next"  >
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
    image: {
        margin: height * 0.10,
    },
    nameInput: {
        height: 45,
        borderWidth: 2,
        marginBottom: 15,
        fontFamily: 'Poppins-Regular',
        paddingLeft: 10,
   
    },
    nameInput2: {
        height: 45,
        borderWidth: 2,
        marginBottom: 15,
        fontFamily: 'Poppins-Regular',
        paddingLeft: 10,
        marginRight:10,
        flex: 2,
     
    
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
        // alignSelf: 'center',
        color: '#00CFDE',
        fontWeight: "500",
        marginBottom: height * 0.035,
    },
});
