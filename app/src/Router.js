import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppStack from './navigation/AppStack';
import AuthStack from './navigation/AuthStack';

import {
  Provider as PaperProvider,
  DefaultTheme,
  configureFonts,
  Text,
  Paragraph,
  Subheading,
} from 'react-native-paper';
import {
  WelcomePage,
  Mentors,
  Mentees,
  HowItWorks,
  ActiveMentorships,
  MentorMenteesDetail,
  Events,
  Jobs,
  JobSeekers,
  JobDetail,
} from './pages';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';

console.disableYellowBox = true;

const Router = () => {
  const fontConfig = {
    default: {
      regular: {
        fontFamily: 'Poppins-Regular',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'Poppins-Medium',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'Poppins-Light',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'Poppins-Thin',
        fontWeight: 'normal',
      },
    },
  };

  const Mytheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#4186F5',
      secondary: '#814ED2',
      accent: '#F5B400',
      disabled: '#FF7CC3',
      error: '#F14F0A',
      backgroundLight: '#F4F4F4',
      text: '#3C3C3C',
      textBefore: '#F4F4F4',
      textAfter: '#7D7D7D',
      border: '#00FFA3',
    },
    fonts: configureFonts(fontConfig),
  };
  const [userToken, setUserToken] = useState(null);
  const {user} = useSelector(state => state.user);
  useEffect(() => {
    console.disableYellowBox = true;
  }, []);
  useEffect(() => {
    console.log(user);
    if (user?.token) {
      setUserToken(user);
    } else {
      setUserToken(null);
    }
  }, [user]);

  return (
    <NavigationContainer theme={Mytheme} independent={true}>
      {userToken ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;
