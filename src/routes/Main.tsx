import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ShowData from '../screens/ShowData';
import EditFormData from '../screens/EditFormData';

const Main = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Show" component={ShowData} />
      <Stack.Screen name="Edit" component={EditFormData} />
    </Stack.Navigator>
  );
};

export default Main;
