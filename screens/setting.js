import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {gradients} from './constants';
import {globalstyles} from './constants';

export default function Setting(props) {
  function handleWebPress() {
    Linking.openURL('http://www.goodearthbuilders.ca');
  }
  return (
    <LinearGradient colors={gradients} style={{height: '100%'}}>
      <ScrollView style={{}}>
        <View style={{display: 'flex', alignItems: 'center', flex: 1}}>
          <View style={styles.logocontainer}>
            <Image
              source={require('../assets/logo.png')}
              style={{height: responsiveHeight(20), resizeMode: 'contain'}}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={globalstyles.settingbtn}
            onPress={() => {
              props.navigation.navigate('Edit');
            }}>
            <Image
              source={require('../assets/editing.png')}
              style={globalstyles.btnicon}
            />
            <Text style={globalstyles.settingbtntext}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalstyles.settingbtn}>
            <Image
              source={require('../assets/info.png')}
              style={globalstyles.btnicon}
            />
            <Text style={globalstyles.settingbtntext}>
              About Us {''} {''}{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={globalstyles.settingbtn}
            onPress={() => {
              props.navigation.navigate('Login');
            }}>
            <Image
              source={require('../assets/logout.png')}
              style={globalstyles.btnicon}
            />
            <Text style={globalstyles.settingbtntext}>
              Logout {''} {''} {''} {''}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={globalstyles.settingbtn}
            onPress={handleWebPress}>
            <Image
              source={require('../assets/web.png')}
              style={globalstyles.btnicon}
            />
            <Text style={globalstyles.settingbtntext}>Visit Our Web</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  logocontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: responsiveHeight(8),
    // height: responsiveHeight(25),
    // width: responsiveWidth(10),
    marginBottom: responsiveHeight(8),
  },
  logincont: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
