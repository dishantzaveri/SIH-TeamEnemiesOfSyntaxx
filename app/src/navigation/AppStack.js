import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VideoCall from '../components/App/VideoCall';
import Account from '../components/Profile/Account';
import ChatBot from '../components/ChatBot';
import { Mentees, Mentors, WelcomePage} from '../pages';
import Onboarding1 from '../pages/Onboarding1';
import Onboarding2 from '../pages/Onboarding2';
import Onboarding3 from '../pages/Onboarding3';
import Onboarding4 from '../pages/Onboarding4';
import Onboarding5 from '../pages/Onboarding5';
import Onboarding6 from '../pages/Onboarding6';
import Careertv from '../pages/Careertv';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import theme from '../theme';
import Posts from '../components/Posts/Posts';
import Resume from '../pages/Resume';
import SearchJobs from '../pages/SearchJobs';
import Blogs from '../pages/Blogs';
import OpenBlogScreen from '../pages/OpenBlogScreen';
import HomeScreen from '../pages/HomeScreen';
import EventScreen from '../pages/EventScreen';
import ChatScreen from '../pages/ChatScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return <Entypo name="home" size={27} color={color} />;
          }
          if (route.name === 'Mentors') {
            return <FontAwesome5 name="people-carry" size={27} color={color} />;
          }
          if (route.name === 'Mentees') {
            return (
              <FontAwesome5 name="people-arrows" size={27} color={color} />
            );
          }
          if (route.name === 'Posts') {
            return (
              <MaterialIcons name="dynamic-feed" size={27} color={color} />
            );
          }
        },
        tabBarStyle: {
          backgroundColor: 'white',
        },
        tabBarActiveTintColor: '#4186F5',
        tabBarInactiveTintColor: theme.colors.greyDark,
      })}>
      <Tab.Screen
        name="Home"
        component={WelcomePage}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Posts"
        component={Posts}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Mentors"
        component={Mentors}
        options={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name="Mentees"
        component={Mentees}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} screenOptions={{headerShown: false}} />
      <HomeStack.Screen name="Event" component={EventScreen}  screenOptions={{headerShown: false}} />
      <HomeStack.Screen name="Chat" component={ChatScreen}  screenOptions={{headerShown: false}} />
    </HomeStack.Navigator>
  );
};

const AppStack = () => {

  
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Home Screen"
        component={Tabs}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Account}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="VideoCall"
        component={VideoCall}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="md-videocam" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Help"
        component={ChatBot}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Onboarding1"
        component={Onboarding1}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Onboarding2"
        component={Onboarding2}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Onboarding3"
        component={Onboarding3}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Onboarding4"
        component={Onboarding4}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Onboarding5"
        component={Onboarding5}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Onboarding6"
        component={Onboarding6}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Careertv"
        component={Careertv}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Ionicons name="play-circle-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Resume Builder"
        component={Resume}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Ionicons name="document" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Search Jobs"
        component={SearchJobs}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Ionicons name="search" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Blogs"
        component={Blogs}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Ionicons name="school" size={22} color={color} />
          ),
        }}
      />
       <Drawer.Screen
        name="OpenBlogScreen"
        component={OpenBlogScreen}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Ionicons name="school" size={22} color={color} />
          ),
        }}
      />
        <Drawer.Screen
        name="Events"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Ionicons name="school" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
    
  );
};

export default AppStack;
