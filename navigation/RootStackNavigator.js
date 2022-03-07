import React from 'react';
import {MarketScreen} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Market"
        component={MarketScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
