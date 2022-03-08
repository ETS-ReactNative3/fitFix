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

const makeExerciseRequest = async () => {
  try {
    const response = await axios.get(`${baseUrl}/exerciseinfo/` /*, config*/);
    if (response.status === 200) {
      // response - object, eg { status: 200, message: 'OK' }
      console.log("exercise success stuff");
      console.log(response.data.results);
      return response.data.results;
    }
    return false;
  } catch (err) {
    console.error(err);
    return false;
  }
};

/*
https://wger.de/api/v2/equipment/
https://wger.de/api/v2/muscle/`
https://wger.de/api/v2/exerciseinfo/
 */
const Stack = createNativeStackNavigator();

function App({ navigation }) {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ title: "Welcome" }} />
          <Stack.Screen
            name="Form"
            component={Form}
            options={{ title: "Form" }}
            /* muscles={makeMuscleRequest()}*/
            /*equipment={makeEquipmentRequest()}*/
          />
          <Stack.Screen name="List" component={List} options={{ title: "Exercise List" }} /*exercises={exercises}*/ />
          <Stack.Screen name="Details" component={Details} options={{ title: "Exercise Details" }} /*exercises={exercises}*/ />
        </Stack.Navigator>
      </NavigationContainer>
      <View>
        <Text>{console.log(makeExerciseRequest())}</Text>
        {/* <Text>{console.log(makeEquipmentRequest())}</Text> */}
      </View>
    </>
  );
}

export default App;
