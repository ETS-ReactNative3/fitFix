import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Form from "./components/Form";
import List from "./components/List";
import Details from "./components/Details";

const Stack = createNativeStackNavigator();

function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: "Welcome" }} />
        <Stack.Screen name="Form" component={Form} options={{ title: "Form" }} />
        <Stack.Screen name="List" component={List} options={{ title: "Exercise List" }} />
        <Stack.Screen name="Details" component={Details} options={{ title: "Exercise Details" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
