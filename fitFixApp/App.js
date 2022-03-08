import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Form from "./components/Form";
import List from "./components/List";
import Details from "./components/Details";
import axios from "axios";
const baseUrl = "https://wger.de/api/v2";

const exercises = axios.get(`${baseUrl}/exerciseinfo/`).then(response => {
  console.log(response.data.results);
  return response.data.results;
});

const equipment = axios.get(`${baseUrl}/equipment/`).then(response => {
  console.log(response.data.results);
  return response.data.results;
});

const muscles = axios.get(`${baseUrl}/muscle/`).then(response => {
  console.log(response.data.results);
  return response.data.results;
});

/*
https://wger.de/api/v2/equipment/
https://wger.de/api/v2/muscle/`
https://wger.de/api/v2/exerciseinfo/
 */
const Stack = createNativeStackNavigator();

function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: "Welcome" }} />
        <Stack.Screen name="Form" component={Form} options={{ title: "Form" }} muscles={muscles} equipment={equipment} />
        <Stack.Screen name="List" component={List} options={{ title: "Exercise List" }} exercises={exercises} />
        <Stack.Screen name="Details" component={Details} options={{ title: "Exercise Details" }} exercises={exercises} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
