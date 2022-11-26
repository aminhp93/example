import React from 'react';
import DrawerNavigatorScreen from '../DrawerNavigator/DrawerNavigator.Screen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RootContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerNavigatorScreen">
        <Stack.Screen
          name="DrawerNavigatorScreen"
          component={DrawerNavigatorScreen}
        />
        {/* <Stack.Screen
          name="DetailProfileScreen"
          component={DetailProfileScreen}
        />
        <Stack.Screen
          name="DetailFollowerScreen"
          component={DetailFollowerScreen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootContainer;
