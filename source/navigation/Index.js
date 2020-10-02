import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Posts from '../pages/posts/Index';
import ImageFull from '../pages/image/Index';

const Stack = createStackNavigator();

class Navigation extends React.PureComponent {
  render() {
    return (
      <Stack.Navigator initialRouteName="Posts">
        <Stack.Screen name={'Posts'} component={Posts} />
        <Stack.Screen name={'ImageFull'} component={ImageFull} />
      </Stack.Navigator>
    );
  }
}

export default Navigation;
