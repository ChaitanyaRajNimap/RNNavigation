import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GLOBALSTYLE} from '../utils/Theme';

const AdminScreen = () => {
  return (
    <View style={GLOBALSTYLE.rootContainer}>
      <Text style={GLOBALSTYLE.heading}>Protected Admin Screen</Text>
    </View>
  );
};

export default AdminScreen;
