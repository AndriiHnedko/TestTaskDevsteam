import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Store from './source/redux/store/Index';
import StackNavigation from './source/navigation/Index';

class App extends React.PureComponent {
  render() {
    return (
      <NavigationContainer>
        <Provider store={Store}>
          <StackNavigation />
        </Provider>
      </NavigationContainer>
    );
  }
}

export default App;
