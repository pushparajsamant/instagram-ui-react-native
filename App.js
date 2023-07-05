import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import MainDrawer from './navigation/MainDrawer';

const App = () => {
  return (
    <NavigationContainer>
      <MainDrawer />
    </NavigationContainer>
  );
};
export default App;
