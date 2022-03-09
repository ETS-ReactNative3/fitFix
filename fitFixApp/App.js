import * as React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Form from "./components/Form";
import List from "./components/List";
import Details from "./components/Details";
import axios from "axios";

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
          <Stack.Screen name="List" component={List} options={{ title: "Exercise List" }} />
          <Stack.Screen name="Details" component={Details} options={{ title: "Exercise Details" }} /*exercises={exercises}*/ />
        </Stack.Navigator>
      </NavigationContainer>
      <View>
        {/* <Text>{console.log(makeExerciseRequest())}</Text> */}
        {/* <Text>{console.log(makeEquipmentRequest())}</Text> */}
      </View>
    </>
  );
}

export default App;
