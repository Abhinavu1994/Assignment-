import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Screens/Home'; // Import your screens
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import List from './Screens/List';
import Notification from './Screens/Notification';
import Profile from './Screens/Profile';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarBadge: 1,
          tabBarLabel: 'Home',
          //   tabBarIcon: ({size, color}) => (
          //     <Icon name="ios-heart" size={30} color="red" />
          //   ),
        }}
      />
      <Tab.Screen
        name="List"
        component={List}
        options={{
          tabBarLabel: 'List',
          //   tabBarIcon: ({size, color}) => (
          //     <Icon name="ios-heart" size={30} color="red" />
          //   ),
        }}
      />
    </Tab.Navigator>
  );
}

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{title: 'Home'}}
        />
        <Stack.Screen name="List" component={List} options={{title: 'List'}} />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{title: 'Notification'}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{title: 'Profile'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
