import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GLOBALSTYLE} from '../utils/Theme';

const ProfileScreen = () => {
  return (
    <View style={GLOBALSTYLE.rootContainer}>
      <Text style={GLOBALSTYLE.heading}>Protected Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;
