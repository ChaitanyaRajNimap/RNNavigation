import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {
  NavigationContainer,
  DrawerActions,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import LandingScreen from './src/screens/LandingScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgetPswdScreen from './src/screens/ForgetPswdScreen';
import AccountScreen from './src/screens/AccountScreen';
import ChangePswdScreen from './src/screens/ChangePswdScreen';
import AdminScreen from './src/screens/AdminScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const HomeDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeTabs}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Account"
        component={AccountScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="ForgetPswd"
        component={ForgetPswdScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="ChangePswd"
        component={ChangePswdScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Admin"
        component={AdminScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  const [isAuthenticated, SetIsAuthenticated] = useState(false);

  const handleSignIn = () => SetIsAuthenticated(true);

  const handleSignOut = () => SetIsAuthenticated(false);

  const handleSignUp = () => SetIsAuthenticated(true);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Screen
            name="Home"
            component={HomeDrawer}
            options={({route, navigation}) => ({
              headerTitle: getFocusedRouteNameFromRoute(route),
              headerLeft: () => (
                <Button
                  title="Menu"
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }
                />
              ),
              headerRight: () => (
                <Button title="Sign Out" onPress={handleSignOut} />
              ),
            })}
          />
        ) : (
          <>
            <Stack.Screen
              name="Landing"
              component={LandingScreen}
              options={{
                animationTypeForReplace: 'pop',
              }}
            />
            <Stack.Screen name="SignIn">
              {props => <SignInScreen {...props} onSignIn={handleSignIn} />}
            </Stack.Screen>
            <Stack.Screen name="SignUp">
              {props => <SignUpScreen {...props} onSignUp={handleSignUp} />}
            </Stack.Screen>
            <Stack.Screen name="ForgetPswd" component={ForgetPswdScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
