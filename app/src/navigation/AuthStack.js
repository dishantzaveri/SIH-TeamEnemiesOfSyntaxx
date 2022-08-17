// import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Login from '../OnBoarding/Login';
// import SignUp from '../OnBoarding/SignUp';
// import Login1 from '../OnBoarding/Login1';
// import SignUp1 from '../OnBoarding/SignUp1';
// import {JobDetail, Jobs, JobSeekers, MentorMenteesDetail} from '../pages';
// import SwiperScreens from '../OnBoarding/SwiperScreens';

// const Stack = createNativeStackNavigator();


// function JobsTab() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Jobs"
//       screenOptions={({route}) => ({
//         tabBarIcon: () => icons[route.name],
//       })}
//       // tabBarOptions={{
//       //   activeTintColor: '#18a990',
//       //   inactiveTintColor: 'gray',
//       //   labelStyle: {
//       //     fontWeight: 'bold',
//       //     fontSize: 12,
//       //   },
//       // }}
//     >
//       <Tab.Screen name="Jobs" component={Jobs} options={{headerShown: false}} />
//       <Tab.Screen
//         name="JobSeekers"
//         component={JobSeekers}
//         options={{headerShown: false}}
//       />
//     </Tab.Navigator>
//   );
// }

// const AuthStack = () => {
//   return (
//     <Stack.Navigator
//           screenOptions={{headerShown: false}}
//           // initialRouteName="AppStack"
//           >
//           <Stack.Screen name="SwiperScreens" component={SwiperScreens} />
//           <Stack.Screen
//             name="Login"
//             component={Login}
//             options={{headerShown: false}}></Stack.Screen>
//           <Stack.Screen
//             name="SignUp"
//             component={SignUp}
//             options={{headerShown: false}}></Stack.Screen>
//           <Stack.Screen
//             name="Login1"
//             component={Login1}
//             options={{headerShown: false}}></Stack.Screen>
//           <Stack.Screen
//             name="SignUp1"
//             component={SignUp1}
//             options={{headerShown: false}}></Stack.Screen>
//           <Stack.Screen
//             name="MMDetail"
//             component={MentorMenteesDetail}
//             options={{headerShown: false}}
//           />
//           <Stack.Screen
//             name="JobTabs"
//             component={JobsTab}
//             options={{headerShown: false}}
//           />
//           <Stack.Screen
//             name="JobDetail"
//             component={JobDetail}
//             options={{headerShown: false}}
//           />
//         </Stack.Navigator>
//   );
// };

// export default AuthStack;
