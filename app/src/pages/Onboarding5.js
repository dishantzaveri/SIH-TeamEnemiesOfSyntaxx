import React, { useEffect, useState, useCallback, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Alert, SafeAreaView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import DocumentPicker, { types } from 'react-native-document-picker';
import Circle5 from '../assets/circle5.png';
import Resume from '../assets/resume.png';
import { height, width } from '../Consts';
import YoutubePlayer from "react-native-youtube-iframe";
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const Onboarding5 = ({ }) => {


    const [fileResponse, setFileResponse] = useState([]);
    const [playing, setPlaying] = useState(false);
    const { colors } = useTheme();
    const navigation = useNavigation();

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);


    const handleDocumentSelection = useCallback(async () => {
        try {
            const response = await DocumentPicker.pick({
                presentationStyle: 'fullScreen',
                type: [types.pdf],
                allowMultiSelection: true,
            });
            setFileResponse(response);
        } catch (err) {
            console.warn(err);
        }
    }, []);

    return (
        <SafeAreaView style={styles.container} >
            <LinearGradient
                colors={[colors.primary, '#ADD8E6']}
                style={{ width: '100%', height: 200, position: 'relative' }}></LinearGradient>
            <View style={styles.card}>
                <Image
                    source={Circle5}

                />
                <Text style={styles.text}>Please upload your Video Resume & Voice Resume.</Text>
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
                <Text style={{ fontSize: 13, color: '#000000' }}>Sample Video Resume</Text>
                <View style={styles.youtube}>

                    <YoutubePlayer
                        height={300}
                        videoId={"PHJbX6bakjw"}
                        onChangeState={onStateChange}
                    />
                </View>
                <Text style={{ fontSize: 13, color: '#000000' }}>Upload resume (video format)</Text>

                <Text style={{ fontSize: 11, color: '#F5AC3E' }}>Supported formats: mp4, mov</Text>
                <TouchableOpacity onPress={handleDocumentSelection}>
                    <Image
                        source={Resume}
                        style={styles.image}
                    //PHJbX6bakjw
                    />
                </TouchableOpacity>
                <View style={styles.button}>
                    <Button labelStyle={styles.text3} onPress={() => navigation.navigate('Profile1')}>
                        Next
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Onboarding5;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'

    },
    logoImg: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height * 0.015,
        marginBottom: height * 0.015,

    },
    text3: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
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
        margin: height * 0.020,
        width: width * 0.5,
        height: height * 0.20,
    },
    youtube: {
        margin: height * 0.001,
        width: width * 0.5,
        height: height * 0.20,
    },
    button: {
        width: width * 0.25,
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 5,
        backgroundColor: '#00CFDE',
        color: '#fff',
    },

    text: {
        fontSize: 16,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        color: '#00CFDE',
        fontWeight: "500",
        marginBottom: height * 0.035,
        margin: 10
    },
});
