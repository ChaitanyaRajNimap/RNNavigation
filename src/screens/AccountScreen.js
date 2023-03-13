import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GLOBALSTYLE} from '../utils/Theme';

const AccountScreen = () => {
  return (
    <View style={GLOBALSTYLE.rootContainer}>
      <Text style={GLOBALSTYLE.heading}>Protected Account Screen</Text>
    </View>
  );
};

export default AccountScreen;
