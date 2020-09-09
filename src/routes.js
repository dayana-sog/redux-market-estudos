import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import BottomTabNav from './components/BottomTabNav';

const Routes = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000"
      />
      <NavigationContainer>
        <BottomTabNav />
      </NavigationContainer>
    </>
  );
};

export default Routes;