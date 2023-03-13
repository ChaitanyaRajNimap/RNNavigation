import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {GLOBALSTYLE} from '../utils/Theme';

const SignUpScreen = ({onSignUp}) => {
  return (
    <View style={GLOBALSTYLE.rootContainer}>
      <Text style={GLOBALSTYLE.heading}>Public Sign Up Screen</Text>
      <Button title="Sign Up" onPress={onSignUp} />
    </View>
  );
};

export default SignUpScreen;
