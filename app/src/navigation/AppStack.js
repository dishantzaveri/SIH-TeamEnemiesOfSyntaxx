import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VideoCall from '../components/App/VideoCall';
import Account from '../components/Profile/Account';
import ChatBot from '../components/ChatBot';
import {ActiveMentorships, Mentees, Mentors, WelcomePage} from '../pages';
import Onboarding1 from '../pages/Onboarding1';
import Onboarding2 from '../pages/Onboarding2';
import Onboarding3 from '../pages/Onboarding3';
import Onboarding4 from '../pages/Onboarding4';
import Onboarding5 from '../pages/Onboarding5';
import Careertv from '../pages/Careertv';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import theme from '../theme';
import SearchJobs from '../pages/SearchJobs';
import Blogs from '../pages/Blogs';
import OpenBlogScreen from '../pages/OpenBlogScreen';
import HomeScreen from '../pages/HomeScreen';
import EventScreen from '../pages/EventScreen';
import ChatScreen from '../pages/ChatScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Resume2 from '../pages/Resume2';
import Resume1 from '../pages/Resume1';
import Resume3 from '../pages/Resume3';
import Resume5 from '../pages/Resume5';
import Resume6 from '../pages/Resume6';
import Resume4 from '../pages/Resume4';
import ReferralClub from '../pages/ReferralClub';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import UploadPost from '../components/Posts/UploadPost';
import AllPostMain from '../components/Posts/AllPostMain';

import {JobDetail, Jobs, JobSeekers, MentorMenteesDetail} from '../pages';
import SwiperScreens from '../OnBoarding/SwiperScreens';
import {NavigationContainer} from '@react-navigation/native';
import RazorpayScreens from '../pages/RazorpayScreens';
import Profile1 from '../components/Profile/Profile1';
import Profile2 from '../components/Profile/Profile2';
import Location from '../pages/Maps';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createNativeStackNavigator();
const OnboardingStack = createNativeStackNavigator();
const BlogStack = createNativeStackNavigator();
const ResumeStack = createNativeStackNavigator();
const HomeScreensStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const AllTabsStack = createNativeStackNavigator();
const MentorStack = createNativeStackNavigator();

function JobsTab() {
  return (
    <Tab.Navigator
      initialRouteName="Jobs"
      screenOptions={({route}) => ({
        tabBarIcon: () => icons[route.name],
      })}

    >
      <Tab.Screen name="Jobs" component={Jobs} options={{headerShown: false}} />
      <Tab.Screen
        name="JobSeekers"
        component={JobSeekers}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const MentorsScreens = () => {
  return (
    <MentorStack.Navigator screenOptions={{headerShown: false}}>
      <MentorStack.Screen
        name="Mentors"
        component={Mentors}
        screenOptions={{headerShown: false}}
      />
      <MentorStack.Screen
        name="MentorMenteesDetail"
        component={MentorMenteesDetail}
        screenOptions={{headerShown: false}}
      />
    </MentorStack.Navigator>
  );
};

const HomeScreens = () => {
  return (
    <HomeScreensStack.Navigator screenOptions={{headerShown: false}}>
      <HomeScreensStack.Screen
        name="HomeMain"
        component={WelcomePage}
        screenOptions={{headerShown: false}}
      />
      <HomeScreensStack.Screen
        name="ActiveMentorships"
        component={ActiveMentorships}
        screenOptions={{headerShown: false}}
      />
    </HomeScreensStack.Navigator>
  );
};

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return <Entypo name="home" size={27} color={color} />;
          }
          if (route.name === 'AllMentors') {
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
          if (route.name === 'Upload') {
            return <AntDesign name="plussquareo" size={27} color={color} />;
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
        component={HomeScreens}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Posts"
        component={AllPostMain}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen name="Upload" component={UploadPost}  options={{
          headerShown: false,
        }}/>

      <Tab.Screen
        name="AllMentors"
        component={MentorsScreens}
        options={{
          headerShown: false,
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
      <HomeStack.Screen
        name="HomeMain"
        component={HomeScreen}
        screenOptions={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Event"
        component={EventScreen}
        screenOptions={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Chat"
        component={ChatScreen}
        screenOptions={{headerShown: false}}
      />
      <HomeStack.Screen
        name="RazorpayScreens"
        component={RazorpayScreens}
        screenOptions={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};
const Onboarding = () => {
  return (
    <OnboardingStack.Navigator screenOptions={{headerShown: false}}>
      <OnboardingStack.Screen
        name="Onboarding1"
        component={Onboarding1}
        screenOptions={{headerShown: false}}
      />
      <OnboardingStack.Screen
        name="Onboarding2"
        component={Onboarding2}
        screenOptions={{headerShown: false}}
      />
      <OnboardingStack.Screen
        name="Onboarding3"
        component={Onboarding3}
        screenOptions={{headerShown: false}}
      />
      <OnboardingStack.Screen
        name="Onboarding4"
        component={Onboarding4}
        screenOptions={{headerShown: false}}
      />
      <OnboardingStack.Screen
        name="Onboarding5"
        component={Onboarding5}
        screenOptions={{headerShown: false}}
      />
      <OnboardingStack.Screen
        name="Profile1"
        component={Profile1}
        screenOptions={{headerShown: false}}
      />
      <OnboardingStack.Screen
        name="Profile2"
        component={Profile2}
        screenOptions={{headerShown: false}}
      />
    </OnboardingStack.Navigator>
  );
};

const ResumeStackScreen = () => {
  return (
    <ResumeStack.Navigator screenOptions={{headerShown: false}}>
      <ResumeStack.Screen
        name="Resume1"
        component={Resume1}
        screenOptions={{headerShown: false}}
      />
      <ResumeStack.Screen
        name="Resume2"
        component={Resume2}
        screenOptions={{headerShown: false}}
      />
      <ResumeStack.Screen
        name="Resume3"
        component={Resume3}
        screenOptions={{headerShown: false}}
      />
      <ResumeStack.Screen
        name="Resume4"
        component={Resume4}
        screenOptions={{headerShown: false}}
      />
      <ResumeStack.Screen
        name="Resume5"
        component={Resume5}
        screenOptions={{headerShown: false}}
      />
      <ResumeStack.Screen
        name="Resume6"
        component={Resume6}
        screenOptions={{headerShown: false}}
      />
    </ResumeStack.Navigator>
  );
};

const Blog = () => {
  return (
    <BlogStack.Navigator screenOptions={{headerShown: false}}>
      <BlogStack.Screen
        name="Blogs"
        component={Blogs}
        screenOptions={{headerShown: false}}
      />
      <BlogStack.Screen
        name="OpenBlogScreen"
        component={OpenBlogScreen}
        screenOptions={{headerShown: false}}
      />
    </BlogStack.Navigator>
  );
};

const AllTabs = () => {
  return (
    <AllTabsStack.Navigator screenOptions={{headerShown: false}}>
      <AllTabsStack.Screen
        name="Tabs"
        component={Tabs}
        screenOptions={{headerShown: false}}
      />
    </AllTabsStack.Navigator>
  );
};

const AppStack = () => {
  return (
    <NavigationContainer independent={true}>
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
          name="Dashboard"
          component={AllTabs}
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
              <Ionicons
                name="chatbox-ellipses-outline"
                size={22}
                color={color}
              />
            ),
          }}
        />
         <Drawer.Screen
          name="Maps"
          component={Location}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons
                name="location"
                size={22}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            drawerIcon: ({color}) => (
              <Entypo name="paper-plane" size={22} color={color} />
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
          component={ResumeStackScreen}
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
          name="Blog"
          component={Blog}
          options={{
            headerShown: false,
            drawerIcon: ({color}) => (
              <MaterialCommunityIcons
                name="typewriter"
                size={22}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Events"
          component={HomeStackScreen}
          options={{
            headerShown: false,
            drawerIcon: ({color}) => (
              <MaterialIcons name="emoji-events" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="ReferralClub"
          component={ReferralClub}
          options={{
            headerShown: false,
            drawerIcon: ({color}) => (
              <EvilIcons name="pointer" size={22} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
