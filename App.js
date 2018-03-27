/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import FirstScreen from './app/components/firstScreen';
import SecondScreen from './app/components/secondScreen';

import HomeStack from './app/navigation/HomeStack';
import MenuStack from './app/navigation/MenuStack';

import { TabNavigator, TabBarBottom } from 'react-navigation';

const routeConfiguration = {
  Menu: { screen: MenuStack },
  Home: { screen: HomeStack },
}

const TabNavigation = TabNavigator(routeConfiguration, 
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
)

export default class App extends Component {
  render() {
    return (
      <TabNavigation />
    );
  }
}
