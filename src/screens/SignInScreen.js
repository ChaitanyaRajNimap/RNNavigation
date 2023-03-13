import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {GLOBALSTYLE} from '../utils/Theme';

const SignInScreen = ({navigation, onSignIn}) => {
  return (
    <View style={GLOBALSTYLE.rootContainer}>
      <Text style={GLOBALSTYLE.heading}>Public Sign In Screen</Text>
      <Button title="Sign In" onPress={onSignIn} />
      <Text style={[GLOBALSTYLE.heading, {margin: 10}]}>OR</Text>
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
      <Text style={[GLOBALSTYLE.heading, {margin: 10}]}>OR</Text>
      <Button
        title="Forget Password"
        onPress={() => navigation.navigate('ForgetPswd')}
      />
    </View>
  );
};

export default SignInScreen;
