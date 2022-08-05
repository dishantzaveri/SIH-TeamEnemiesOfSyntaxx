import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import VideoCall from '../components/App/VideoCall';
import Account from '../components/Profile/Account';
import ChatBot from '../components/ChatBot';
import { Events, HowItWorks, Mentees, Mentors, WelcomePage } from '../pages';
import {
  HomeIcon,
  MentorIcon,
  MenteeIcon,
  HIWorksIcon,
  EventIcon,
  Job,
  JobSeeker,
} from '../components/SVGR-Components';
import Demo4 from '../pages/Demo4';
import Demo5 from '../pages/Demo5';
import Demo6 from '../pages/Demo6';
import Demo7 from '../pages/Demo7';
import Onboarding1 from '../pages/Onboarding1';
import Onboarding2 from '../pages/Onboarding2';
import Onboarding3 from '../pages/Onboarding3';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const icons = {
  Home: <HomeIcon width={27} height={27} />,
  Mentors: <MentorIcon width={27} height={27} />,
  Mentees: <MenteeIcon width={27} height={27} />,
  HowItWorks: <HIWorksIcon width={27} height={27} />,
  Events: <EventIcon width={27} height={27} />,
  Jobs: <Job width={27} height={27} />,
  JobSeekers: <JobSeeker width={27} height={27} />,
};


function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: () => icons[route.name],
      })}
      // tabBarOptions={{
      //   activeTintColor: '#18a990',
      //   inactiveTintColor: 'gray',
      //   labelStyle: {
      //     fontWeight: 'bold',
      //     fontSize: 12,
      //   },
      // }}
    >
      <Tab.Screen
        name="Home"
        component={WelcomePage}
        options={{headerShown: false}}
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
      {/* <Tab.Screen
        name="HowItWorks"
        component={HowItWorks}
        options={{headerShown: false}}
      /> */}
      {/* <Tab.Screen
        name="Events"
        component={Events}
        options={{headerShown: false}}
      /> */}
    </Tab.Navigator>
  );
}


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
        name="Home"
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
     name="4"
component={Demo4}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
        <Drawer.Screen
     name="5"
component={Demo5}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
        <Drawer.Screen
     name="6"
component={Demo6}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
        <Drawer.Screen
     name="7"
component={Demo7}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      
      
    </Drawer.Navigator>
  );
};

export default AppStack;
