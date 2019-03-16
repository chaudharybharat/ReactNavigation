import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Button} from 'react-native';
import React, {Component} from 'react';
import Login from './Login'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
  title: 'Home',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Jane's Login"
        onPress={() => navigate('Login', {name: 'Jane'})}
      />
    );
  }
}
