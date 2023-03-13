import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {GLOBALSTYLE} from '../utils/Theme';

const LandingScreen = ({navigation}) => {
  return (
    <View style={GLOBALSTYLE.rootContainer}>
      <Text style={GLOBALSTYLE.heading}>Public Landing Screen</Text>
      <Button
        title="Go To Sign In"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
};

export default LandingScreen;
