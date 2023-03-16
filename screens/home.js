import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {gradients} from './constants';
import {globalstyles} from './constants';
import {AuthContext} from '../App';

export default function Home(props) {
  const [imageUri, setImageUri] = useState(null);
  const [date, setdate] = useState('12-4-8');
  const [startTime, setStartTime] = useState('12:00 pm');
  const [endTime, setendTime] = useState('6:00 pm');
  const [total, settotal] = useState('6:00:0');
  const [shifts, setshifts] = useState(2);
  const [card1, setCard1] = useState(false);
  const [card2, setCard2] = useState(false);
  const [user, setUser] = useState(false);
  const {id, setActiveId} = useContext(AuthContext);
  const Name = 'Muhammad Salman Latif';
  const Designation = 'Site worker';
  const Path = require('../assets/dpp.jpg');

  // api to get all shifts
  const allShift = async () => {
    console.log(
      '..........................in all Shift----------------------',
      // props.route.params.shiftId,
    );
    let res = await axios
      .get(`${process.env.API_URL}/shifts/getShiftsOfOneUser/${id}`)
      .then(res => {
        let length = res.data.data.length;

        setCard1(res.data.data[length - 1]);
        setCard2(res.data.data[length - 2]);
        console.log('data of card1..........', card1);
      })
      .catch(error => {
        // setErrorMsg(error.response.data);
        console.log('error occured');
        console.log('error', error.response.data);
      });
  };

  // api to get all shifts
  const loginUser = async () => {
    console.log(
      '..........................in login user----------------------',
      // props.route.params.shiftId,
    );
    let res = await axios
      .get(`${process.env.API_URL}/user/getOneUser/${id}`)
      .then(res => {
        setUser(res.data.data[0]);
        console.log('userr', user);
      })
      .catch(error => {
        // setErrorMsg(error.response.data);
        console.log('error occured');
        console.log('error', error.response.data);
      });
  };

  useEffect(() => {
    allShift();
    loginUser();
  }, []);

  return (
    <LinearGradient colors={gradients} style={{height: '100%'}}>
      <View style={globalstyles.upercontainer}>
        <Image
          source={require('../assets/rect.png')}
          style={globalstyles.upbckimg}
        />
        <View style={styles.namecont}>
          <View style={globalstyles.imageContainer2}>
            <Image source={user.image} style={globalstyles.profileimage} />
          </View>
          <View>
            <Text style={styles.name}>
              {user.firstName + ' ' + user.lastName}
            </Text>
            <Text style={styles.desig}>{user.userType}</Text>
          </View>
        </View>
      </View>
      <View style={styles.notification}>
        <Text style={styles.boldtext}> MileStone Alert: </Text>
        <Text style={styles.normaltext}> You completed {shifts} Cycles </Text>
      </View>
      <Text style={styles.heading}>Recent Shifts</Text>
      <ScrollView horizontal={true}>
        {card1 === false ? (
          <View></View>
        ) : (
          <View>
            <View style={styles.shiftcard}>
              <View style={globalstyles.textcontainer}>
                <Text style={globalstyles.boldtext}> Date: </Text>
                <Text style={globalstyles.normaltext}>
                  {' '}
                  {card1.checkinTime.slice(0, 10)}{' '}
                </Text>
              </View>
              <View style={globalstyles.textcontainer}>
                <Text style={globalstyles.boldtext}> Start Time: </Text>
                <Text style={globalstyles.normaltext}>
                  {' '}
                  {card1.checkinTime.slice(11, 19)}{' '}
                </Text>
              </View>
              <View style={globalstyles.textcontainer}>
                <Text style={globalstyles.boldtext}> End Time: </Text>
                <Text style={globalstyles.normaltext}>
                  {' '}
                  {card1.checkoutTime.slice(11, 19)}{' '}
                </Text>
              </View>
              <View style={globalstyles.textcontainer}>
                <Text style={globalstyles.boldtext}> Total Time: </Text>
                <Text style={globalstyles.normaltext}>
                  {' '}
                  {card1.totalHours}{' '}
                </Text>
              </View>
            </View>
          </View>
        )}
        {card2 === false ? (
          <View></View>
        ) : (
          <View>
            <View style={styles.shiftcard}>
              <View style={globalstyles.textcontainer}>
                <Text style={globalstyles.boldtext}> Date: </Text>
                <Text style={globalstyles.normaltext}>
                  {' '}
                  {card2.checkinTime.slice(0, 10)}{' '}
                </Text>
              </View>
              <View style={globalstyles.textcontainer}>
                <Text style={globalstyles.boldtext}> Start Time: </Text>
                <Text style={globalstyles.normaltext}>
                  {' '}
                  {card2.checkinTime.slice(11, 19)}{' '}
                </Text>
              </View>
              <View style={globalstyles.textcontainer}>
                <Text style={globalstyles.boldtext}> End Time: </Text>
                <Text style={globalstyles.normaltext}>
                  {' '}
                  {card2.checkoutTime.slice(11, 19)}{' '}
                </Text>
              </View>
              <View style={globalstyles.textcontainer}>
                <Text style={globalstyles.boldtext}> Total Time: </Text>
                <Text style={globalstyles.normaltext}>
                  {' '}
                  {card2.totalHours}{' '}
                </Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  namecont: {
    flexDirection: 'row',
    // backgroundColor: 'green',
    width: '100%',
    justifyContent: 'space-around',
    height: responsiveHeight(18),
    marginLeft: responsiveFontSize(-2),
  },
  name: {
    color: 'black',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    // padding: responsiveFontSize(3),
  },
  desig: {
    color: 'black',
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
  },
  notification: {
    backgroundColor: '#d2fcdc',
    width: '87%',
    height: responsiveHeight(8),
    alignSelf: 'center',
    borderRadius: 20,
    // flexDirection: 'row',
    padding: responsiveFontSize(2),
    justifyContent: 'center',
    // alignItems: 'center',s
  },
  boldtext: {
    fontSize: responsiveFontSize(2.5),
    // fontWeight: 'bold',
    color: 'black',
  },
  normaltext: {
    fontSize: responsiveFontSize(2.5),
    color: 'black',
    fontWeight: 'bold',
  },
  shiftcard: {
    backgroundColor: '#fff',
    width: responsiveWidth(70),
    // backgroundColor: 'green',
    borderRadius: 10,
    marginTop: responsiveFontSize(4),
    marginLeft: responsiveFontSize(4),
    height: responsiveHeight(19),
  },
  heading: {
    // alignSelf: 'center',
    color: 'black',
    // marginTop: responsiveFontSize(1),
    padding: responsiveFontSize(4),
    paddingBottom: responsiveFontSize(0),
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: '#338B47',
  },
});
