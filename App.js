

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Main from './screens/Main/Main'
import IndividualList from './screens/IndivualLists/IndividualList'

const AppStack = createSwitchNavigator({
  Main: Main,
  IndividualList: IndividualList
})

const AppContainer = createAppContainer(AppStack)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default AppContainer