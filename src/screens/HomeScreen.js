import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {GLOBALSTYLE} from '../utils/Theme';

const HomeScreen = () => {
  return (
    <View style={GLOBALSTYLE.rootContainer}>
      <Text style={GLOBALSTYLE.heading}>Protected Landing Screen</Text>
      <Text style={GLOBALSTYLE.heading}>Welcome User!</Text>
    </View>
  );
};

export default HomeScreen;
