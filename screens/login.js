import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {React, useState, useContext, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {gradients} from './constants';
import {globalstyles} from './constants';
import {AuthContext} from '../App';

export default function Login(props) {
  // useEffect(() => {
  //   props.navigation.getParent()?.setOptions({
  //     tabBarStyle: {
  //       display: 'none',
  //     },
  //   });
  //   return () =>
  //     props.navigation.getParent()?.setOptions({
  //       tabBarStyle: undefined,
  //     });
  // }, [props.navigation]);
  const {id, setActiveId} = useContext(AuthContext);
  const [email, setemail] = useState('salmanwains463@gmail.com');
  const [password, setpassword] = useState('12345678');
  const [errorMsg, setErrorMsg] = useState('');

  url = process.env.API_URL;
  console.log(url);
  // calling login
  const login = async () => {
    console.log('in login');

    // let res = await axios.post(`${apiUrl}/user/login`, {email:email,password:password})
    let res = await axios
      .post(`${process.env.API_URL}/user/login`, {
        email: email,
        password: password,
      })
      .then(res => {
        setActiveId(res.data._id);
        console.log('id', id);
        // props.navigation.navigate('Navigator');
        props.navigation.replace('Navigator');
        // console.log(id)
        setErrorMsg('');
      })
      .catch(error => {
        setErrorMsg(error.response.data);
        console.log('error occured');
        console.log('error', error.response.data);
      });
  };

  const handleSubmit = () => {
    if (email === '' || password === '') {
      setErrorMsg('Please fill out all fields.');
    } else {
      login();
    }
  };

  return (
    <LinearGradient colors={gradients} style={{height: '100%'}}>
      <View style={{display: 'flex', alignItems: 'center', flex: 1}}>
        <View style={globalstyles.logocontainer}>
          <Image
            source={require('../assets/logo.png')}
            style={{height: responsiveHeight(20), resizeMode: 'contain'}}
          />
          <Text style={styles.text}>Sign in</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email"
            placeholderTextColor="black"
            onChangeText={setemail}
            value={email}
            inputMode="email"
            require={true}
          />
          <TextInput
            placeholder="Enter Your Password"
            style={styles.input}
            placeholderTextColor="black"
            onChangeText={setpassword}
            value={password}
            secureTextEntry={true}
            require={true}
          />
          {errorMsg !== '' && <Text style={{color: 'red'}}>{errorMsg}</Text>}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttontext}>Log in</Text>
          </TouchableOpacity>

          <View style={globalstyles.linecontainer}>
            <View style={globalstyles.line} />
            <Text style={{color: 'black', marginHorizontal: 5}}>
              Or Don't Have an Account
            </Text>
            <View style={globalstyles.line} />
          </View>

          <TouchableOpacity
            style={globalstyles.button}
            onPress={() => props.navigation.navigate('Signup')}>
            <Text style={styles.buttontext}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  input: {
    height: responsiveHeight(4.2),
    width: responsiveWidth(80),
    borderRadius: 10,
    // backgroundColor: '#f5fcf7',
    color: 'black',
    marginTop: responsiveHeight(2),
    borderWidth: 2,

    borderColor: 'lightgrey',
  },
  text: {
    color: 'black',
    fontSize: responsiveFontSize(4),
    fontWeight: 'bold',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(4.2),
    width: responsiveWidth(80),
    backgroundColor: '#338B47',
    borderRadius: 10,
    marginTop: responsiveHeight(4),
  },
  buttontext: {
    fontSize: responsiveFontSize(2.5),
    color: 'white',
    fontWeight: 'bold',
  },
});
