/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import SplashScreen from './App/Components/SplashComponent/SplashScreen.js';
import DashboardScreen from './App/Components/DashboardComponent/DashboardScreen.js';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Strings_EN from './App/Constants/Strings_EN.js';

Strings = Strings_EN;

const App = () => (
  <Router>
    <Stack key="root">
      <Scene key="SplashScreen" component={SplashScreen} title="SplashScreen" hideNavBar={true} />
      <Scene key="DashboardScreen" component={DashboardScreen} title="DashboardScreen" hideNavBar={true} initial />
    </Stack>
  </Router>
);

export default App;
