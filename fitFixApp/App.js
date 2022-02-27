import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from './components/List';
import Home from './components/Home';

const Stack = createNativeStackNavigator();

function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome' }}/>
        <Stack.Screen name="List" component={List} options={{ title: 'Exercise List' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
