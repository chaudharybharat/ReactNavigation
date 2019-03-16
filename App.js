/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './HomeScreen';
import Login from './Login';

const MainNavigator = createStackNavigator({
  HomeScreen: {screen: HomeScreen},
    Login: {screen: Login},
});

const App = createAppContainer(MainNavigator);

export default App;
