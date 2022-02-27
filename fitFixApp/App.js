import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import List from './components/List';
import Details from './components/Details';

const Stack = createNativeStackNavigator();

function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome' }}/>
        <Stack.Screen name="Form1" component={Form1} options={{ title: 'Form1' }}/>
        <Stack.Screen name="Form2" component={Form2} options={{ title: 'Form2' }}/>
        <Stack.Screen name="List" component={List} options={{ title: 'Exercise List' }} />
        <Stack.Screen name="Details" component={Details} options={{ title: 'Exercise Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
