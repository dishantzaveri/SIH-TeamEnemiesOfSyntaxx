import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  Linking,
  Image,
} from 'react-native';
import {WebView} from 'react-native-webview';
import LinearGradient from 'react-native-linear-gradient';
import {height, width} from '../Consts';
import logo from '../assets/mentordots.png';
import {useTheme } from '@react-navigation/native';

const WelcomePage = ({navigation}) => {
  const { colors } = useTheme();
  const githubFindMentor =
    'https://github.com/dishantzaveri/SIH-TeamEnemiesOfSyntaxx';
  const joinNow =
    'https://docs.google.com/forms/d/e/1FAIpQLSc3uWpEeBUCXMoGAJ5qm31p9URBppxXT5L4RJFrTOJee9TFjQ/viewform';
  const discorUrl = 'https://discord.gg/4fNygpXsaJ';

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.iconView}>
        <Image source={logo} style={styles.image} />
        {/* <Text style={styles.headerText}>Find Mentor & Mentees</Text> */}
      </View>

      <TouchableOpacity
        onPress={() => Linking.openURL(githubFindMentor)}
        style={{
          marginVertical: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {/* <Github width={24} height={24} />
        <Text style={styles.text1Style}> Feel free to contribute! </Text> */}
      </TouchableOpacity>
      <View style={{marginHorizontal: 19}}>
      </View>
      <View style={styles.discordView}>
        <WebView
          style={styles.webView}
          source={{
            uri: discorUrl,
          }}
        />
      </View>
      <View style={styles.discordTextView}>
        <Text>Join this channel to communicate with each other.</Text>
      </View>
      <View style={{marginVertical: 5}}>
        {/* <TouchableOpacity
            onPress={() => Linking.openURL(joinNow)}
            style={styles.joinButton}>
            <JoinNowAddUser width={25} height={25} fill={'white'} />
            <Text style={styles.buttonText}>Join Now</Text>
          </TouchableOpacity> */}
        <TouchableOpacity onPress={() => Linking.openURL(joinNow)}>
          {/* <JoinNowAddUser width={40} height={40} fill={'white'} /> */}
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.linearGradient}
            colors={['#4186F5', '#00FFA3']}>
            <Text style={styles.label}>Join Now</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TopPicksScreen')}>
          {/* <JoinNowAddUser width={40} height={40} fill={'white'} /> */}
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.linearGradient}
            colors={['#4186F5', '#00FFA3']}>
            <Text style={styles.label}>Top Picks</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
  },
  label: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  text1View: {
    marginTop: 150,
  },
  text1Style: {
    fontSize: 25,
    color: '#007bff',
    fontWeight: 'bold',
  },
  iconView: {
    alignItems: 'center',
    marginVertical: 10,
  },
  iconStyle: {
    width: Dimensions.get('window').width / 9,
    height: Dimensions.get('window').height / 22,
  },
  headerText: {
    color: 'grey',
    fontSize: 17,
    fontWeight: '600',
  },
  discordView: {
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 2.8,
    alignContent: 'center',
    alignSelf: 'center',
    marginVertical: 22,
  },
  webView: {
    borderRadius: 10,
  },
  discordTextView: {
    marginHorizontal: 5,
    marginBottom: 15,
  },
  linearGradient: {
    height: height * 0.07,
    width: width * 0.3,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 10,
    margin:10
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  jobsText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 23,
  },
});

export {WelcomePage};
