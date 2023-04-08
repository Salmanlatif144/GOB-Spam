import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Startshift from './startshift';
import MapScreen from './MapScreen';
import Endshift from './Endshift';
import Editprofile from './editprofile';
import Home from './home';
import Allshifts from './allshifts';
import Timer from './timer';
import Setting from './setting';
import {useTheme} from 'react-native-paper';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {responsiveHeight} from 'react-native-responsive-dimensions';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Startshift"
        component={Startshift}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Edit Profile"
        component={Editprofile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Timer"
        component={Timer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="End"
        component={Endshift}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="homescrees"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function UserStack() {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        name="Settings"
        component={Setting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Edit"
        component={Editprofile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function ShiftsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="shifts"
        component={Allshifts}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default function Bottomtab() {
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transparent';

  return (
    <Tab.Navigator
      initialRouteName="MainDash"
      labeled={false}
      barStyle={{
        backgroundColor: '#fff',
        position: 'absolute',
        overflow: 'hidden',
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        height: responsiveHeight(7),
        // alignItems: 'center',
        paddingHorizontal: 25,
        justifyContent: 'center',
      }}>
      <Tab.Screen
        name="Donations"
        component={HomeStack}
        options={{
          // tabBarColor: 'blue',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 40,

                alignItems: 'center',
                borderBottomColor: 'green',
                borderBottomWidth: focused ? 4 : 0,

                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/home.png')}
                style={{
                  tintColor: focused ? 'green' : '#333232',
                  // marginRight: 5,
                  marginBottom: 5,
                }}
                accessibilityIgnoresInvertColors={true}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MainDash"
        component={ProfileStack}
        tabBarColor="red"
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 40,

                alignItems: 'center',
                borderBottomColor: 'green',
                borderBottomWidth: focused ? 4 : 0,

                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/main.png')}
                style={{
                  tintColor: focused ? 'green' : '#333232',
                  // marginRight: 5,
                  marginBottom: 5,
                }}
                accessibilityIgnoresInvertColors={true}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Appointment"
        component={ShiftsStack}
        options={{
          // tabBarColor: 'blue',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 40,

                alignItems: 'center',
                borderBottomColor: 'green',
                borderBottomWidth: focused ? 4 : 0,

                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/shifts.png')}
                style={{
                  tintColor: focused ? 'green' : '#333232',
                  // marginRight: 5,
                  marginBottom: 5,
                }}
                accessibilityIgnoresInvertColors={true}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Users"
        component={UserStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 40,

                alignItems: 'center',
                borderBottomColor: 'green',
                borderBottomWidth: focused ? 4 : 0,

                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/user.png')}
                style={{
                  tintColor: focused ? 'green' : '#333232',
                  // marginRight: 5,
                  marginBottom: 5,
                }}
                accessibilityIgnoresInvertColors={true}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
