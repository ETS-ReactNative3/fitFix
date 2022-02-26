import {createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../components/Home';
import Header from '../components/Header';

const screens = {
  Home: {
    screen: App
  },
  Header: {
    screen: Header
  }
}

const HomeStack = createStackNavigator (screens);

export default createAppContainer(HomeStack)