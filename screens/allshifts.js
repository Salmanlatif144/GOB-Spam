import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {gradients} from './constants';
import {AuthContext} from '../App';
import {globalstyles} from './constants';

export default function Allshifts(props) {
  const {id, setActiveId} = useContext(AuthContext);
  const [date, setdate] = useState('12-4-8');
  const [startTime, setStartTime] = useState('12:00 pm');
  const [endTime, setendTime] = useState('6:00 pm');
  const [total, settotal] = useState('6:00:0');
  const [data, setData] = useState();

  // api to get all shifts
  const allShift = async () => {
    console.log(
      '..........................in all Shift----------------------',
      // props.route.params.shiftId,
    );
    let res = await axios
      .get(`${process.env.API_URL}/shifts/getShiftsOfOneUser/${id}`)
      .then(res => {
        setData(res.data.data);
        console.log('data of all shiftss..........', data);
      })
      .catch(error => {
        // setErrorMsg(error.response.data);
        console.log('error occured');
        console.log('error', error.response.data);
      });
  };

  useEffect(() => {
    allShift();
  }, []);

  return (
    // <LinearGradient colors={gradients} style={{height: '100%'}}>
    <ScrollView style={styles.maincontainer}>
      <Text style={styles.heading}>All Completed Shifts</Text>
      <View style={styles.maindiv}>
        {data === false ? (
          <View></View>
        ) : (
          <View>
            {data?.map((val, ind) => {
              return (
                <View style={globalstyles.shiftcard}>
                  <View style={globalstyles.textcontainer}>
                    <Text style={globalstyles.boldtext}> Date: </Text>
                    <Text style={globalstyles.normaltext}>
                      {' '}
                      {val.checkinTime.slice(0, 10)}{' '}
                    </Text>
                  </View>
                  <View style={globalstyles.textcontainer}>
                    <Text style={globalstyles.boldtext}> Start Time: </Text>
                    <Text style={globalstyles.normaltext}>
                      {' '}
                      {val.checkinTime.slice(11, 19)}{' '}
                    </Text>
                  </View>
                  <View style={globalstyles.textcontainer}>
                    <Text style={globalstyles.boldtext}> End Time: </Text>
                    <Text style={globalstyles.normaltext}>
                      {' '}
                      {val.checkoutTime.slice(11, 19)}{' '}
                    </Text>
                  </View>
                  <View style={globalstyles.textcontainer}>
                    <Text style={globalstyles.boldtext}> Total Tine: </Text>
                    <Text style={globalstyles.normaltext}>
                      {' '}
                      {val.totalHours}{' '}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        )}
      </View>
    </ScrollView>
    // </LinearGradient>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#d2fcdc',
  },
  maindiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    alignSelf: 'center',
    color: 'black',
    // marginTop: responsiveFontSize(1),
    paddingTop: responsiveFontSize(4),
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: '#338B47',
  },
});
