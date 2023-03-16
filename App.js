import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import Login from './screens/login';
import Startshift from './screens/startshift';
import Timer from './screens/timer';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './screens/signup';
import MapScreen from './screens/MapScreen';
import Endshift from './screens/Endshift';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useIsFocused} from '@react-navigation/native';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const Tab = createMaterialBottomTabNavigator();
import A from './assets/bck.png';
import Editprofile from './screens/editprofile';
import Home from './screens/home';
import Allshifts from './screens/allshifts';
import LinearGradient from 'react-native-linear-gradient';
// import dotenv from '.env';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
// dotenv.config();

export const AuthContext = React.createContext();
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
    <Stack.Navigator>
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

function Tab_Navigator() {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        activeBackgroundColor: '#93cca0',
        inactiveBackgroundColor: '#74ab81',
        tabBarShowLabel: false,

        // style: {

        //   backgroundColor: '#338B47',
        //   paddingBottom: 3,
        // },
      }}
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./assets/home.png')}
              style={styles.tabimg}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Start',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./assets/main.png')}
              style={styles.tabimg}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Shiftss"
        component={ShiftsStack}
        options={{
          tabBarLabel: 'Shifts',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./assets/shifts.png')}
              style={styles.tabimg}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="User"
        component={UserStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./assets/user.png')}
              style={styles.tabimg}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App({children}) {
  // dotenv.config();
  const [id, setId] = useState(false);
  const value = {
    setActiveId: setId,
    id: id,
  };
  return (
    <AuthContext.Provider value={value}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Navigator"
            component={Tab_Navigator}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
// export default function App() {
//   const Stack = createNativeStackNavigator();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}
//         initialRouteName="Edit">
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Startshift" component={Startshift} />
//         <Stack.Screen name="Timer" component={Timer} />
//         <Stack.Screen name="Signup" component={Signup} />
//         <Stack.Screen name="Map" component={MapScreen} />
//         <Stack.Screen name="End" component={Endshift} />
//         <Stack.Screen name="Edit" component={Editprofile} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  tabimg: {},
});
