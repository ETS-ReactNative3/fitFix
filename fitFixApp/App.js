import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Form from "./components/Form";
import List from "./components/List";
import Details from "./components/Details";
import { View } from "react-native";
// import { NativeBaseProvider, Text, Box } from "native-base";
import { v4 as uuidv4 } from "uuid";

const Stack = createNativeStackNavigator();

function App({ navigation }) {
  return (
    // <NativeBaseProvider>
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ title: "Welcome" }} />
          <Stack.Screen
            name="Form"
            component={Form}
            options={{ title: "Form" }}
            /*equipment={makeEquipmentRequest()}*/
          />
          <Stack.Screen name="List" component={List} options={{ title: "Exercise List" }} />
          <Stack.Screen name="Details" component={Details} options={{ title: "Exercise Details" }} /*exercises={exercises}*/ />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    // </NativeBaseProvider>
  );
}

export default App;
